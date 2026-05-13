import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { Categories } from "@/components/home/categories";
import { ProductGrid } from "@/components/home/product-grid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <div className="bg-secondary/50">
        <ProductGrid />
      </div>
      
      {/* Simple Footer for Phase 1 */}
      <footer className="border-t border-border mt-12 py-12 text-center text-muted-foreground">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-4">NEXUS.</h2>
          <p>&copy; {new Date().getFullYear()} Nexus Retail. All rights reserved. Curated for excellence.</p>
        </div>
      </footer>
    </main>
  );
}
