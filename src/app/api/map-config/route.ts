import { NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';

// Dev-only helper for the temporary map config editor: persists camera,
// lens, marker/tee positions, per-hole views and environment tuning into
// src/data/map-config.json. Disabled in production builds.

const CONFIG_PATH = path.join(process.cwd(), 'src', 'data', 'map-config.json');

const num = (v: unknown, fallback: number, min: number, max: number) =>
  typeof v === 'number' && Number.isFinite(v)
    ? Math.min(max, Math.max(min, Math.round(v * 10000) / 10000))
    : fallback;

const vec3 = (v: unknown): [number, number, number] | null =>
  Array.isArray(v) && v.length === 3 && v.every((n) => typeof n === 'number' && Number.isFinite(n))
    ? (v.map((n) => Math.round(n * 1000) / 1000) as [number, number, number])
    : null;

function cleanLens(l: Record<string, unknown> | undefined | null) {
  const src = l ?? {};
  return {
    fov: num(src.fov, 46, 15, 100),
    bokehScale: num(src.bokehScale, 2, 0, 10),
    focusRange: num(src.focusRange, 8, 0.1, 40),
    focusDistance:
      typeof src.focusDistance === 'number' && Number.isFinite(src.focusDistance)
        ? num(src.focusDistance, 6, 0.2, 40)
        : null,
  };
}

export async function GET() {
  const raw = await fs.readFile(CONFIG_PATH, 'utf8');
  return NextResponse.json(JSON.parse(raw));
}

export async function POST(req: Request) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Config editing is disabled in production' }, { status: 403 });
  }
  const body = await req.json();
  const camPos = vec3(body?.camera?.position);
  const camTarget = vec3(body?.camera?.target);
  const markersOk = (arr: unknown): arr is { hole: number; u: number; v: number }[] =>
    Array.isArray(arr) && arr.length === 9;
  if (!camPos || !camTarget || !markersOk(body.markers) || !markersOk(body.tees)) {
    return NextResponse.json({ error: 'Invalid config shape' }, { status: 400 });
  }

  const cleanPoints = (arr: { hole: number; u: number; v: number }[]) =>
    arr.map((m) => ({ hole: m.hole, u: num(m.u, 0.5, 0, 1), v: num(m.v, 0.5, 0, 1) }));

  const holeViews: Record<string, unknown> = {};
  if (body.holeViews && typeof body.holeViews === 'object') {
    for (const [key, view] of Object.entries(body.holeViews as Record<string, Record<string, unknown>>)) {
      if (!/^[1-9]$/.test(key) || !view) continue;
      const p = vec3(view.position);
      const t = vec3(view.target);
      if (!p || !t) continue;
      const p2 = vec3(view.position2);
      const t2 = vec3(view.target2);
      holeViews[key] = {
        position: p,
        target: t,
        position2: p2 && t2 ? p2 : null,
        target2: p2 && t2 ? t2 : null,
        animSeconds: num(view.animSeconds, 8, 0.5, 60),
        lens: cleanLens(view.lens as Record<string, unknown>),
      };
    }
  }

  const terrain = body.terrain ?? {};
  const trees = body.trees ?? {};
  const clean = {
    camera: { position: camPos, target: camTarget },
    lens: cleanLens(body.lens),
    markers: cleanPoints(body.markers),
    tees: cleanPoints(body.tees),
    holeViews,
    terrain: {
      texScale: num(terrain.texScale, 2.5, 0.2, 500),
      blackPoint: num(terrain.blackPoint, 0, 0, 150),
      whitePoint: num(terrain.whitePoint, 255, 120, 255),
      contrast: num(terrain.contrast, 0, -100, 100),
      saturation: num(terrain.saturation, 1, 0, 2.5),
      elevation: num(terrain.elevation, 2.2, 0, 5),
    },
    trees: {
      hue: num(trees.hue, 0, -180, 180),
      saturation: num(trees.saturation, 1, 0, 2),
      lightness: num(trees.lightness, 1, 0.3, 1.8),
    },
  };
  await fs.writeFile(CONFIG_PATH, JSON.stringify(clean, null, 2) + '\n');
  return NextResponse.json({ ok: true });
}
