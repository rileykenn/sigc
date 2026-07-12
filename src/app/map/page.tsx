'use client';

import dynamic from 'next/dynamic';

const CourseMapViewer = dynamic(() => import('@/components/map/CourseMapViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[100dvh] items-center justify-center bg-navy-950">
      <p className="font-display text-2xl text-sand-50/80">Loading the course…</p>
    </div>
  ),
});

export default function MapPage() {
  return <CourseMapViewer />;
}
