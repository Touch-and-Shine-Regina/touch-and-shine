export default function HomeLoading() {
  return (
    <div
      className="min-h-svh bg-[#161410] text-white"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="flex h-14 items-center justify-between border-b border-[#EAB308]/20 px-4 lg:h-16 lg:px-8">
        <div className="skeleton h-9 w-28" />
        <div className="hidden items-center gap-3 lg:flex">
          <div className="skeleton h-3 w-16" />
          <div className="skeleton h-3 w-16" />
          <div className="skeleton h-3 w-16" />
          <div className="skeleton h-9 w-9" />
          <div className="skeleton h-9 w-28" />
        </div>
        <div className="skeleton h-9 w-16 lg:hidden" />
      </div>

      <div className="relative min-h-[calc(100svh-3.5rem)] overflow-hidden lg:min-h-[calc(100svh-4rem)]">
        <div className="skeleton absolute inset-0 opacity-90 lg:inset-y-0 lg:right-0 lg:left-auto lg:w-[52%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#161410] via-[#161410]/85 to-transparent lg:w-[55%]" />

        <div className="relative z-10 flex max-w-xl flex-col gap-4 px-5 pt-12 sm:pt-16 lg:px-16 lg:pt-24">
          <div className="skeleton h-3 w-36" />
          <div className="skeleton h-12 w-[88%] sm:h-16" />
          <div className="skeleton h-12 w-[72%] sm:h-16" />
          <div className="skeleton mt-2 h-4 w-[90%] max-w-md" />
          <div className="skeleton h-4 w-[70%] max-w-sm" />
          <div className="mt-6 flex gap-3">
            <div className="skeleton h-11 w-40" />
            <div className="skeleton h-11 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}
