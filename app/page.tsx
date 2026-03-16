import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center min-h-screen">
        {/* Logo/Title */}
        <h1 className="text-6xl md:text-7xl font-bold text-red-600 mb-4">
          Racecraft
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Dive into the world of Formula 1. Track races, championship standings, and iconic circuits.
        </p>
        
        {/* CTA Button */}
        <Link 
          href="/races"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition text-lg"
        >
          Explore Races
        </Link>
      </div>
    </main>
  );
}
