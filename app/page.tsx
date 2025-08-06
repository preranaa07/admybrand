'use client';

import Button from '@/components/Button';
import FeatureItem from '@/components/FeatureItem';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

import {
  Rocket,
  Zap,
  Code,
  Database,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: "AI Campaigns",
    description: "Launch and optimize marketing campaigns using generative AI.",
  },
  {
    icon: Zap,
    title: "1-Click Automations",
    description: "Automate routine workflows and save hours of manual work.",
  },
  {
    icon: Code,
    title: "No-Code Builder",
    description: "Create powerful tools with no coding skills needed.",
  },
  {
    icon: Database,
    title: "Smart Analytics",
    description: "Visualize KPIs and user insights in real-time dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant",
    description: "Top-level security, GDPR and SOC2 compliance.",
  },
  {
    icon: Sparkles,
    title: "Personalized Content",
    description: "Craft hyper-personalized content for your audience segments.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#fdf4ff] text-[#1f1f1f] font-sans">
      
      {/* Hero Section */}
      <section className="py-28 text-center px-6 max-w-4xl">
         <h1 className="text-lg md:text-xl font-extrabold text-gray-600 mb-2 tracking-wide uppercase">
    ADmyBRAND AI Suite
  </h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
          Build AI Products <span className="text-pink-500">10x Faster</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Use our AI-powered developer suite to launch production-ready apps with minimal effort.
        </p>
        <Button className="bg-pink-500 hover:bg-pink-600 transition-all duration-200 text-white px-6 py-3 rounded-xl shadow-md">
          Get Started
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-24 w-full max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Features that Power Growth</h2>
        <p className="text-center text-gray-600 mb-12">
          Everything you need to launch, scale, and optimize with AI.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-80 border border-pink-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <FeatureItem {...feature} />
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-[#fff0f6] px-6 py-24">
        <PricingSection />
      </section>

      {/* Testimonials */}
      <section className="w-full px-6 py-20 bg-[#fce4ec]">
        <Testimonials />
      </section>

      {/* FAQ */}
      <section className="w-full px-6 py-20 bg-[#ffe4fa]">
        <FAQSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 w-full bg-[#f9f0ff]">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
