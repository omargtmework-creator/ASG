import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold">الصفحة غير موجودة</h1>
        <p className="mt-4 text-slate-300">
          عذرا، الصفحة التي تبحث عنها غير متاحة حاليا.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-slate-900 transition hover:brightness-95"
        >
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </main>
  );
}
