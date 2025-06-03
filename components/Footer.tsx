'use client' // N'oubliez pas cette directive pour les composants côté client

import React from 'react'
import Link from 'next/link' // Importez Link de Next.js pour la navigation interne
import Image from 'next/image' // Importez Image de Next.js pour de meilleures performances d'image
import { Linkedin, Github, Twitter } from 'lucide-react' // Importez des icônes de réseaux sociaux

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Obtenez l'année actuelle dynamiquement
  const portfolioOwner = "Doumba Arsel"; // Mettez votre nom ici, trouvé dans votre CV

  return (
    // Conteneur principal du pied de page : couleur de fond, padding vertical/horizontal et ombre
    <footer className="bg-blue-950 text-white py-8 px-4 sm:px-6 lg:px-8 shadow-inner">
      {/* Conteneur pour le contenu interne du pied de page : largeur maximale, centré, disposition flexible */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">

        {/* Section 1: Logo et Marque */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-shrink-0">
          <Link href="/" className="flex items-center space-x-3 mb-2 hover:opacity-80 transition-opacity">
            {/* Utilisation du composant Image de Next.js */}
            <Image
              src="/logo.png" // Assurez-vous d'avoir votre logo à cet emplacement dans /public
              alt="Logo Portfolio"
              width={40} // Taille du logo
              height={50}
              className="rounded-full shadow-md"
            />
            <span className="text-2xl font-bold whitespace-nowrap">Mon Portfolio</span>
          </Link>
          <p className="text-sm text-blue-200 mt-2">
            Développeur Web Frontend - Spécialiste Next.js
            {/* Si vous voulez ajouter l'École 241 : */}
            {/* <br />École 241 */}
          </p>
        </div>

        {/* Section 2: Liens de Navigation Rapide */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[120px]">
          <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-1">Navigation</h3>
          <ul className="space-y-2">
            <li><Link href="/app" className="text-blue-200 hover:text-white transition-colors text-base">Accueil</Link></li>
            <li><Link href="/projects" className="text-blue-200 hover:text-white transition-colors text-base">Mes Projets</Link></li>
            <li><Link href="/about" className="text-blue-200 hover:text-white transition-colors text-base">À Propos</Link></li>
            <li><Link href="/contact" className="text-blue-200 hover:text-white transition-colors text-base">Contact</Link></li>
          </ul>
        </div>

        {/* Section 3: Liens vers les Réseaux Sociaux */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-1">Me Suivre</h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/fred-makita-a21635231/" // Remplacez par votre lien LinkedIn
              target="_blank" // Ouvre dans un nouvel onglet
              rel="noopener noreferrer" // Bonne pratique de sécurité
              aria-label="LinkedIn" // Améliore l'accessibilité
              className="text-blue-300 hover:text-white transition-colors transform hover:scale-110"
            >
              <Linkedin size={28} /> {/* Taille de l'icône */}
            </Link>
            <Link
              href="https://github.com/axel-chancia" // Remplacez par votre lien GitHub
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-blue-300 hover:text-white transition-colors transform hover:scale-110"
            >
              <Github size={28} />
            </Link>
            <Link
              href="https://twitter.com/votre-utilisateur-twitter" // Remplacez par votre lien Twitter (X)
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-blue-300 hover:text-white transition-colors transform hover:scale-110"
            >
              <Twitter size={28} />
            </Link>
            {/* Vous pouvez ajouter d'autres icônes ici (ex: Instagram, Dribbble, etc.) */}
          </div>
        </div>
      </div>

      {/* Ligne de séparation */}
      <hr className="border-blue-700 my-8" />

      {/* Section Copyright */}
      <div className="text-center text-sm text-blue-300 space-y-1">
        <p>&copy; {currentYear} {portfolioOwner}. Tous droits réservés.</p>
        <p>Conçu et développé avec ❤️ par {portfolioOwner}.</p>
        {/* Vous pouvez ajouter des informations supplémentaires comme le nom de votre école ou la technologie utilisée */}
        <p className="text-xs">Propulsé par Next.js et Tailwind CSS.</p>
      </div>
    </footer>
  )
}