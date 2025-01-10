import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="z-50 flex w-full flex-wrap border-b border-gray-200 bg-gray-800 py-3 text-sm sm:flex-nowrap sm:justify-start sm:py-0 ">
        <nav
          className="relative mx-auto w-full max-w-7xl px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="w-full flex-none p-6 text-xl font-semibold text-white"
              href="/"
              aria-label="Brand"
            >
              To-Do List Generator
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
