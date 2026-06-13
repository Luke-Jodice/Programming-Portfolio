"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="max-w-md rounded-xl bg-white p-8 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          Something went wrong
        </h2>
        <p className="mt-2 text-gray-600">
          An unexpected error occurred while loading this page.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 font-medium text-white transition-opacity hover:opacity-90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
