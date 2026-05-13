"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Hero Background" 
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90 dark:from-black/50 dark:to-[#050505] z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-accent dark:text-[#4f46e5] font-semibold tracking-[0.2em] uppercase mb-4 text-sm drop-shadow-md">
            Redefining Retail
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[1.1] text-white">
            Elevate Your<br />
            <span className="text-gradient drop-shadow-2xl">Everyday.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-xl font-light">
            Discover the pinnacle of modern technology, curated fashion, and premium home essentials.
          </p>
          
          <button className="px-8 py-4 bg-white text-black dark:bg-[#4f46e5] dark:text-white font-medium rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
            Explore Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
}
