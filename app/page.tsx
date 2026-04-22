"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const navLinks = [
  { href: "#الرئيسية", label: "الرئيسية" },
  { href: "#خدماتنا", label: "خدماتنا" },
  { href: "#من-نحن", label: "من نحن" },
  { href: "#تواصل-معنا", label: "تواصل معنا" }
];

const stats = [
  { value: "+15", label: "سنة خبرة" },
  { value: "500+", label: "عميل وشركة" },
  { value: "98%", label: "معدل رضا العملاء" }
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-[#0F172A]">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          scrolled
            ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex h-20 items-center justify-between gap-4">
          <a href="#الرئيسية" className="text-lg font-bold sm:text-xl">
            ASG Consultancy
          </a>
          <nav className="flex items-center gap-3 text-xs font-medium sm:gap-5 sm:text-sm">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-[#10B981]">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <Hero />

      <section className="pb-10 pt-6">
        <div className="section-container">
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:grid-cols-3">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#0F172A]">{stat.value}</div>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      <section id="من-نحن" className="py-24">
        <div className="section-container grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=1400&q=80"
              alt="فريق استشاري مالي"
              width={1400}
              height={900}
              className="h-[360px] w-full rounded-3xl object-cover shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">من نحن</h2>
            <p className="mt-5 leading-8 text-slate-600">
              في ASG Consultancy، نجمع بين المعايير العالمية والخبرة المحلية لنقدم حلولاً مالية
              ومحاسبية عالية الدقة. نعمل كشريك استراتيجي يساعد الشركات ورواد الأعمال في مصر على
              اتخاذ قرارات مبنية على بيانات موثوقة، مع التزام كامل بالجودة والامتثال.
            </p>
            <p className="mt-4 font-semibold text-[#10B981]">
              Global Standards, Local Expertise.
            </p>
          </motion.div>
        </div>
      </section>

      <Contact />

      <footer className="bg-[#020617] py-10 text-slate-300">
        <div className="section-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-white">ASG Consultancy</p>
            <p className="mt-1 text-sm">القاهرة، مصر | contact@asgconsultancy.eg | +20 10 65039924</p>
            <p className="mt-1 text-sm">اdesigned by Kazem Gaber</p>

          </div>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 p-3 text-slate-200 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </footer>
    </main>
  );
}
