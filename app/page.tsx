'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between min-h-screen px-5 py-10 md:py-24 bg-blue-200">
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={350}
          height={350}
          className="rounded-full shadow-lg object-cover"
        />
      </div>
      <div className="md:w-1/2 space-y-4 text-center md:text-rigth">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
          Bienvenue sur mon Portfolio
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Je suis M.DOUMBA Arsel, développeur web frontend passionné par les projets modernes et performants.
        </p>
        <Link
          href="/projects"
          className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
        >
          Voir mes projets
        </Link>
      </div>
    </main>
  );
}
