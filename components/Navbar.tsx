'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <section className='flex justify-around shadow-2xl min-hw-screen items-center p-0 m-0 rounded-xs bg-blue-500 h-full w-full gap-100 ms:gap-25 '>
         <div className='flex justify-center items-center p-2 m-2 '>
            <Image
                   src="/logo.png"
                   alt="logo"
                   width={80}
                   height={80}
                   className="rounded-full shadow-lg "
            />
            <h2 className='m-1 font size-2'>Mon portfolio</h2>
        </div>
        <div className='flex justify-center itms-center '>
          <Link href="/app" className='text-center p-2 m-2 rounded-lg bg-blue-500 text-sm font-medium text-white transition-colors hover:bg-blue-300 md:text-max-12 ms:text-max-6 
               '>Accueil</Link> 
          <Link href="/projects" className=' text-center m-2 p-2 rounded-lg bg-blue-500 text-sm font-medium text-white transition-colors hover:bg-blue-300 md:text-max-12 ms:text-max-6
               '>Mes projets</Link> 
          <Link href="/about" className=' text-center p-2 m-2 rounded-lg bg-blue-500 text-sm font-medium text-white transition-colors hover:bg-blue-300 md:text-max-12 ms:text-max-6
               '>A propos</Link> 
          <Link href="/contact" className=' text-center p-2 m-2 rounded-lg bg-blue-500 text-sm font-medium text-white transition-colors hover:bg-blue-300 md:text-max-12 ms:text-max-6
               '>contact</Link> 
      </div>
    </section>
  )
}
