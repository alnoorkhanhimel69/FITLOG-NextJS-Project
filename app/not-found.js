import Link from "next/link";
import { Dumbbell } from "lucide-react";
export default function NotFound() {
  return <main className="container-fit grid min-h-[65vh] place-items-center py-12 text-center"><div><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[#343844] bg-[#15171d]"><Dumbbell className="text-lime"/></div><p className="mt-6 text-xs font-bold tracking-[.2em] text-lime">404 — NOT FOUND</p><h1 className="display-font mt-2 text-5xl uppercase">Wrong turn.</h1><p className="mt-3 text-sm text-gray-500">That page doesn’t exist. Let’s get you back to the library.</p><Link href="/" className="lime-button mt-6">Back to workouts</Link></div></main>;
}
