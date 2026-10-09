"use client";

import { useMemo, useState } from "react";
import { ArrowDown, Dumbbell, Search } from "lucide-react";
import { useFitlog } from "../components/AppProvider";
import WorkoutCard from "../components/WorkoutCard";

export default function HomePage() {
  const { workouts, loading } = useFitlog();
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => workouts.filter(w => `${w.name} ${w.categories.join(" ")} ${w.equipment}`.toLowerCase().includes(query.toLowerCase())), [workouts, query]);
  return <main>
    <section className="container-fit pt-6 sm:pt-9">
      <div className="panel relative flex min-h-[250px] items-center overflow-hidden px-6 py-8 sm:min-h-[300px] sm:px-10 lg:px-14">
        <div className="relative z-10 max-w-[570px]">
          <p className="mb-3 text-[10px] font-black tracking-[.18em] text-lime">WORKOUT LIBRARY</p>
          <h1 className="display-font max-w-[540px] text-4xl uppercase leading-[.98] sm:text-5xl lg:text-6xl">Train with intent.<br/>Log every set.</h1>
          <p className="mt-4 max-w-[440px] text-xs leading-5 text-gray-400 sm:text-sm">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today’s plan, and watch the week’s work add up.</p>
          <a href="#library" className="lime-button mt-5"><Dumbbell size={13}/> Browse workouts <ArrowDown size={13}/></a>
        </div>
        <div className="pointer-events-none absolute -right-4 bottom-0 top-0 hidden w-[42%] items-center justify-center md:flex">
          <div className="absolute h-48 w-48 rounded-full bg-lime/5 blur-3xl"/>
          
<img
  src="/workout-hero.png"
  alt="Athlete training in a gym"
  className="relative h-[90%] max-w-full rounded-2xl object-cover opacity-80 [mask-image:linear-gradient(to_left,black_70%,transparent)]"
/>

        </div>
      </div>
    </section>
    <section id="library" className="container-fit scroll-mt-24 py-8 sm:py-10">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div><h2 className="display-font text-2xl uppercase">The Library</h2><p className="mt-1 text-xs text-gray-500">Twelve lifts covering every major muscle group.</p></div>
        <label className="flex items-center gap-2 rounded-lg border border-[#2a2e38] bg-[#111319] px-3 py-2 text-gray-400"><Search size={14}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search workouts or tags" className="w-44 bg-transparent text-xs text-white outline-none placeholder:text-gray-600 sm:w-52"/></label>
      </div>
      {loading ? <div className="grid min-h-48 place-items-center text-sm text-gray-400"><div className="flex flex-col items-center gap-3"><span className="h-8 w-8 animate-spin rounded-full border-2 border-[#353a45] border-t-lime"/><span>Loading workouts…</span></div></div> :
      filtered.length ? <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((workout, i) => <WorkoutCard workout={workout} key={`${workout.id}-${i}`}/>)}</div> :
      <div className="panel grid min-h-48 place-items-center text-center"><div><h3 className="display-font text-xl">NO WORKOUTS FOUND</h3><p className="mt-2 text-xs text-gray-500">Try another workout name or muscle group.</p></div></div>}
    </section>
  </main>;
}
