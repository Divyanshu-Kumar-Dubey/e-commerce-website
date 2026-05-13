import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/lib/auth-context";
import { StoreProvider } from "@/lib/store-context";
import { CartDrawer } from "@/components/layout/cart-drawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus Store | Premium Marketplace",
  description: "Discover the ultimate modern shopping experience with Nexus Store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <AuthProvider>
          <StoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <CartDrawer />
            </ThemeProvider>
          </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
