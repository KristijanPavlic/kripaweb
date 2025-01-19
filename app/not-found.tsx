import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F6F6F6]">
      <div className="text-center px-6 py-12">
        <h1 className="text-6xl font-bold text-[#1A1A1A] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#5725F6] text-white font-medium px-6 py-3 rounded hover:bg-[#1A1A1A] transition-all duration-300 ease-in-out"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
