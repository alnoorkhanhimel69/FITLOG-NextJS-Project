"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell } from "lucide-react";
import { useFitlog } from "./AppProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitlog();
  const active = (path) => pathname === path || (path === "/" && pathname.startsWith("/workout/"));
  return (
    <header className="sticky top-0 z-40 border-b border-[#22252d] bg-[#0b0c0f]/95 backdrop-blur">
      <nav className="container-fit flex min-h-[58px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-black tracking-tight text-white" aria-label="FITLOG home">
          <Dumbbell size={18} strokeWidth={3} className="text-lime" /><span className="display-font text-lg">FITLOG</span>
        </Link>
        <div className="flex items-center gap-1 rounded-full text-[11px]">
          <Link href="/" className={`rounded-full px-3 py-2 transition ${active("/") ? "bg-[#1d2611] text-lime" : "text-gray-400 hover:text-white"}`}>Workouts</Link>
          <Link href="/my-plan" className={`rounded-full px-3 py-2 transition ${pathname === "/my-plan" ? "bg-[#1d2611] text-lime" : "text-gray-400 hover:text-white"}`}>My Plan</Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-[10px]">
          <Link href="/my-plan" className="flex items-center gap-1.5 text-gray-300">Plan <span className="grid h-5 min-w-5 place-items-center rounded-full bg-lime px-1 font-black text-black">{plan.length}</span></Link>
          <Link href="/my-plan?tab=saved" className="flex items-center gap-1.5 text-gray-400">Saved <span className="grid h-5 min-w-5 place-items-center rounded-full border border-[#343844] px-1 text-gray-200">{saved.length}</span></Link>
        </div>
      </nav>
    </header>
  );
}
