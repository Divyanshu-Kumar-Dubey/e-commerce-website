"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

const MOCK_PRODUCTS: Product[] = [
  { id: "1", name: "Lumina Earbuds", category: "Tech", price: 199, image: "/product_bag.png" },
  { id: "2", name: "Aero Smartwatch", category: "Tech", price: 299, image: "/product_watch.png" },
  { id: "3", name: "Nebula Perfume", category: "Fashion", price: 149, image: "/product_perfume.png" },
  { id: "4", name: "Eclipse Shades", category: "Fashion", price: 189, image: "/product_sunglasses.png" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

export function ProductGrid() {
  const [filter, setFilter] = useState("All");

  const filteredProducts = filter === "All" 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === filter);

  return (
    <section className="py-24 px-6 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Now</h2>
          <p className="text-muted-foreground">The most desired pieces this season.</p>
        </div>
        <div className="flex gap-4 mt-6 md:mt-0">
          {["All", "Tech", "Fashion"].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition-colors ${
                filter === cat 
                  ? "bg-foreground text-background border-foreground" 
                  : "border-border hover:bg-secondary text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants} 
              initial="hidden"
              animate="show"
              exit="exit"
              layout
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 h-80 flex flex-col justify-between items-center relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-300">
                {/* Product Background glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative w-48 h-48 mt-4 transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <button className="absolute top-4 right-4 p-3 bg-background/80 backdrop-blur-md rounded-full text-foreground shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
              
              <div className="mt-6 flex justify-between items-start px-2">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
                  <h3 className="text-lg font-medium text-foreground">{product.name}</h3>
                </div>
                <span className="text-lg font-bold text-foreground">${product.price}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
