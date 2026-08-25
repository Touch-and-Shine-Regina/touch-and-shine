export default function PrivacyLoading() {
  return (
    <div
      className="min-h-svh bg-cream px-4 py-10"
      aria-busy="true"
      aria-label="Loading privacy policy"
    >
      <div className="mx-auto max-w-3xl space-y-5">
        <div className="skeleton h-3 w-20" />
        <div className="skeleton h-10 w-56 sm:w-72" />
        <div className="skeleton h-4 w-40" />
        <div className="mt-8 space-y-3">
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-[95%]" />
          <div className="skeleton h-4 w-[88%]" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-[70%]" />
        </div>
      </div>
    </div>
  );
}
