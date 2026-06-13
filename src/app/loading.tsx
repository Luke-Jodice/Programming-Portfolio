export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div
        role="status"
        aria-live="polite"
        className="flex items-center gap-3 rounded-lg bg-white px-6 py-4 text-gray-600 shadow-sm"
      >
        <svg
          aria-hidden
          className="h-5 w-5 animate-spin text-primary"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <span>Loading…</span>
      </div>
    </div>
  );
}
