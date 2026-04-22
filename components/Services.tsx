"use client";

import { motion } from "framer-motion";
import { BadgeDollarSign, BookMarked, BriefcaseBusiness, Shield } from "lucide-react";

const services = [
  {
    title: "المراجعة والتأكد",
    enTitle: "Audit & Assurance",
    description:
      "مراجعات دقيقة وتقييمات امتثال تساعدك على تعزيز الشفافية وزيادة ثقة المستثمرين.",
    icon: Shield
  },
  {
    title: "الاستشارات الضريبية",
    enTitle: "Tax Advisory",
    description:
      "حلول ضريبية عملية ومتوافقة مع التشريعات المصرية لضمان الكفاءة وتقليل المخاطر.",
    icon: BadgeDollarSign
  },
  {
    title: "الاستشارات المالية",
    enTitle: "Financial Consulting",
    description:
      "استراتيجيات مالية ذكية لدعم قرارات التوسع، وإدارة التدفقات النقدية، ورفع الربحية.",
    icon: BriefcaseBusiness
  },
  {
    title: "إمساك الدفاتر",
    enTitle: "Bookkeeping",
    description:
      "تنظيم قيودك اليومية وتقاريرك المحاسبية بمنهجية دقيقة تضمن وضوح الأداء المالي.",
    icon: BookMarked
  }
];

export default function Services() {
  return (
    <section id="خدماتنا" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">خدماتنا</h2>
          <p className="mt-3 text-base text-slate-600">
            باقة متكاملة من الحلول المحاسبية والاستشارية المصممة لتناسب احتياجات الشركات المصرية.
          </p>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.enTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-slate-100 p-3 text-[#0F172A] transition group-hover:bg-[#0F172A] group-hover:text-[#D4AF37]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A]">{service.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#10B981]">{service.enTitle}</p>
                <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
