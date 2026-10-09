
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FALLBACK_WORKOUTS, normalizeWorkouts } from "../lib/workouts";
import toast from "react-hot-toast";

const AppContext = createContext(null);
const API_URL = "https://api.api-store.workers.dev/api/fitlog";

export function AppProvider({ children }) {
  const [workouts, setWorkouts] = useState(FALLBACK_WORKOUTS);
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [done, setDone] = useState([]);
  const [storageReady, setStorageReady] = useState(false);

  // Load stored data before saving any state back to localStorage.
  useEffect(() => {
    try {
      const p = JSON.parse(localStorage.getItem("fitlog-plan") || "[]");
      const s = JSON.parse(localStorage.getItem("fitlog-saved") || "[]");
      const d = JSON.parse(localStorage.getItem("fitlog-done") || "[]");

      if (Array.isArray(p)) setPlan(p);
      if (Array.isArray(s)) setSaved(s);
      if (Array.isArray(d)) setDone(d);
    } catch {
      console.warn("Could not read saved FITLOG data.");
    } finally {
      setStorageReady(true);
    }
  }, []);

  // Persist changes only after the initial storage read.
  useEffect(() => {
    if (!storageReady) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    localStorage.setItem("fitlog-done", JSON.stringify(done));
  }, [plan, saved, done, storageReady]);

  // Fetch workout data.
  useEffect(() => {
    let active = true;

    async function fetchWorkouts() {
      try {
        const response = await fetch(API_URL, { cache: "no-store" });

        if (!response.ok) {
          throw new Error(`API responded ${response.status}`);
        }

        const payload = await response.json();
        const normalized = normalizeWorkouts(payload);

        if (active && normalized.length > 0) {
          setWorkouts(normalized);
        }
      } catch (error) {
        console.warn(
          "FITLOG API unavailable; using built-in workout data.",
          error
        );
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchWorkouts();

    return () => {
      active = false;
    };
  }, []);

  const addToPlan = useCallback((workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      toast("Already in today's plan");
      return false;
    }

    if (plan.length >= 5) {
      toast.error("Your plan is full — finish a lift before adding more.");
      return false;
    }

    setPlan((current) => [...current, workout]);
    setSaved((current) =>
      current.filter((item) => item.id !== workout.id)
    );

    toast.success("Added to today's plan");
    return true;
  }, [plan]);

  const saveForLater = useCallback((workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast("Already saved for later");
      return false;
    }

    setSaved((current) => [...current, workout]);
    toast.success("Saved for later");
    return true;
  }, [saved]);

  const removeFromPlan = useCallback((id) => {
    setPlan((current) => current.filter((item) => item.id !== id));
    setDone((current) => current.filter((item) => item !== id));
    toast.success("Removed from today's plan");
  }, []);

  const removeSaved = useCallback((id) => {
    setSaved((current) => current.filter((item) => item.id !== id));
    toast.success("Removed from saved workouts");
  }, []);

  const markDone = useCallback((id) => {
    setDone((current) =>
      current.includes(id) ? current : [...current, id]
    );
    toast.success("Workout marked as done");
  }, []);

  const value = useMemo(
    () => ({
      workouts,
      loading,
      plan,
      saved,
      done,
      addToPlan,
      saveForLater,
      removeFromPlan,
      removeSaved,
      markDone,
    }),
    [
      workouts,
      loading,
      plan,
      saved,
      done,
      addToPlan,
      saveForLater,
      removeFromPlan,
      removeSaved,
      markDone,
    ]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useFitlog() {
  const value = useContext(AppContext);

  if (!value) {
    throw new Error("useFitlog must be used inside AppProvider");
  }

  return value;
}