'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center py-40 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white px-4">
      {/* Effet de halo lumineux derrière la photo */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.7, scale: 1.1 }}
          transition={{ duration: 1.2, type: "spring" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500 blur-3xl rounded-full z-0"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative z-10"
        >
          <Image
            src="/Var.jpeg"
            alt="Photo de Doumba"
            width={144}
            height={144}
            className="w-36 h-36 rounded-full border-4 border-blue-400 shadow-2xl object-cover"
            priority
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        className="bg-gray-800/80 rounded-2xl shadow-2xl p-8 max-w-2xl w-full mt-8 backdrop-blur-md"
      >
        <h1 className="text-4xl font-extrabold mb-2 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
          À propos de moi
        </h1>
        <h2 className="text-xl text-blue-300 mb-4 text-center font-semibold">Doumba Arsel – Développeur Web Fullstack</h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-gray-200 text-center mb-6 leading-relaxed"
        >
          Passionné par la création d’expériences web <span className="text-blue-400 font-bold">innovantes</span> et <span className="text-purple-400 font-bold">immersives</span>.<br />
          J’aime transformer des idées en interfaces élégantes et performantes.<br />
          <span className="text-blue-300 font-semibold">React, Next.js, Node.js, Tailwind CSS</span> sont mes outils de prédilection.<br />
          Toujours prêt à relever de nouveaux défis et à apprendre les dernières technologies !
        </motion.p>
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-400" />
            <Link
              href="mailto:amakita124@gmail.com"
              className="underline text-blue-200 hover:text-blue-400 transition"
            >
              amakita124@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-400" />
            <Link
              href="https://wa.me/24176516947"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-300 hover:text-green-400 transition"
            >
              WhatsApp : 076 516 947
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-blue-300" />
            <span className="text-blue-200">Téléphone : 060 453 557</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Me contacter
          </Link>
          <Link
            href="/projects"
            className="bg-gray-700 px-6 py-2 rounded-full font-bold shadow-lg hover:bg-gray-600 transition"
          >
            Voir mes projets
          </Link>
        </div>
      </motion.div>
    </main>
  );
}