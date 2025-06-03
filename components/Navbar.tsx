'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Animation pour le halo lumineux derrière le logo
  const haloVariants = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.35, 0.6, 0.35],
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // Animation de survol pour les liens
  const linkHover = {
    scale: 1.08,
    color: "#fff",
    background: "linear-gradient(90deg,#2563eb,#7c3aed)",
    boxShadow: "0 2px 16px 0 #2563eb44"
  };

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/projects", label: "Mes projets" },
    { href: "/about", label: "A propos" },
    { href: "/contact", label: "Contact" },
  ];

  // Animation menu mobile
  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 20 } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { ease: 'easeInOut', duration: 0.2 } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500/80 backdrop-blur-md text-white shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center h-20 relative">
        {/* Logo et titre du portfolio */}
        <div className="flex items-center space-x-3 relative">
          {/* Halo animé */}
          <motion.div
            variants={haloVariants}
            animate="animate"
            className="absolute -left-3 -top-3 w-16 h-16 bg-blue-400 blur-2xl rounded-full z-0"
          />
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="rounded-full shadow-lg border-2 border-white relative z-10"
          />
          <h2 className="text-xl font-extrabold whitespace-nowrap bg-gradient-to-r from-blue-100 via-white to-blue-300 bg-clip-text text-transparent drop-shadow-lg select-none">
            Mon portfolio
          </h2>
        </div>

        {/* Liens de navigation desktop */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={linkHover}
              className="relative"
            >
              <Link
                href={link.href}
                className={`text-center px-4 py-2 rounded-lg text-base font-semibold transition-colors duration-200 ${
                  pathname === link.href
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-transparent text-white hover:bg-blue-400/60"
                }`}
              >
                {link.label}
              </Link>
              {/* Soulignement animé pour le lien actif */}
              {pathname === link.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-4 right-4 -bottom-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Menu mobile */}
        <div className="lg:hidden relative z-20">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                className="absolute right-0 mt-3 w-56 bg-blue-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-4 z-50 origin-top-right border border-blue-300/20"
              >
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-4 py-2 text-white text-base font-semibold rounded-lg transition-colors ${
                        pathname === link.href
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow"
                          : "hover:bg-blue-600/70"
                      }`}
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