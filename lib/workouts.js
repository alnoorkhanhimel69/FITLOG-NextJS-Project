export const FALLBACK_WORKOUTS = [
  { id: "barbell-bench-press", name: "Barbell Bench Press", categories: ["Chest", "Arms"], equipment: "Barbell, Bench", difficulty: "Intermediate", sets: 4, reps: "6-8", duration: 25, calories: 180, rating: 4.8, description: "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85", instructions: ["Lie on the bench with eyes under the bar and feet planted.", "Unrack with locked elbows and lower the bar to mid-chest.", "Press up in a slight arc until elbows lock without bouncing.", "Keep shoulder blades pinched and a natural arch in the back."] },
  { id: "pull-up", name: "Pull-Up", categories: ["Back", "Arms"], equipment: "Pull-Up Bar", difficulty: "Intermediate", sets: 3, reps: "6-10", duration: 15, calories: 120, rating: 4.7, description: "A bodyweight pulling movement for building a stronger back and arms.", image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1000&q=85", instructions: ["Grip the bar slightly wider than shoulder width.", "Start from a controlled dead hang.", "Pull your chest toward the bar without swinging.", "Lower slowly until your arms are extended."] },
  { id: "back-squat", name: "Back Squat", categories: ["Legs", "Core"], equipment: "Barbell, Rack", difficulty: "Intermediate", sets: 4, reps: "6-8", duration: 30, calories: 240, rating: 4.9, description: "A foundational lower-body lift for strength, control, and total-body coordination.", image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=85", instructions: ["Set the bar across your upper back and brace your core.", "Stand with feet around shoulder-width apart.", "Sit down between your hips while keeping your chest up.", "Drive through the whole foot to stand tall."] },
  { id: "overhead-press", name: "Overhead Press", categories: ["Shoulders", "Arms"], equipment: "Barbell", difficulty: "Intermediate", sets: 4, reps: "6-8", duration: 20, calories: 150, rating: 4.6, description: "A strict vertical press that develops shoulder strength and stability.", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85", instructions: ["Hold the bar at upper-chest height.", "Brace your torso and squeeze your glutes.", "Press overhead while moving your head out of the bar path.", "Lower with control to the starting position."] },
  { id: "dumbbell-bicep-curl", name: "Dumbbell Bicep Curl", categories: ["Arms"], equipment: "Dumbbells", difficulty: "Beginner", sets: 3, reps: "10-12", duration: 12, calories: 80, rating: 4.3, description: "An isolation exercise for the biceps with controlled, deliberate reps.", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85", instructions: ["Stand tall with a dumbbell in each hand.", "Keep elbows close to your sides.", "Curl without swinging your torso.", "Lower the weights slowly to full extension."] },
  { id: "dumbbell-bicep-curl-2", name: "Dumbbell Bicep Curl", categories: ["Arms"], equipment: "Dumbbells", difficulty: "Beginner", sets: 3, reps: "10-12", duration: 12, calories: 80, rating: 4.3, description: "A focused arm movement emphasizing a steady tempo.", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85", instructions: ["Stand tall with your arms by your sides.", "Keep your upper arms still.", "Curl the dumbbells toward your shoulders.", "Return slowly to the starting position."] },
  { id: "hollow-body-plank", name: "Hollow-Body Plank", categories: ["Core"], equipment: "Bodyweight", difficulty: "Beginner", sets: 3, reps: "30-45 sec", duration: 10, calories: 60, rating: 4.4, description: "A core stability drill that teaches full-body tension and control.", image: "https://images.unsplash.com/photo-1566241142559-40e1eba735c9?auto=format&fit=crop&w=1000&q=85", instructions: ["Set your forearms on the floor under your shoulders.", "Brace your abs and keep your body in a straight line.", "Avoid letting your lower back sag.", "Breathe steadily while holding the position."] },
  { id: "conventional-deadlift", name: "Conventional Deadlift", categories: ["Back", "Legs"], equipment: "Barbell", difficulty: "Advanced", sets: 4, reps: "4-6", duration: 28, calories: 260, rating: 4.9, description: "A full-body strength lift built around a strong, controlled hip hinge.", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85", instructions: ["Stand with the bar over the middle of your feet.", "Hinge down and grip the bar just outside your legs.", "Brace, push the floor away, and stand with the bar close.", "Hinge back and lower the bar with control."] },
  { id: "push-up", name: "Push-Up", categories: ["Chest", "Arms", "Core"], equipment: "Bodyweight", difficulty: "Beginner", sets: 3, reps: "10-15", duration: 10, calories: 90, rating: 4.5, description: "A classic bodyweight press for chest, shoulders, triceps, and core.", image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1000&q=85", instructions: ["Place hands just outside shoulder width.", "Keep your body in a straight line.", "Lower your chest toward the floor.", "Push back up without letting your hips sag."] },
  { id: "walking-lunge", name: "Walking Lunge", categories: ["Legs"], equipment: "Dumbbells (optional)", difficulty: "Beginner", sets: 3, reps: "10 each leg", duration: 18, calories: 170, rating: 4.4, description: "A unilateral leg exercise that builds balance and lower-body strength.", image: "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=1000&q=85", instructions: ["Stand tall with feet hip-width apart.", "Step forward and lower both knees under control.", "Keep the front knee aligned with your toes.", "Push through the front foot and step into the next lunge."] },
  { id: "russian-twist", name: "Russian Twist", categories: ["Core"], equipment: "Medicine Ball", difficulty: "Beginner", sets: 3, reps: "16-20", duration: 8, calories: 70, rating: 4.1, description: "A rotational core exercise to train controlled trunk movement.", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85", instructions: ["Sit with knees bent and lean back slightly.", "Hold a medicine ball close to your chest.", "Rotate your torso side to side with control.", "Keep the movement smooth rather than swinging your arms."] },
  { id: "dumbbell-row", name: "Single-Arm Dumbbell Row", categories: ["Back", "Arms"], equipment: "Dumbbell, Bench", difficulty: "Beginner", sets: 3, reps: "8-12", duration: 16, calories: 130, rating: 4.6, description: "A supported pulling movement for the lats and upper back.", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85", instructions: ["Support one hand on a bench with a flat back.", "Let the dumbbell hang beneath your shoulder.", "Pull your elbow toward your hip.", "Lower the dumbbell slowly and repeat."] }
];

const asNumber = (value, fallback) => Number.isFinite(Number(value)) ? Number(value) : fallback;
const pick = (obj, keys, fallback) => {
  for (const key of keys) if (obj?.[key] !== undefined && obj?.[key] !== null) return obj[key];
  return fallback;
};

export function normalizeWorkouts(payload) {
  const candidates = Array.isArray(payload) ? payload : [
    payload?.data, payload?.workouts, payload?.exercises, payload?.results,
    payload?.data?.workouts, payload?.data?.exercises, payload?.data?.results
  ].find(Array.isArray);
  if (!Array.isArray(candidates) || !candidates.length) return [];
  return candidates.map((item, index) => {
    const name = String(pick(item, ["name", "title", "exerciseName", "workoutName"], `Workout ${index + 1}`));
    const categoriesRaw = pick(item, ["categories", "category", "muscleGroups", "muscleGroup", "tags"], ["Full Body"]);
    const categories = Array.isArray(categoriesRaw) ? categoriesRaw : String(categoriesRaw).split(/[,|]/).map(s => s.trim()).filter(Boolean);
    const id = String(pick(item, ["id", "_id", "slug", "workoutId"], name.toLowerCase().replace(/[^a-z0-9]+/g, "-")));
    return {
      ...FALLBACK_WORKOUTS[index % FALLBACK_WORKOUTS.length],
      ...item,
      id,
      name,
      categories,
      equipment: String(pick(item, ["equipment", "equipmentName", "gear"], "Bodyweight")),
      duration: asNumber(pick(item, ["duration", "durationMinutes", "minutes", "time"], undefined), FALLBACK_WORKOUTS[index % FALLBACK_WORKOUTS.length].duration),
      calories: asNumber(pick(item, ["calories", "caloriesBurned", "kcal"], undefined), FALLBACK_WORKOUTS[index % FALLBACK_WORKOUTS.length].calories),
      rating: asNumber(pick(item, ["rating", "averageRating", "score"], undefined), FALLBACK_WORKOUTS[index % FALLBACK_WORKOUTS.length].rating),
      image: String(pick(item, ["image", "imageUrl", "thumbnail", "photo", "img"], FALLBACK_WORKOUTS[index % FALLBACK_WORKOUTS.length].image)),
      description: String(pick(item, ["description", "summary"], FALLBACK_WORKOUTS[index % FALLBACK_WORKOUTS.length].description)),
      difficulty: String(pick(item, ["difficulty", "level"], "Intermediate")),
      sets: asNumber(pick(item, ["sets"], undefined), 4),
      reps: String(pick(item, ["reps", "repetitions"], "8-10")),
      instructions: Array.isArray(item.instructions) ? item.instructions : FALLBACK_WORKOUTS[index % FALLBACK_WORKOUTS.length].instructions
    };
  });
}
