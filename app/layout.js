"use client"
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true); // Start loading
      const timer = setTimeout(() => setIsLoading(false), 100); // Simulate load finish timing
      return () => clearTimeout(timer);
    }, [pathname]); // Run when path changes
  return (
    <html lang="en" data-arp="">
      <body>
        <div>
        <nav className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo Section */}
              <div className="flex-shrink-0 text-xl font-bold flex">
                <img
                  src="https://cse.just.edu.bd/img/just.jpg"
                  className="w-10"
                  alt="JUST Logo"
                />
                <p className="mt-2 ms-2 text-green-800">JUST AQB</p>
              </div>

              {/* Navigation Links for Large Screens (Centered) */}
              <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
                <Link
                  href="/"
                  className={`text-sm rounded-md ${
                    pathname === "/"
                      ? "text-red-900"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  Base
                </Link>
                <Link
                  href="/departments"
                  className={`text-sm rounded-md ${
                    pathname === "/departments"
                      ? "text-red-900"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Departments
                </Link>
              </div>

              {/* Navigation Links for Small Screens (Left-Aligned) */}
              <div className="sm:hidden flex absolute right-4 space-x-6">
                <Link
                  href="/"
                  className={`text-sm rounded-md ${
                    pathname === "/"
                      ? "text-red-900"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  Base
                </Link>
                <Link
                  href="/departments"
                  className={`text-sm rounded-md ${
                    pathname === "/departments"
                      ? "text-red-900"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Departments
                </Link>
              </div>
            </div>
          </div>
        </nav>
        </div>
        <NextTopLoader color="#016630" shadow="white" height={3} easing="ease" showSpinner={false} crawl={true} />
        {children}
      </body>
    </html>
  );
}
