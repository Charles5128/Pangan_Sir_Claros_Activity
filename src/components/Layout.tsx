"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-950 bg-opacity-90 text-white shadow-lg font-serif">
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          {/* Project Title */}
          <h1 className="text-4xl font-semibold tracking-wider">
            <Link href="/" className="hover:text-gray-300 transition duration-300">
              Midterm Project
            </Link>
          </h1>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            {/* Home Button (Fixed) */}
            <Link
              href="/"
              className="px-5 py-2 border border-white text-white rounded-lg transition duration-300 hover:bg-white hover:text-blue-900"
            >
              Home
            </Link>

            {/* Products Button */}
            <Link
              href="/products"
              className="px-5 py-2 border border-white text-white rounded-lg transition duration-300 hover:bg-white hover:text-blue-900"
            >
              Products
            </Link>

            {/* ToDos Button */}
            <Link
              href="/todos"
              className="px-5 py-2 border border-white text-white rounded-lg transition duration-300 hover:bg-white hover:text-blue-900"
            >
              ToDos
            </Link>

            {/* Carts Button */}
            <Link
              href="/carts"
              className="px-5 py-2 border border-white text-white rounded-lg transition duration-300 hover:bg-white hover:text-blue-900"
            >
              Carts
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen bg-gray-100 py-12 px-8">
        <div className="container mx-auto bg-white p-10 rounded-xl shadow-lg">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
