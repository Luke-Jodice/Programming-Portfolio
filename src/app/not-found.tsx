import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="max-w-md rounded-2xl border border-line bg-surface p-8 text-center">
        <p className="text-sm font-semibold text-primary">404</p>
        <h2 className="mt-2 text-2xl font-bold text-ink">Page not found</h2>
        <p className="mt-2 text-body">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-2 font-medium text-white transition-opacity hover:opacity-90"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
