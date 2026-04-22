"use client";

import { motion } from "framer-motion";
import { ArrowUpLeft, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="الرئيسية"
      className="relative isolate overflow-x-hidden bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#1e293b] pb-24 pt-36 text-white"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80"
          alt="مكتب محاسبة احترافي"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
            شراكة تعتمد على الموثوقية والدقة
          </div>
          <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            ASG Consultancy: شريكك الموثوق في النجاح المالي
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            نقدم حلولاً محاسبية واستشارية مبتكرة لدعم نمو أعمالك في السوق المصري.
          </p>
          <a
            href="#تواصل-معنا"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3 text-base font-semibold text-[#0F172A] transition hover:brightness-95"
          >
            احصل على استشارة مجانية
            <ArrowUpLeft className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
