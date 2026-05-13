"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    id: "tech",
    title: "Premium Tech",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fashion",
    title: "Modern Fashion",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "home",
    title: "Living & Home",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
  }
];

export function Categories() {
  return (
    <section className="py-24 px-6 container mx-auto max-w-7xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
          Shop by Category
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-border/50"
          >
            <Image 
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-bold text-white tracking-wide">{category.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
