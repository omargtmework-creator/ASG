"use client";

import { motion } from "framer-motion";
import { MessageCircleMore, PhoneCall, Send } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section id="تواصل-معنا" className="bg-[#0F172A] py-24 text-white">
        <div className="section-container grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">تواصل معنا</h2>
            <p className="mt-4 max-w-lg text-slate-300">
              يسعدنا فهم احتياجات أعمالك وتقديم حلول دقيقة تدعم أهدافك المالية بثقة واستدامة.
            </p>
            <div className="mt-8 space-y-4 text-slate-200">
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-[#D4AF37]" />
                <span dir="ltr">+20 100 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircleMore className="h-5 w-5 text-[#10B981]" />
                <span>contact@asgconsultancy.eg</span>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-white/5 p-6 backdrop-blur-sm sm:p-8"
          >
            <div className="space-y-4">
              <label className="block text-sm">
                <span className="mb-2 block text-slate-200">الاسم</span>
                <input
                  type="text"
                  placeholder="اكتب اسمك الكامل"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 focus:border-[#D4AF37] focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-2 block text-slate-200">الشركة</span>
                <input
                  type="text"
                  placeholder="اسم الشركة"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 focus:border-[#D4AF37] focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-2 block text-slate-200">الخدمة المطلوبة</span>
                <select className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none">
                  <option className="text-slate-900">المراجعة والتأكد</option>
                  <option className="text-slate-900">الاستشارات الضريبية</option>
                  <option className="text-slate-900">الاستشارات المالية</option>
                  <option className="text-slate-900">إمساك الدفاتر</option>
                </select>
              </label>
            </div>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-[#0F172A] transition hover:brightness-95"
            >
              إرسال الطلب
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </section>
      <a
        href="https://wa.me/201001234567"
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل عبر واتساب"
        className="fixed bottom-5 left-5 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-xl transition hover:scale-105"
      >
        <MessageCircleMore className="h-7 w-7" />
      </a>
    </>
  );
}
