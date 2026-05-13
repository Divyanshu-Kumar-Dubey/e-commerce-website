"use client";

import { motion } from "framer-motion";
import { DollarSign, Users, ShoppingCart, TrendingUp, Activity } from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

const salesData = [
  { name: "Mon", total: 1200 },
  { name: "Tue", total: 2100 },
  { name: "Wed", total: 1800 },
  { name: "Thu", total: 2400 },
  { name: "Fri", total: 3200 },
  { name: "Sat", total: 4100 },
  { name: "Sun", total: 3800 },
];

const categoryData = [
  { name: "Tech", sales: 12400 },
  { name: "Fashion", sales: 8200 },
  { name: "Home", sales: 4100 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2">Overview</h1>
          <p className="text-muted-foreground">Monitor your store's performance and analytics.</p>
        </div>
        <button className="px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:scale-105 transition-transform">
          Download Report
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 rounded-2xl relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-secondary rounded-xl text-foreground">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-green-500 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12.5%
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-1">$24,500.00</h3>
          <p className="text-sm text-muted-foreground">Total Revenue (7d)</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6 rounded-2xl relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-secondary rounded-xl text-foreground">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-green-500 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +4.2%
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-1">1,248</h3>
          <p className="text-sm text-muted-foreground">Orders (7d)</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6 rounded-2xl relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" />
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-secondary rounded-xl text-foreground">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-red-500 flex items-center gap-1">
              <TrendingUp className="w-3 h-3 rotate-180" /> -1.2%
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-1">8,492</h3>
          <p className="text-sm text-muted-foreground">Active Users</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6 rounded-2xl relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-secondary rounded-xl text-foreground">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-green-500 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +18.4%
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-1">4.2%</h3>
          <p className="text-sm text-muted-foreground">Conversion Rate</p>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="lg:col-span-2 glass-card p-6 rounded-3xl">
          <h3 className="text-lg font-bold mb-6">Revenue Overview</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="total" stroke="#ffffff" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="glass-card p-6 rounded-3xl">
          <h3 className="text-lg font-bold mb-6">Sales by Category</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.1)" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="rgba(255,255,255,0.8)" fontSize={12} tickLine={false} axisLine={false} width={60} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <Bar dataKey="sales" fill="#ffffff" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Recent Orders Table */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="glass-card rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-border/50 flex justify-between items-center">
          <h3 className="text-lg font-bold">Recent Orders</h3>
          <button className="text-sm font-medium text-primary hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-secondary/30 text-muted-foreground text-sm uppercase tracking-wider">
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Product</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30 text-sm">
              {[
                { id: "#ORD-001", customer: "Alice Smith", product: "Aero Smartwatch", date: "May 14, 2026", amount: "$299.00", status: "Completed" },
                { id: "#ORD-002", customer: "Bob Jones", product: "Lumina Earbuds", date: "May 13, 2026", amount: "$199.00", status: "Processing" },
                { id: "#ORD-003", customer: "Charlie Day", product: "Eclipse Shades", date: "May 12, 2026", amount: "$189.00", status: "Shipped" },
                { id: "#ORD-004", customer: "Diana Prince", product: "Nebula Perfume", date: "May 11, 2026", amount: "$149.00", status: "Completed" },
              ].map((order, i) => (
                <tr key={i} className="hover:bg-secondary/10 transition-colors">
                  <td className="p-4 font-medium text-foreground">{order.id}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4 text-muted-foreground">{order.product}</td>
                  <td className="p-4 text-muted-foreground">{order.date}</td>
                  <td className="p-4 font-medium">${order.amount}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Completed' ? 'bg-green-500/20 text-green-500' :
                      order.status === 'Processing' ? 'bg-orange-500/20 text-orange-500' :
                      'bg-blue-500/20 text-blue-500'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
