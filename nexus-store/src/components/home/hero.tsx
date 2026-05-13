"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero.png" 
          alt="Premium Tech Setup" 
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background dark:from-black/30 dark:to-background z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-accent dark:text-ring font-medium tracking-widest uppercase mb-4 text-sm drop-shadow-md">
            The Future of Commerce
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-xl text-foreground">
            Experience <br className="hidden md:block"/>
            <span className="text-gradient drop-shadow-2xl">Absolute Premium.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto drop-shadow-lg">
            Discover a curated collection of state-of-the-art tech, high-end fashion, and luxury home essentials designed to elevate your everyday life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full shadow-lg shadow-primary/25 hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
              Shop Collection
            </button>
            <button className="px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded-full shadow-lg hover:bg-secondary/80 hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
              View Lookbook
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
