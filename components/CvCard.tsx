'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CvCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-900 via-blue-900 to-black rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto mt-12 text-white overflow-hidden"
    >
      {/* Halo lumineux */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.4, scale: 1.1 }}
        transition={{ duration: 1.2, type: "spring" }}
        className="absolute left-0 top-0 w-80 h-80 bg-blue-500 blur-3xl rounded-full z-0"
      />
      {/* Colonne gauche : Photo + infos */}
      <div className="relative z-10 flex flex-col items-center md:items-start md:w-1/3 w-full mb-8 md:mb-0">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/profile.jpg"
            alt="Photo de Doumba Arsel"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full border-4 border-blue-400 shadow-2xl mb-4 bg-gray-900 object-cover"
            priority
          />
          <h2 className="text-2xl font-bold text-blue-300 mb-2 text-center md:text-left">DOUMBA Arsel</h2>
          <p className="text-xs text-gray-300 text-center md:text-left mb-1">
            Né le 28 juin 1995 à Makouke, Agros-Gabon<br />
            Nationalité : Gabonaise | Célibataire | Sexe : Masculin
          </p>
          <p className="text-xs text-gray-300 text-center md:text-left mb-1">
            <span className="font-semibold">Tel :</span> 076 516 947 / 060 453 557
          </p>
          <p className="text-xs text-gray-300 text-center md:text-left">
            <span className="font-semibold">Email :</span>{' '}
            <a href="mailto:amakita124@gmail.com" className="underline text-blue-200">amakita124@gmail.com</a>
          </p>
        </div>
      </div>
      {/* Colonne droite : CV */}
      <div className="relative z-10 md:w-2/3 w-full md:pl-8">
        <Section title="Profil">
          Jeune professionnel dynamique, polyvalent et rigoureux, formé en histoire, archéologie et développement web, avec une expérience concrète en cartographie de terrain. Apte à évoluer aussi bien dans des environnements académiques que techniques ou commerciaux.
        </Section>
        <Section title="Compétences">
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><span className="font-semibold text-blue-300">Développement Web Frontend :</span> HTML, CSS, JavaScript, Next.js, etc.</li>
            <li><span className="font-semibold text-blue-300">Cartographie :</span> Expérience terrain en recensement cartographique avec la DGS.</li>
            <li><span className="font-semibold text-blue-300">Sciences humaines :</span> Solide formation universitaire en Histoire et Archéologie.</li>
            <li><span className="font-semibold text-blue-300">Qualités personnelles :</span> Ponctuel, dynamique, respectueux, doté d&apos;un bon relationnel.</li>
          </ul>
        </Section>
        <Section title="Formation">
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>2025 : Formation Développeur Web - Ecole 241</li>
            <li>2023-2024 : Formation en Cartographie - DGS (Recensement RGPL)</li>
            <li>2021-2024 : Licence en Histoire et Archéologie - Université Omar Bongo</li>
            <li>2022 : Formation Développeur Web (non finalisée) - Ecole 241</li>
          </ul>
        </Section>
        <Section title="Diplômes">
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>2024 : Licence Histoire et Archéologie - Université Omar Bongo</li>
            <li>2021 : Baccalauréat A1 - Lycée Paul INDJENDJET NGONDJOUT</li>
            <li>2017 : BEPC - Collège Louis BIGMANN</li>
            <li>2011 : CEP - École Publique d&apos;Angondje</li>
          </ul>
        </Section>
        <Section title="Expérience Professionnelle">
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>2023-2024 : Agent cartographe - DGS, projet RGPL (8 mois)</li>
            <li>2023 : Agent commercial - Boutique de prêt-à-porter</li>
            <li>2017-2018 : Récolteur - Sous-traitance Olam</li>
          </ul>
        </Section>
      </div>
    </motion.section>
  );
}

// Composant pour les titres de section
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-bold mb-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">{title}</h3>
      <div>{children}</div>
    </div>
  );
}