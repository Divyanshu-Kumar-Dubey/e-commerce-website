# 🛍️ NEXUS - Ultra-Premium E-Commerce Platform

![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?style=for-the-badge&logo=firebase)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animated-0055FF?style=for-the-badge&logo=framer)
![Stripe](https://img.shields.io/badge/Stripe-Ready-635BFF?style=for-the-badge&logo=stripe)

**Nexus** is a highly polished, production-ready full-stack e-commerce application designed to deliver an "Apple-like" premium shopping experience. Built with modern web standards, it features glassmorphism UI design, seamless animations, secure authentication, and a dedicated admin dashboard.

---

## ✨ Features

- **Cinematic UI/UX**: State-of-the-art glassmorphism design with staggered animations, micro-interactions, and a fully responsive layout.
- **Dark/Light Mode**: Seamless theme switching using `next-themes` and CSS variables.
- **Secure Authentication**: Integrated **Firebase Authentication** (Google Sign-In) with real-time UI updates.
- **Global State Management**: Custom React Context architecture for instant, optimistic UI updates across the Shopping Cart and Wishlist.
- **Modern Checkout**: A beautiful, conversion-optimized checkout flow featuring `react-hook-form` and `zod` schema validation (Stripe-ready).
- **Admin Command Center**: A private dashboard featuring dynamic sales charts (via `recharts`), active user metrics, and order management tables.
- **Customer Engagement**: Built-in floating WhatsApp integration and interactive Google Maps location targeting.

## 💻 Tech Stack

*   **Frontend**: Next.js (App Router), React 19, Tailwind CSS v4, TypeScript
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Backend / Auth**: Firebase Auth, Firebase Firestore (Configured)
*   **Forms / Validation**: React Hook Form, Zod
*   **Data Visualization**: Recharts

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18+) installed.

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Divyanshu-Kumar-Dubey/e-commerce-website.git
   cd e-commerce-website/nexus-store
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure Environment Variables
   Create a `.env.local` file in the root directory and add your Firebase credentials:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. Run the development server
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 👨‍💻 Developer Notes

This project was built to demonstrate architectural best practices in React/Next.js, focusing heavily on perceived performance, highly cohesive design systems, and robust component decoupling. It serves as a blueprint for building high-ticket digital storefronts.

---
*Designed & Developed by [Divyanshu Kumar Dubey]*
