"use client";

import { useStore } from "@/lib/store-context";
import { motion } from "framer-motion";
import { CreditCard, Lock, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const checkoutSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  name: z.string().min(2, "Name is required."),
  address: z.string().min(5, "Address is required."),
  city: z.string().min(2, "City is required."),
  zip: z.string().min(4, "Zip code is required."),
  cardNumber: z.string().min(16, "Invalid card number."),
  expiry: z.string().min(5, "MM/YY required."),
  cvc: z.string().min(3, "CVC required."),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { cart, cartTotal } = useStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema)
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsProcessing(true);
    // Simulate payment processing via Stripe
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card max-w-md w-full p-8 rounded-3xl text-center"
        >
          <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Payment Successful!</h2>
          <p className="text-muted-foreground mb-8">
            Thank you for your order. A confirmation email has been sent to you.
          </p>
          <Link href="/">
            <button className="w-full py-4 bg-foreground text-background rounded-xl font-medium hover:scale-[1.02] transition-transform">
              Return Home
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 container mx-auto">
      <h1 className="text-4xl font-bold mb-12">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Checkout Form */}
        <div className="lg:col-span-7 space-y-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Contact Info */}
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div>
                <label className="text-sm font-medium mb-2 block">Email Address</label>
                <input 
                  {...register("email")}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all" 
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            {/* Shipping Info */}
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
              <div>
                <label className="text-sm font-medium mb-2 block">Full Name</label>
                <input 
                  {...register("name")}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all" 
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Address</label>
                <input 
                  {...register("address")}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all" 
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">City</label>
                  <input 
                    {...register("city")}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all" 
                  />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Postal Code</label>
                  <input 
                    {...register("zip")}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all" 
                  />
                  {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip.message}</p>}
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="glass-card p-8 rounded-3xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <CreditCard className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-semibold mb-4 relative flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-500" /> Secure Payment
              </h3>
              <div className="relative">
                <label className="text-sm font-medium mb-2 block">Card Number</label>
                <input 
                  {...register("cardNumber")}
                  placeholder="0000 0000 0000 0000"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all" 
                />
                {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber.message}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4 relative">
                <div>
                  <label className="text-sm font-medium mb-2 block">Expiry Date</label>
                  <input 
                    {...register("expiry")}
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all" 
                  />
                  {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">CVC</label>
                  <input 
                    {...register("cvc")}
                    placeholder="123"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all" 
                  />
                  {errors.cvc && <p className="text-red-500 text-xs mt-1">{errors.cvc.message}</p>}
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={isProcessing || cart.length === 0}
                className="w-full mt-8 py-4 bg-foreground text-background rounded-xl font-medium hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
                    />
                    Processing...
                  </>
                ) : (
                  `Pay $${cartTotal.toLocaleString()}`
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-5">
          <div className="glass-card p-8 rounded-3xl sticky top-24">
            <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-secondary rounded-xl relative overflow-hidden flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-muted-foreground text-xs">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-medium">${item.price * item.quantity}</span>
                </div>
              ))}
              {cart.length === 0 && (
                <p className="text-muted-foreground text-sm py-4">Your cart is empty.</p>
              )}
            </div>
            
            <div className="border-t border-border/50 pt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-border/50 pt-3 flex justify-between items-center mt-3">
                <span className="font-semibold text-lg">Total</span>
                <span className="font-bold text-2xl">${cartTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
