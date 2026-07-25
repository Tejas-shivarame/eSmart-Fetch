export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-base px-6">
      <div className="h-10 w-64 animate-pulse rounded-full bg-white/[0.06]" />
      <div className="h-16 w-full max-w-2xl animate-pulse rounded-2xl bg-white/[0.04]" />
      <div className="h-16 w-full max-w-xl animate-pulse rounded-2xl bg-white/[0.04]" />
      <div className="flex gap-4">
        <div className="h-12 w-40 animate-pulse rounded-full bg-white/[0.06]" />
        <div className="h-12 w-40 animate-pulse rounded-full bg-white/[0.04]" />
      </div>
    </div>
  );
}