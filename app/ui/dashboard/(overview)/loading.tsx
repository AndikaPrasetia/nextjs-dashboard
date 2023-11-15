import DashboardSkeleton from '@/app/ui/skeletons';

/**
 * 'loading.tsx' adalah file Next.js khusus yang dibangun atas-
 * 'Suspense', memungkinkan membuat loading UI untuk tampilan-
 * pengganti saat konten halaman di load.
 */
export default function Loading() {
    return <DashboardSkeleton />;
  }