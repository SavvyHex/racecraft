'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black border-b border-red-600 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-red-600 hover:text-red-500 transition">
          Racecraft
        </Link>
        
        <div className="flex gap-8">
          <Link 
            href="/" 
            className="text-gray-300 hover:text-red-600 transition font-medium"
          >
            Home
          </Link>
          <Link 
            href="/races" 
            className="text-gray-300 hover:text-red-600 transition font-medium"
          >
            Races
          </Link>
          <Link 
            href="/championship" 
            className="text-gray-300 hover:text-red-600 transition font-medium"
          >
            Championship
          </Link>
          <Link 
            href="/circuits" 
            className="text-gray-300 hover:text-red-600 transition font-medium"
          >
            Circuits
          </Link>
        </div>
      </div>
    </nav>
  );
}
