'use client'; // <-- La directive 'use client' est toujours essentielle ici

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // N'oubliez pas d'importer Image de 'next/image' si vous l'utilisez pour les images de projet.

const projects = [
  {
    title: "Portfolio Moderne",
    description: "Un portfolio personnel élégant et réactif construit avec React et Tailwind CSS, mettant en valeur mes compétences.",
    image: "/project1.jpg", // Assurez-vous que cette image existe dans votre dossier /public
    link: "https://votre-portfolio.com" // Remplacez par le lien réel de votre portfolio
  },
  {
    title: "Application ToDo",
    description: "Un gestionnaire de tâches simple et efficace avec des fonctionnalités CRUD (Créer, Lire, Mettre à jour, Supprimer).",
    image: "/project2.jpg", // Assurez-vous que cette image existe dans votre dossier /public
    link: "https://votre-todo-app.com" // Remplacez par le lien réel de votre application ToDo
  },
  {
    title: "Site E-commerce (Maquette)",
    description: "Maquette d'un site e-commerce responsive, avec une interface utilisateur intuitive pour la navigation produit.",
    image: "/project3.jpg", // Assurez-vous d'ajouter cette image dans votre dossier /public
    link: "https://votre-ecommerce-maquette.com" // Remplacez par un lien réel ou "#"
  },
  {
    title: "Blog Personnel",
    description: "Développement d'un blog dynamique avec des articles, catégories et un système de commentaires.",
    image: "/project4.jpg", // Assurez-vous d'ajouter cette image dans votre dossier /public
    link: "https://votre-blog-personnel.com" // Remplacez par un lien réel ou "#"
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 80, scale: 0.8 },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  }
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <section className="w-full max-w-4xl mt-16 p-4"> {/* Ajout de p-4 pour un peu de padding sur mobile */}
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Mes Projets</h3> {/* Taille de texte responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300" // Ajout de duration-300 pour la transition
              target="_blank"
              rel="noopener noreferrer"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.4)" }}
            >
              {/* Utilisation du composant Image de Next.js pour de meilleures performances */}
              <div className="relative w-full h-40"> {/* Conteneur pour Image avec fill */}
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill" // Permet à l'image de remplir le conteneur parent
                  objectFit="cover" // S'assure que l'image couvre le conteneur sans distorsion
                  className="rounded-t-lg" // Applique le arrondi seulement en haut
                />
              </div>
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-300 text-sm">{project.description}</p> {/* Taille de texte ajustée pour la description */}
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}