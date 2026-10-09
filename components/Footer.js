import { Dumbbell } from "lucide-react";
export default function Footer() {
  return <footer className="mt-12 border-t border-[#22252d]">
    <div className="container-fit flex min-h-[66px] flex-wrap items-center justify-between gap-3 py-4 text-[10px] text-gray-500">
      <div className="flex items-center gap-2 font-black text-gray-200"><Dumbbell size={14} className="text-lime" /><span className="display-font text-sm">FITLOG</span></div>
      <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
    </div>
  </footer>;
}
