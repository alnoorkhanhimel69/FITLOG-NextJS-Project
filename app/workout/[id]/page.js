"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Check, Clock3, Flame, Plus, Save, Star, Dumbbell } from "lucide-react";
import { useFitlog } from "../../../components/AppProvider";
import { useEffect, useState } from "react";

export default function WorkoutDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { workouts, loading, addToPlan, saveForLater, plan } = useFitlog();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const workout = workouts.find(w => String(w.id) === String(params.id));
  if (loading && !ready) return <main className="container-fit grid min-h-[65vh] place-items-center text-gray-400">Loading workout…</main>;
  if (!workout) return <main className="container-fit grid min-h-[60vh] place-items-center text-center"><div><h1 className="display-font text-3xl">WORKOUT NOT FOUND</h1><p className="mt-2 text-sm text-gray-500">This workout may no longer be available.</p><button onClick={() => router.push("/")} className="lime-button mt-5">Back to library</button></div></main>;
  return <main className="container-fit py-6 sm:py-9">
    <div className="grid gap-7 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
      <div className="relative aspect-[4/4.8] max-h-[720px] overflow-hidden rounded-xl border border-[#252832] bg-[#15171d]">
        <Image src={workout.image} alt={workout.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" unoptimized/>
      </div>
      <div className="py-1">
        <h1 className="display-font text-3xl uppercase leading-tight sm:text-4xl">{workout.name}</h1>
        <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">{workout.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">{workout.categories.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
        <div className="mt-6 overflow-hidden rounded-xl border border-[#252832] bg-[#15171d]">
          {[["EQUIPMENT", workout.equipment], ["DIFFICULTY", workout.difficulty], ["SETS", workout.sets], ["REPS", workout.reps], ["DURATION", `${workout.duration} min`], ["CALORIES", `${workout.calories} kcal`], ["RATING", Number(workout.rating).toFixed(1)]].map(([label, value]) => <div key={label} className="flex items-center justify-between gap-4 border-b border-[#252832] px-4 py-3 text-xs last:border-b-0"><span className="text-[10px] tracking-wider text-gray-500">{label}</span><span className="text-gray-200">{value}</span></div>)}
        </div>
        <h2 className="display-font mt-7 text-xl uppercase">Instructions</h2>
        <ol className="mt-3 space-y-3">{workout.instructions.slice(0, 4).map((step, i) => <li key={i} className="flex gap-3 text-xs leading-5 text-gray-400"><span className="text-lime">{i + 1}.</span><span>{step}</span></li>)}</ol>
        <div className="mt-6 flex flex-wrap gap-2">
          <button onClick={() => addToPlan(workout)} disabled={plan.some(item => item.id === workout.id) || plan.length >= 5} className="lime-button disabled:cursor-not-allowed disabled:opacity-50"><Plus size={14}/> Add to today’s plan</button>
          <button onClick={() => saveForLater(workout)} className="outline-button"><Save size={13}/> Save for later</button>
        </div>
      </div>
    </div>
  </main>;
}
