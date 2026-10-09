"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, Suspense } from "react";
import { Check, Clock3, Flame, Star, X, ChevronDown, Dumbbell } from "lucide-react";
import { useFitlog } from "../../components/AppProvider";

function MyPlanContent() {
  const { plan, saved, done, removeFromPlan, removeSaved, markDone, loading } = useFitlog();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState("plan");
  const [sort, setSort] = useState("duration");
  useEffect(() => {
  const requestedTab = searchParams.get("tab");

  if (requestedTab === "saved" || requestedTab === "plan") {
    setTab(requestedTab);
  }
}, [searchParams]);
  const items = tab === "plan" ? plan : saved;
  const sorted = useMemo(() => [...items].sort((a, b) => {
    if (sort === "calories") return b.calories - a.calories;
    if (sort === "rating") return b.rating - a.rating;
    return a.duration - b.duration;
  }), [items, sort]);
  const minutes = plan.reduce((sum, item) => sum + Number(item.duration || 0), 0);
  const calories = plan.reduce((sum, item) => sum + Number(item.calories || 0), 0);
  return <main className="container-fit min-h-[65vh] py-7 sm:py-9">
    <div className="flex flex-wrap items-end justify-between gap-3"><div><h1 className="display-font text-3xl uppercase">My Plan</h1><p className="mt-1 text-xs text-gray-500">Cap of five lifts for today. Finish them, then load more.</p></div><span className="text-xs text-gray-500">{plan.length}/5 lifts</span></div>
    <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4">
      {[["Exercises", plan.length], ["Minutes", minutes], ["Calories", calories]].map(([label, value]) => <div key={label} className="panel p-3 sm:p-5"><p className="text-[10px] text-gray-500">{label}</p><p className={`display-font mt-1 text-2xl sm:text-3xl ${label === "Exercises" ? "text-lime" : "text-white"}`}>{value}</p></div>)}
    </div>
    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
      <div className="flex rounded-lg border border-[#252832] bg-[#111319] p-1">
  <button
    type="button"
    onClick={() => setTab("plan")}
    className={`rounded-md px-3 py-2 text-[11px] ${
      tab === "plan"
        ? "bg-[#252832] text-white"
        : "text-gray-500"
    }`}
  >
    Today’s Plan
  </button>

  <button
    type="button"
    onClick={() => setTab("saved")}
    className={`rounded-md px-3 py-2 text-[11px] ${
      tab === "saved"
        ? "bg-[#252832] text-white"
        : "text-gray-500"
    }`}
  >
    Saved <span className="ml-1 text-gray-400">{saved.length}</span>
  </button>
</div>
      <label className="flex items-center gap-2 text-[11px] text-gray-500">Sort By
        <span className="relative"><select value={sort} onChange={e => setSort(e.target.value)} className="appearance-none rounded-lg border border-[#303440] bg-[#15171d] py-2 pl-3 pr-8 text-xs text-gray-200 outline-none"><option value="duration">Duration</option><option value="calories">Calories</option><option value="rating">Rating</option></select><ChevronDown size={12} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"/></span>
      </label>
    </div>
    {loading ? <div className="grid min-h-48 place-items-center text-sm text-gray-400">Loading workouts…</div> :
      sorted.length === 0 ? <div className="mt-4 grid min-h-[230px] place-items-center rounded-xl border border-dashed border-[#292d36] px-4 text-center"><div><h2 className="display-font text-xl uppercase">Nothing here yet</h2><p className="mt-2 text-xs text-gray-500">Browse the library and add a lift to get today moving.</p><Link href="/" className="lime-button mt-4"><Dumbbell size={13}/> Go to workouts</Link></div></div> :
      <div className="mt-4 space-y-3">{sorted.map(item => <article key={item.id} className="panel flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative h-[66px] w-[84px] shrink-0 overflow-hidden rounded-lg bg-[#252832]"><Image src={item.image} alt={item.name} fill sizes="84px" className="object-cover" unoptimized/></div>
          <div className="min-w-0"><h3 className="display-font truncate text-base uppercase">{item.name}</h3><p className="mt-1 truncate text-[10px] text-gray-500">{item.equipment}</p><div className="mt-2 flex flex-wrap gap-3 text-[10px] text-gray-400"><span className="flex items-center gap-1"><Clock3 size={10}/>{item.duration} min</span><span className="flex items-center gap-1"><Flame size={10}/>{item.calories} kcal</span><span className="flex items-center gap-1"><Star size={10}/>{Number(item.rating).toFixed(1)}</span>{tab === "plan" && done.includes(item.id) && <span className="text-lime">DONE</span>}</div></div>
        </div>
        <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
          <Link href={`/workout/${encodeURIComponent(item.id)}`} className="outline-button">View Details</Link>
          {tab === "plan" ? <><button onClick={() => markDone(item.id)} className="lime-button !px-3 !py-2"><Check size={13}/> Mark as Done</button><button onClick={() => removeFromPlan(item.id)} aria-label="Remove from plan" className="rounded-lg border border-[#343844] p-2 text-gray-400 hover:text-white"><X size={14}/></button></> : <button onClick={() => removeSaved(item.id)} aria-label="Remove saved workout" className="rounded-lg border border-[#343844] p-2 text-gray-400 hover:text-white"><X size={14}/></button>}
        </div>
      </article>)}</div>}
  </main>;
}

export default function MyPlanPage() {
  return <Suspense fallback={<main className="container-fit min-h-[60vh] py-10 text-sm text-gray-400">Loading your plan…</main>}><MyPlanContent/></Suspense>;
}
