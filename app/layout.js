"use client"
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, [pathname]);
  return (
    <html lang="en" data-arp="">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="JUST AQB" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JUST AQB" />
        <meta name="description" content="JUST AQB - Academic Question Bank" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#016630" />

        {/* PWA Links */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* iOS Splash Screens (Optional but recommended) */}
        <link rel="apple-touch-startup-image" href="/icon-512x512.png" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </head>
      <title>{pathname.split("/").pop() || "JUST AQB"}</title>
      <body>
        <div>
          <nav className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo Section */}
                <div className="flex-shrink-0 text-xl font-bold flex">

                  <Image
                    src="/logo.png"
                    width={40}  // Adjust this to the size you need
                    height={40} // Adjust this to the size you need
                    alt="JUST Logo"
                  />
                  <p className="mt-2 ms-2 text-green-800">JUST AQB</p>
                </div>

                {/* Navigation Links for Large Screens (Centered) */}
                <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
                  <Link
                    href="/"
                    className={`text-sm rounded-md ${pathname === "/"
                        ? "text-red-900"
                        : "text-gray-700 hover:text-gray-900"
                      }`}
                    aria-current={pathname === "/" ? "page" : undefined}
                  >
                    Base
                  </Link>
                  <Link
                    href="/departments"
                    className={`text-sm rounded-md ${pathname === "/departments"
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
                    className={`text-sm rounded-md ${pathname === "/"
                        ? "text-red-900"
                        : "text-gray-700 hover:text-gray-900"
                      }`}
                    aria-current={pathname === "/" ? "page" : undefined}
                  >
                    Base
                  </Link>
                  <Link
                    href="/departments"
                    className={`text-sm rounded-md ${pathname === "/departments"
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