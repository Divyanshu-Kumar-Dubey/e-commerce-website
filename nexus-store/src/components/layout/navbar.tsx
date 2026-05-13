"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { ShoppingBag, Moon, Sun, Search, Menu, UserCircle, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import Image from "next/image";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { user, signInWithGoogle, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-heading text-2xl font-bold tracking-wider text-gradient">
            NEXUS
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Tech</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Fashion</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted && theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
          </button>

          {/* User Auth */}
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-8 h-8 rounded-full overflow-hidden border border-border/50 ml-2"
              >
                {user.photoURL ? (
                  <Image src={user.photoURL} alt="User" width={32} height={32} />
                ) : (
                  <div className="w-full h-full bg-primary flex items-center justify-center text-primary-foreground text-xs">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                )}
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 glass-card rounded-xl py-2 shadow-2xl border border-border/50 flex flex-col">
                  <div className="px-4 py-2 border-b border-border/50 mb-1">
                    <p className="text-sm font-medium truncate">{user.displayName || 'User'}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>
                  <button className="text-left px-4 py-2 text-sm hover:bg-secondary transition-colors">
                    Dashboard
                  </button>
                  <button 
                    onClick={() => {
                      logout();
                      setShowDropdown(false);
                    }}
                    className="text-left px-4 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={() => signInWithGoogle()}
              className="ml-2 hidden sm:flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:scale-105 transition-transform"
            >
              <UserCircle className="w-4 h-4" />
              Sign In
            </button>
          )}

          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors md:hidden">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
