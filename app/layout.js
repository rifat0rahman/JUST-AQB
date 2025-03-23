import Image from "next/image";
import "./globals.css";
import Link from "next/link";
export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body>
        <div>
          <nav className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0 text-xl font-bold flex">
                  <img src="https://cse.just.edu.bd/img/just.jpg" className="w-10" alt=""></img>
                  <p className="mt-2 ms-2">JUST AQB</p>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
                  <Link
                    href="/"
                    className="font-bold text-gray-700 hover:text-grey-900 rounded-md text-sm"
                  >
                    Base
                  </Link>
                  <Link
                    href="/departments"
                    className="font-bold text-gray-700 hover:text-grey-900 rounded-md text-sm"
                  >
                    Departments
                  </Link>
                </div>
              </div>
            </div>
          </nav>

        </div>

        {children}
      </body>
    </html>


  );
}
