import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CvCard from '@/components/CvCard'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-30 min-h-screen bg-gray-900 text-white">
      <Image
        src="/profile.jpg"
        alt="Photo de profil"
        width={128}
        height={128}
        className="rounded-full w-32 h-32 mb-6 border-4 border-blue-500 shadow-lg object-cover"
        priority
      />
      <h1 className="text-4xl font-bold mb-2">Salut, je suis DOUMBA Arsel</h1>
      <h2 className="text-xl mb-6 text-blue-400">Développeur Web Fullstack</h2>
      <p className="max-w-xl text-center mb-8">
        Passionné par la création d’expériences web modernes, performantes et accessibles.
      </p>
      <Link
        href="/about"
        className="px-6 py-3 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-600 transition"
      >
        En savoir plus
      </Link>
      <CvCard/>
    </main>
  )
}