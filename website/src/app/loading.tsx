export default function Loading() {
  return (
    <div className="animate-pulse space-y-4" aria-busy="true" aria-label="Loading">
      <div className="h-9 w-2/3 rounded-lg bg-hover" />
      <div className="h-4 w-1/2 rounded bg-hover" />
      <div className="h-40 rounded-xl bg-hover" />
    </div>
  );
}
