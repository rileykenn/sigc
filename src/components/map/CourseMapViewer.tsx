'use client';

import { Suspense, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { toast } from 'sonner';
import { ArrowLeft, X, MapPin, Camera, Save, Settings2, MousePointerClick, Trash2, Play, Square, Lock } from 'lucide-react';
import MapScene, { type CameraView, type EditTarget } from './MapScene';
import { holes } from '@/data/courseData';
import {
  holeMarkers as initialMarkers,
  defaultTees as initialTees,
  defaultHoleViews as initialHoleViews,
  defaultCamera,
  defaultLens as initialLens,
  defaultTerrain,
  defaultTrees,
  type HoleMarker,
  type TerrainConfig,
  type TreeConfig,
  type LensConfig,
  type HoleView,
} from '@/data/holeMarkers';

function HolePanel({ hole, onClose }: { hole: number; onClose: () => void }) {
  const data = holes.find((h) => h.number === hole);
  if (!data) return null;

  const frame = `/mapmedia/holemedia/web/hole${data.number}poster.jpg`;
  const video = `/mapmedia/holemedia/web/hole${data.number}.mp4`;

  return (
    <motion.aside
      initial={{ x: 420, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 420, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      className="pointer-events-auto absolute inset-x-3 bottom-3 overflow-hidden rounded-2xl bg-white/95 shadow-xl shadow-navy-950/25 backdrop-blur sm:inset-x-auto sm:right-4 sm:top-4 sm:bottom-4 sm:flex sm:w-[380px] sm:flex-col"
      aria-label={`Hole ${data.number} details`}
    >
      {/* hero: the hole's still frame, an image card of its own */}
      <div className="relative aspect-video shrink-0 bg-navy-950">
        <Image
          src={frame}
          alt={`Aerial view of hole ${data.number}`}
          fill
          sizes="380px"
          className="object-cover"
          priority
        />
        <span className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/25" />
        <span className="absolute left-4 bottom-3">
          <span className="block text-[11px] font-semibold uppercase tracking-wide text-gold-300">
            Hole {data.number}
          </span>
          <span className="block font-display text-3xl font-semibold text-white">
            Par {data.par}
          </span>
        </span>
        <button
          onClick={onClose}
          aria-label="Close hole details"
          className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-navy-950/55 text-white backdrop-blur transition hover:bg-navy-950/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X size={18} strokeWidth={2} />
        </button>
      </div>

      <div className="p-5 sm:min-h-0 sm:flex-1 sm:overflow-y-auto">
        <dl className="grid grid-cols-3 gap-3 rounded-xl bg-sand-100 px-4 py-3 tabular-nums">
          <div>
            <dt className="text-[11px] text-navy-900/50">Men</dt>
            <dd className="font-display text-2xl font-semibold text-navy-950">{data.metresMen}m</dd>
          </div>
          <div>
            <dt className="text-[11px] text-navy-900/50">Women</dt>
            <dd className="font-display text-2xl font-semibold text-navy-950">{data.metresWomen}m</dd>
          </div>
          <div>
            <dt className="text-[11px] text-navy-900/50">Index</dt>
            <dd className="font-display text-2xl font-semibold text-navy-950">{data.strokeIndex}</dd>
          </div>
        </dl>

        <p className="mt-4 text-sm leading-relaxed text-navy-900/75">{data.description}</p>
        {data.tip && (
          <p className="mt-3 rounded-xl border border-gold-400/40 bg-gold-400/10 p-3 text-sm leading-relaxed text-navy-900">
            <span className="font-semibold">Local tip: </span>
            {data.tip}
          </p>
        )}

        {/* the drone flyover: its own separate video card */}
        <div className="mt-4">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-navy-800">
            <Play size={12} strokeWidth={2.5} className="fill-navy-800" />
            Drone flyover
          </p>
          <video
            key={data.number}
            src={`${video}#t=0.001`}
            controls
            loop
            playsInline
            preload="metadata"
            className="aspect-video w-full rounded-xl bg-navy-950 object-cover shadow-md shadow-navy-950/15"
          />
        </div>
      </div>
    </motion.aside>
  );
}

/* ---------- Temporary config panel (removed once values are locked in) ---------- */

function Slider({
  label,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-[11px] font-medium text-navy-900/80">
        {label}
        <span className="font-mono text-[10px] text-navy-900/60">{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-0.5 w-full accent-navy-800"
      />
    </label>
  );
}

function ConfigPanel({
  markers,
  tees,
  editHole,
  editTarget,
  onEditTarget,
  holeView,
  lens,
  onLensChange,
  terrain,
  onTerrainChange,
  trees,
  onTreesChange,
  draftCamera,
  onSetKeyframe,
  onCaptureCamera,
  onClearHoleView,
  onAnimSeconds,
  previewing,
  onTogglePreview,
  onSave,
  saving,
  onClose,
}: {
  markers: HoleMarker[];
  tees: HoleMarker[];
  editHole: number | null;
  editTarget: EditTarget;
  onEditTarget: (t: EditTarget) => void;
  holeView: HoleView | null;
  lens: LensConfig;
  onLensChange: (patch: Partial<LensConfig>) => void;
  terrain: TerrainConfig;
  onTerrainChange: (patch: Partial<TerrainConfig>) => void;
  trees: TreeConfig;
  onTreesChange: (patch: Partial<TreeConfig>) => void;
  draftCamera: CameraView | null;
  onSetKeyframe: (k: 1 | 2) => void;
  onCaptureCamera: () => void;
  onClearHoleView: () => void;
  onAnimSeconds: (v: number) => void;
  previewing: boolean;
  onTogglePreview: () => void;
  onSave: () => void;
  saving: boolean;
  onClose: () => void;
}) {
  const context = editHole !== null ? `Hole ${editHole}` : 'Default view';
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="pointer-events-auto absolute left-3 top-3 max-h-[calc(100%-24px)] w-[280px] overflow-y-auto rounded-2xl bg-white/95 p-4 text-navy-950 shadow-xl shadow-navy-950/15 backdrop-blur"
    >
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-sm font-bold">
          <Settings2 size={16} strokeWidth={2} /> Config editor
        </p>
        <button
          onClick={onClose}
          aria-label="Hide config editor"
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-navy-700 hover:bg-sand-100"
        >
          <X size={16} strokeWidth={2} />
        </button>
      </div>

      <div className="mt-3 space-y-3 text-xs leading-relaxed">
        <div className="rounded-lg bg-sand-100 p-3">
          <p className="font-semibold">
            Camera and lens <span className="ml-1 rounded bg-navy-900 px-1.5 py-0.5 text-[10px] font-bold text-white">{context}</span>
          </p>
          <p className="mt-1 text-navy-900/70">
            {editHole !== null
              ? 'These settings apply when this hole is opened.'
              : 'These settings apply to the main map view.'}
          </p>
          <div className="mt-2 space-y-1.5">
            <Slider label="Field of view" min={18} max={95} step={1} value={lens.fov} onChange={(v) => onLensChange({ fov: v })} />
            <Slider label="Aperture (blur)" min={0} max={8} step={0.1} value={lens.bokehScale} onChange={(v) => onLensChange({ bokehScale: v })} />
            <Slider label="Depth of field" min={0.2} max={30} step={0.1} value={lens.focusRange} onChange={(v) => onLensChange({ focusRange: v })} />
            <label className="flex items-center gap-2 text-[11px] font-medium text-navy-900/80">
              <input
                type="checkbox"
                checked={lens.focusDistance === null}
                onChange={(e) => onLensChange({ focusDistance: e.target.checked ? null : 6 })}
                className="accent-navy-800"
              />
              Auto focus point (hole or camera target)
            </label>
            {lens.focusDistance !== null && (
              <Slider label="Focus distance" min={0.5} max={30} step={0.1} value={lens.focusDistance} onChange={(v) => onLensChange({ focusDistance: v })} />
            )}
          </div>
          {editHole !== null ? (
            <>
              <div className="mt-2 flex gap-1.5">
                <button
                  onClick={() => onSetKeyframe(1)}
                  className="flex-1 cursor-pointer rounded-full bg-navy-900 px-2 py-2 text-[11px] font-bold text-white transition hover:bg-navy-800 active:scale-[0.98]"
                >
                  Set keyframe 1{holeView ? ' ✓' : ''}
                </button>
                <button
                  onClick={() => onSetKeyframe(2)}
                  className="flex-1 cursor-pointer rounded-full bg-navy-900 px-2 py-2 text-[11px] font-bold text-white transition hover:bg-navy-800 active:scale-[0.98]"
                >
                  Set keyframe 2{holeView?.position2 ? ' ✓' : ''}
                </button>
              </div>
              <p className="mt-1 text-[10px] text-navy-900/60">
                Keyframe 1 is where the camera arrives. With keyframe 2 set, it slowly drifts 1 → 2 → 1 on loop.
              </p>
              {holeView?.position2 && (
                <div className="mt-1.5">
                  <Slider
                    label="Animation speed (seconds per leg)"
                    min={2}
                    max={40}
                    step={0.5}
                    value={holeView.animSeconds ?? 8}
                    onChange={onAnimSeconds}
                  />
                  <button
                    onClick={onTogglePreview}
                    className={`mt-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-1.5 font-semibold transition active:scale-[0.98] ${
                      previewing ? 'bg-gold-400 text-navy-950' : 'border border-navy-200 text-navy-800 hover:border-navy-400'
                    }`}
                  >
                    {previewing ? <Square size={12} strokeWidth={2} /> : <Play size={12} strokeWidth={2} />}
                    {previewing ? 'Stop preview' : 'Preview animation'}
                  </button>
                </div>
              )}
              {holeView && (
                <button
                  onClick={onClearHoleView}
                  className="mt-1.5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-navy-200 px-3 py-1.5 font-semibold text-navy-800 transition hover:border-navy-400"
                >
                  <Trash2 size={13} strokeWidth={2} />
                  Clear this hole&apos;s view and keyframes
                </button>
              )}
            </>
          ) : (
            <button
              onClick={onCaptureCamera}
              className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-navy-900 px-3 py-2 font-semibold text-white transition hover:bg-navy-800 active:scale-[0.98]"
            >
              <Camera size={14} strokeWidth={2} />
              Use current view as default
            </button>
          )}
          {editHole === null && draftCamera && (
            <p className="mt-2 rounded bg-white px-2 py-1 font-mono text-[10px] text-navy-900/70">
              pos [{draftCamera.position.map((n) => n.toFixed(1)).join(', ')}]
              <br />
              target [{draftCamera.target.map((n) => n.toFixed(1)).join(', ')}]
            </p>
          )}
        </div>

        <div className="rounded-lg bg-sand-100 p-3">
          <p className="flex items-center gap-1.5 font-semibold">
            <MousePointerClick size={14} strokeWidth={2} /> Flags and tees
          </p>
          <p className="mt-1 text-navy-900/70">
            Click a flag to select its hole, then drag the arrows.
          </p>
          {editHole !== null && (
            <>
              <div className="mt-2 flex gap-1.5">
                {(['flag', 'tee'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => onEditTarget(t)}
                    className={`flex-1 cursor-pointer rounded-full px-2 py-1.5 text-[11px] font-bold capitalize transition ${
                      editTarget === t ? 'bg-navy-900 text-white' : 'bg-white text-navy-800 hover:bg-navy-50'
                    }`}
                  >
                    Move {t}
                  </button>
                ))}
              </div>
              <p className="mt-1.5 font-mono text-[10px] text-navy-900/60">
                flag u {markers.find((m) => m.hole === editHole)?.u.toFixed(3)}, v{' '}
                {markers.find((m) => m.hole === editHole)?.v.toFixed(3)}
                <br />
                tee u {tees.find((t) => t.hole === editHole)?.u.toFixed(3)}, v{' '}
                {tees.find((t) => t.hole === editHole)?.v.toFixed(3)}
              </p>
            </>
          )}
        </div>

        <div className="rounded-lg bg-sand-100 p-3">
          <p className="font-semibold">Hills</p>
          <div className="mt-1.5 space-y-1.5">
            <Slider label="Hill height" min={0} max={5} step={0.1} value={terrain.elevation} onChange={(v) => onTerrainChange({ elevation: v })} />
            <Slider label="Texture size" min={0.2} max={150} step={0.5} value={terrain.texScale} onChange={(v) => onTerrainChange({ texScale: v })} />
            <Slider label="Black point" min={0} max={150} step={1} value={terrain.blackPoint} onChange={(v) => onTerrainChange({ blackPoint: v })} />
            <Slider label="White point" min={120} max={255} step={1} value={terrain.whitePoint} onChange={(v) => onTerrainChange({ whitePoint: v })} />
            <Slider label="Contrast" min={-100} max={100} step={1} value={terrain.contrast} onChange={(v) => onTerrainChange({ contrast: v })} />
            <Slider label="Saturation" min={0} max={2.5} step={0.05} value={terrain.saturation} onChange={(v) => onTerrainChange({ saturation: v })} />
          </div>
        </div>

        <div className="rounded-lg bg-sand-100 p-3">
          <p className="font-semibold">Trees and bushes</p>
          <div className="mt-1.5 space-y-1.5">
            <Slider label="Hue shift" min={-180} max={180} step={1} value={trees.hue} onChange={(v) => onTreesChange({ hue: v })} />
            <Slider label="Saturation" min={0} max={2} step={0.05} value={trees.saturation} onChange={(v) => onTreesChange({ saturation: v })} />
            <Slider label="Lightness" min={0.4} max={1.6} step={0.02} value={trees.lightness} onChange={(v) => onTreesChange({ lightness: v })} />
          </div>
        </div>

        <button
          onClick={onSave}
          disabled={saving}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gold-400 px-3 py-2.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-300 active:scale-[0.98] disabled:opacity-50"
        >
          <Save size={15} strokeWidth={2} />
          {saving ? 'Saving…' : 'Save config'}
        </button>
      </div>
    </motion.div>
  );
}

export default function CourseMapViewer() {
  const [markers, setMarkers] = useState<HoleMarker[]>(initialMarkers);
  const [tees, setTees] = useState<HoleMarker[]>(initialTees);
  const [holeViews, setHoleViews] = useState<Record<string, HoleView>>(initialHoleViews);
  const [lens, setLens] = useState<LensConfig>(initialLens);
  const [terrain, setTerrain] = useState<TerrainConfig>(defaultTerrain);
  const [trees, setTrees] = useState<TreeConfig>(defaultTrees);
  const [selectedHole, setSelectedHole] = useState<number | null>(null);
  const [editHole, setEditHole] = useState<number | null>(null);
  const [editTarget, setEditTarget] = useState<EditTarget>('flag');
  const [configOpen, setConfigOpen] = useState(false);
  const [configUnlocked, setConfigUnlocked] = useState(
    () => typeof window !== 'undefined' && sessionStorage.getItem('sigc-config-unlocked') === '1'
  );
  const [askPassword, setAskPassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [previewing, setPreviewing] = useState(false);
  const [draftCamera, setDraftCamera] = useState<CameraView | null>(null);
  const [saving, setSaving] = useState(false);
  const reducedMotion = useReducedMotion();
  const viewApi = useRef<{ getView: () => CameraView } | null>(null);

  const configMode = configOpen;
  const contextHole = configMode ? editHole : selectedHole;
  const contextLens: LensConfig =
    contextHole !== null ? (holeViews[String(contextHole)]?.lens ?? lens) : lens;

  const updateLens = (patch: Partial<LensConfig>) => {
    if (configMode && editHole !== null) {
      setHoleViews((prev) => {
        const key = String(editHole);
        const view = viewApi.current?.getView() ?? {
          position: defaultCamera.position,
          target: defaultCamera.target,
        };
        const base = prev[key] ?? { ...view, lens: { ...lens } };
        return { ...prev, [key]: { ...base, lens: { ...base.lens, ...patch } } };
      });
    } else {
      setLens((l) => ({ ...l, ...patch }));
    }
  };

  const captureCamera = () => {
    if (!viewApi.current) return;
    setDraftCamera(viewApi.current.getView());
    toast.success('Default camera view captured. Save the config to keep it.');
  };

  const setKeyframe = (k: 1 | 2) => {
    if (editHole === null || !viewApi.current) return;
    const view = viewApi.current.getView();
    setHoleViews((prev) => {
      const key = String(editHole);
      const base: HoleView =
        prev[key] ?? ({ position: view.position, target: view.target, lens: { ...lens } } as HoleView);
      if (k === 1) {
        return { ...prev, [key]: { ...base, position: view.position, target: view.target } };
      }
      return {
        ...prev,
        [key]: {
          ...base,
          position2: view.position,
          target2: view.target,
          animSeconds: base.animSeconds ?? 8,
        },
      };
    });
    toast.success(`Keyframe ${k} set for hole ${editHole}. Save the config to keep it.`);
  };

  const setAnimSeconds = (v: number) => {
    if (editHole === null) return;
    setHoleViews((prev) => {
      const key = String(editHole);
      const base = prev[key];
      if (!base) return prev;
      return { ...prev, [key]: { ...base, animSeconds: v } };
    });
  };

  const clearHoleView = () => {
    if (editHole === null) return;
    setHoleViews((prev) => {
      const next = { ...prev };
      delete next[String(editHole)];
      return next;
    });
    toast.success(`Hole ${editHole} view cleared; it will use the automatic framing.`);
  };

  const saveConfig = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/map-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          camera: draftCamera ?? defaultCamera,
          lens,
          markers,
          tees,
          holeViews,
          terrain,
          trees,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      toast.success('Map config saved.');
    } catch {
      toast.error('Could not save the config.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-navy-950">
      <header className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/course"
          className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-3 text-sm font-medium text-sand-50/90 transition hover:text-sand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300"
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
          Back to course
        </Link>
        <div className="flex items-center gap-2 text-sand-50">
          <MapPin size={16} strokeWidth={2} className="text-gold-300" />
          <span className="font-display text-lg font-semibold">Course map</span>
          <span className="rounded-full bg-gold-400/20 px-2 py-0.5 text-[11px] font-semibold text-gold-300">
            beta
          </span>
        </div>
        <button
          onClick={() => {
            if (configOpen) {
              setConfigOpen(false);
            } else if (configUnlocked) {
              setConfigOpen(true);
            } else {
              setPasswordInput('');
              setAskPassword(true);
            }
            setEditHole(null);
            setPreviewing(false);
          }}
          className={`inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-full border px-3 text-xs font-semibold transition ${
            configOpen
              ? 'border-gold-400 bg-gold-400 text-navy-950'
              : 'border-sand-50/30 text-sand-50/90 hover:border-sand-50/60'
          }`}
        >
          {configUnlocked ? <Settings2 size={14} strokeWidth={2} /> : <Lock size={13} strokeWidth={2} />}
          Config
        </button>
      </header>

      <div className="relative mx-3 mb-3 min-h-[420px] flex-1 overflow-hidden rounded-2xl sm:mx-4 sm:mb-4">
        <div
          className="absolute inset-0 touch-none"
          onClick={() => {
            // clicking anywhere outside the card (flags stop propagation)
            // closes it and flies the camera back to the default view
            if (!configMode && selectedHole !== null) setSelectedHole(null);
          }}
        >
          <Canvas camera={{ position: defaultCamera.position, fov: initialLens.fov }} dpr={[1, 2]}>
            <Suspense fallback={null}>
              <MapScene
                markers={markers}
                tees={tees}
                selectedHole={selectedHole}
                onSelectHole={setSelectedHole}
                configMode={configMode}
                editHole={editHole}
                editTarget={editTarget}
                onEditHole={(h) => {
                  setEditHole(h);
                  setEditTarget('flag');
                  setPreviewing(false);
                }}
                onMarkerDragged={(hole, u, v) =>
                  setMarkers((prev) => prev.map((m) => (m.hole === hole ? { ...m, u, v } : m)))
                }
                onTeeDragged={(hole, u, v) =>
                  setTees((prev) => prev.map((t) => (t.hole === hole ? { ...t, u, v } : t)))
                }
                onReady={(api) => {
                  viewApi.current = api;
                }}
                reducedMotion={!!reducedMotion}
                terrain={terrain}
                trees={trees}
                lens={contextLens}
                controlsEnabled={configMode}
                cameraHole={configMode ? (previewing ? editHole : null) : selectedHole}
                holeView={
                  configMode
                    ? previewing && editHole !== null
                      ? (holeViews[String(editHole)] ?? null)
                      : null
                    : selectedHole !== null
                      ? (holeViews[String(selectedHole)] ?? null)
                      : null
                }
              />
            </Suspense>
          </Canvas>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20">
          <AnimatePresence>
            {!configMode && selectedHole !== null && (
              <HolePanel key="hole-panel" hole={selectedHole} onClose={() => setSelectedHole(null)} />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {configOpen && (
              <ConfigPanel
                key="config-panel"
                markers={markers}
                tees={tees}
                editHole={editHole}
                editTarget={editTarget}
                onEditTarget={setEditTarget}
                holeView={editHole !== null ? (holeViews[String(editHole)] ?? null) : null}
                lens={contextLens}
                onLensChange={updateLens}
                terrain={terrain}
                onTerrainChange={(patch) => setTerrain((t) => ({ ...t, ...patch }))}
                trees={trees}
                onTreesChange={(patch) => setTrees((t) => ({ ...t, ...patch }))}
                draftCamera={draftCamera}
                onSetKeyframe={setKeyframe}
                onCaptureCamera={captureCamera}
                onClearHoleView={clearHoleView}
                onAnimSeconds={setAnimSeconds}
                previewing={previewing}
                onTogglePreview={() => setPreviewing((v) => !v)}
                onSave={saveConfig}
                saving={saving}
                onClose={() => {
                  setConfigOpen(false);
                  setEditHole(null);
                  setPreviewing(false);
                }}
              />
            )}
          </AnimatePresence>

          {!configMode && selectedHole === null && (
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-navy-950/60 px-4 py-2 text-xs font-medium text-sand-50/90 backdrop-blur">
              Tap a numbered flag to fly to a hole
            </p>
          )}

          <AnimatePresence>
            {askPassword && (
              <motion.div
                key="config-lock"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-auto absolute inset-0 z-30 flex items-center justify-center bg-navy-950/60 backdrop-blur-sm"
                onClick={() => setAskPassword(false)}
              >
                <motion.form
                  initial={{ scale: 0.92, y: 10 }}
                  animate={{ scale: 1, y: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (passwordInput === 'sigc26') {
                      setConfigUnlocked(true);
                      sessionStorage.setItem('sigc-config-unlocked', '1');
                      setAskPassword(false);
                      setConfigOpen(true);
                      toast.success('Config editor unlocked.');
                    } else {
                      toast.error('Wrong password.');
                      setPasswordInput('');
                    }
                  }}
                  className="w-[280px] rounded-2xl bg-white p-5 shadow-xl shadow-navy-950/30"
                >
                  <p className="flex items-center gap-2 text-sm font-bold text-navy-950">
                    <Lock size={15} strokeWidth={2} /> Config editor
                  </p>
                  <p className="mt-1 text-xs text-navy-900/60">Enter the password to unlock editing.</p>
                  <input
                    type="password"
                    autoFocus
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Password"
                    className="mt-3 w-full rounded-lg border border-navy-200 px-3 py-2.5 text-sm text-navy-950 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/30"
                  />
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setAskPassword(false)}
                      className="flex-1 cursor-pointer rounded-full border border-navy-200 px-3 py-2 text-xs font-semibold text-navy-800 transition hover:border-navy-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 cursor-pointer rounded-full bg-navy-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-navy-800 active:scale-[0.98]"
                    >
                      Unlock
                    </button>
                  </div>
                </motion.form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Accessible fallback: plain hole list mirrors the map hotspots */}
      <nav aria-label="Holes" className="px-4 pb-4 sm:px-6">
        <ul className="flex flex-wrap gap-2">
          {markers.map((m) => (
            <li key={m.hole}>
              <button
                onClick={() => setSelectedHole(m.hole)}
                className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300 ${
                  selectedHole === m.hole
                    ? 'border-gold-300 bg-gold-400 text-navy-950'
                    : 'border-sand-50/20 text-sand-50/80 hover:border-sand-50/50'
                }`}
              >
                {m.hole}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
