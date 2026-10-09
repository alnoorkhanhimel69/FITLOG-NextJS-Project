import Link from "next/link";
import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return <Link href={`/workout/${encodeURIComponent(workout.id)}`} className="panel group block overflow-hidden transition hover:-translate-y-0.5 hover:border-[#454b59]">
    <div className="relative aspect-[1.75/1] overflow-hidden bg-[#20232a]">
      <Image src={workout.image} alt={workout.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" unoptimized />
    </div>
    <div className="p-3">
      <div className="mb-2 flex flex-wrap gap-1">{(workout.categories || []).slice(0, 3).map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
      <h3 className="display-font text-base uppercase leading-tight text-white">{workout.name}</h3>
      <p className="mt-1 truncate text-[11px] text-gray-500">{workout.equipment}</p>
      <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-[#252832] pt-2 text-[10px] text-gray-400">
        <span className="inline-flex items-center gap-1"><Clock3 size={11}/>{workout.duration} min</span>
        <span className="inline-flex items-center gap-1"><Flame size={11}/>{workout.calories} kcal</span>
        <span className="inline-flex items-center gap-1"><Star size={11}/>{Number(workout.rating).toFixed(1)}</span>
      </div>
    </div>
  </Link>;
}
