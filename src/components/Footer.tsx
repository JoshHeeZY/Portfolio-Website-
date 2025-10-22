export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-slate-400">
          © {currentYear} Joshua Zheng Yang Hee. All rights reserved.
        </p>
        <p className="text-sm text-slate-500">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
