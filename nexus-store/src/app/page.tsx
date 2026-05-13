import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { ProductGrid } from "@/components/home/product-grid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductGrid />
      
      {/* Simple Footer for Phase 1 */}
      <footer className="border-t border-border mt-24 py-12 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Nexus Store. All rights reserved.</p>
      </footer>
    </main>
  );
}
