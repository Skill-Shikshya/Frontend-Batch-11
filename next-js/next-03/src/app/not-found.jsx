import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-lg text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-blue-500 px-6 py-2 text-white transition hover:bg-blue-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
