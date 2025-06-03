'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      email: form.email.value,
      message: form.message.value,
    };

    const response = await fetch('https://formspree.io/f/mvgrobro', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form),
    });

    setLoading(false);
    if (response.ok) setSent(true);
    else alert("Erreur lors de l'envoi du message.");
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="bg-gray-800/80 rounded-2xl shadow-2xl p-8 max-w-lg w-full mt-8 backdrop-blur-md"
      >
        <h1 className="text-3xl font-extrabold mb-2 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
          Contactez-moi
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Une idée, un projet ou une question ? Envoyez-moi un message !
        </p>
        {!sent ? (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              required
              placeholder="Votre email"
              className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              required
              placeholder="Votre message"
              rows={4}
              className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-bold shadow-lg text-white transition"
            >
              {loading ? "Envoi..." : "Envoyer"}
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center text-green-400 font-semibold mt-6"
          >
            Merci pour votre message !
          </motion.div>
        )}
        <div className="flex justify-center gap-4 mt-8">
          <a href="mailto:amakita124@gmail.com" className="underline text-blue-300 hover:text-blue-400 transition">amakita124@gmail.com</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-300 hover:text-blue-400 transition">LinkedIn</a>
        </div>
      </motion.div>
    </main>
  );
}