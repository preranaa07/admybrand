'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FDF6F0] text-[#333333] p-6">
      <div className="max-w-2xl w-full bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Build AI Products 10x Faster
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-[#666666] mb-6"
        >
          Use our AI-powered developer suite to launch production-ready apps with minimal effort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button className="bg-[#FF90B3] hover:bg-[#ff78a6] text-white font-semibold px-6 py-2 rounded-xl shadow">
            Get Started
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
