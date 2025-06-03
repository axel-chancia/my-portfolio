'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Variantes d'animation pour le menu mobile (changement ici pour un dropdown)
  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 }, // Commence légèrement au-dessus et plus petit
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 20 } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { ease: 'easeInOut', duration: 0.2 } },
  };

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/projects", label: "Mes projets" },
    { href: "/about", label: "A propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center h-20">
        {/* Logo et titre du portfolio */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="rounded-full shadow-md"
          />
          <h2 className="text-xl font-semibold whitespace-nowrap">Mon portfolio</h2>
        </div>

        {/* Liens de navigation pour les écrans larges (desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-center px-4 py-2 rounded-lg bg-blue-500 text-base font-medium text-white transition-colors hover:bg-blue-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bouton Menu Hamburger pour les écrans mobiles et tablettes */}
        {/* Ajout de 'relative' au conteneur du bouton pour positionner le menu déroulant */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Menu mobile déroulant (s'affiche lorsque menuOpen est true) */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                // Changement de la position et de la taille du menu ici
                className="absolute right-0 mt-3 w-48 bg-blue-700 rounded-md shadow-lg p-2 z-50 origin-top-right"
              >
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)} // Ferme le menu après un clic
                      className="block px-4 py-2 text-white text-base font-medium hover:bg-blue-600 rounded-md transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}