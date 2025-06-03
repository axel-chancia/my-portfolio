'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserTie, FaCode,  FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function CvCard() {
  // Particules lumineuses fixes
  const particles = [
    { top: '10%', left: '15%', size: 24 },
    { top: '20%', left: '75%', size: 30 },
    { top: '35%', left: '50%', size: 28 },
    { top: '45%', left: '20%', size: 22 },
    { top: '60%', left: '70%', size: 26 },
    { top: '75%', left: '40%', size: 32 },
    { top: '80%', left: '10%', size: 18 },
    { top: '5%', left: '60%', size: 30 },
    { top: '50%', left: '90%', size: 20 },
    { top: '15%', left: '35%', size: 24 },
    { top: '25%', left: '80%', size: 30 },
    { top: '70%', left: '55%', size: 26 },
    { top: '40%', left: '65%', size: 22 },
    { top: '65%', left: '25%', size: 28 },
    { top: '90%', left: '85%', size: 20 },
    { top: '30%', left: '10%', size: 24 },
    { top: '60%', left: '5%', size: 18 },
    { top: '10%', left: '90%', size: 32 },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-900 via-blue-900 to-black rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto mt-12 text-white overflow-hidden"
    >
      {/* Halo lumineux animé */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.5, scale: 1.1 }}
        transition={{ duration: 1.2, type: "spring" }}
        className="absolute left-0 top-0 w-96 h-96 bg-blue-500 blur-3xl rounded-full z-0"
      />
      {/* Particules lumineuses fixes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400 opacity-20 blur-2xl"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: particle.top,
              left: particle.left,
            }}
            animate={{
              y: [0, 10, 0],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      {/* Colonne gauche : Infos principales */}
      <div className="relative z-10 flex flex-col items-start md:w-1/3 w-full mb-8 md:mb-0">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-blue-300 text-2xl font-bold">
            <FaUserTie className="animate-pulse" />
            DOUMBA Arsel
          </div>
          <div className="flex items-center gap-2 text-sm text-blue-200">
            <FaMapMarkerAlt className="text-blue-400 animate-bounce" />
            Adresse : <span className="font-semibold text-white">Sotéga, Libreville</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-blue-200">
            <FaPhone className="text-blue-400 animate-bounce" />
            Téléphone : <span className="font-semibold text-white">076516947 / 060453557</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-blue-200">
            <FaEnvelope className="text-blue-400 animate-bounce" />
            <Link href="mailto:amakita124@gmail.com" className="underline text-blue-100 hover:text-blue-400 transition" >
              amakita124@gmail.com
            </Link>
          </div>
        </div>
      </div>
      {/* Colonne droite : CV */}
      <div className="relative z-10 md:w-2/3 w-full md:pl-8">
        <Section title="Domaine de compétences" icon={<FaCode className="text-blue-400" />}>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>
              <span className="font-semibold text-blue-300">Développeur Web Frontend :</span> Je conçois des interfaces web avec Next.js, Tailwind et HTML. Je crée des pages dynamiques, connectées à des APIs, tout en améliorant mes compétences en CSS et JavaScript.
            </li>
            <li>
              <span className="font-semibold text-blue-300">Agent cartographe :</span> J’ai réalisé des missions de recensement sur le terrain en collectant des données auprès des ménages à l’aide d’une tablette, avec rigueur et précision.
            </li>
          </ul>
        </Section>
        <Section title="Expériences Professionnelles" icon={<FaBriefcase className="text-blue-400" />}>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>
              <span className="font-semibold text-blue-300">Direction Générale de la Statistique (DGS)</span><br />
              <span className="italic">Recensement Général de la Population et des Logements (RGPL)</span><br />
              <span className="font-semibold">Poste :</span> Agent cartographe<br />
              <span className="font-semibold">Période :</span> 2023 – 2024 (8 mois)
              <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                <li>Réalisation de la cartographie censitaire numérique</li>
                <li>Collecte et gestion de données géographiques sur le terrain à l’aide d’une tablette</li>
                <li>Identification et délimitation des zones de dénombrement</li>
                <li>Travail de terrain avec rigueur et précision dans la mise à jour des données</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-blue-300">2017/2018 :</span> Récolteur – Olam (4 mois)
            </li>
          </ul>
        </Section>
        <Section title="Formation" icon={<FaGraduationCap className="text-blue-400" />}>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>2025 : Formation Développeur Web – École 241</li>
            <li>2023/2024 : Formation cartographie – DGS</li>
            <li>2021-2024 : Licence Histoire et Archéologie – Université Omar Bongo</li>
          </ul>
        </Section>
        <Section title="Diplômes obtenus" icon={<FaGraduationCap className="text-purple-400" />}>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>2024 : Licence Histoire et Archéologie – Université Omar Bongo, Libreville</li>
            <li>2021 : Baccalauréat A1 – Lycée Paul Indjendjet Ngondjout, Libreville</li>
            <li>2017 : BEPC – Collège Louis Bigmann, Libreville</li>
            <li>2011 : CEP – École Publique d’Angondjé, Libreville</li>
          </ul>
        </Section>
      </div>
    </motion.section>
  );
}

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex items-center gap-2 text-lg font-bold mb-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
      >
        {icon}
        <span>{title}</span>
        <motion.span
          layoutId="underline"
          className="ml-2 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
        />
      </motion.h3>
      <div>{children}</div>
    </div>
  );
}
