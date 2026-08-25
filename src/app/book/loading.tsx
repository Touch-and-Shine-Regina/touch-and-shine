export default function BookLoading() {
  return (
    <div
      className="flex h-svh max-h-svh flex-col overflow-hidden bg-[#161410]"
      aria-busy="true"
      aria-label="Loading booking"
    >
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-[#EAB308]/20 px-4 lg:h-16 lg:px-8">
        <div className="skeleton h-9 w-28" />
        <div className="skeleton h-9 w-24" />
      </div>
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#EAB308]/25 px-4 py-3 sm:px-6">
        <div className="min-w-0 space-y-2">
          <div className="skeleton h-2.5 w-24" />
          <div className="skeleton h-6 w-48 sm:w-56" />
        </div>
        <div className="skeleton h-9 w-20 shrink-0" />
      </div>
      <div className="skeleton min-h-0 flex-1 w-full opacity-80" />
    </div>
  );
}
