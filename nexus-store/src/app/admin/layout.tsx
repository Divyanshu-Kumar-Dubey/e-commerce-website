"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, ShoppingBag, Settings, LogOut, ArrowLeft } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const links = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/products", label: "Products", icon: ShoppingBag },
    { href: "/admin/users", label: "Users", icon: Users },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ];

  // In a real app, you would verify if user.role === 'admin' here
  // if (!user) return <div className="p-8 text-center">Unauthorized. Please log in.</div>

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row pt-20">
      {/* Sidebar */}
      <aside className="w-full md:w-64 glass border-r border-border/40 p-6 flex flex-col">
        <div className="mb-8 hidden md:block">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Admin Portal</p>
          <h2 className="text-xl font-bold">Command Center</h2>
        </div>

        <nav className="flex-1 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto hidden md:block space-y-2">
          <Link href="/">
            <button className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-all">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Store</span>
            </button>
          </Link>
          <button 
            onClick={logout}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
