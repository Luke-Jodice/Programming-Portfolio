import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="max-w-md rounded-xl bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold text-primary">404</p>
        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          Page not found
        </h2>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 font-medium text-white transition-opacity hover:opacity-90"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
