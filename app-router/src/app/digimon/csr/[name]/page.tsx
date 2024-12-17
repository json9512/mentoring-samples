"use client";

import DigimonCard from "@/components/DigimonCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

async function fetchDigimon(name: string) {
  const digimons: Digimon[] = await fetch(
    `http://localhost:3002/digimon/${name}`
  ).then((res) => res.json());
  return digimons[0];
}

export default function DigimonDetail() {
  const { name } = useParams<{ name: string }>();
  const [digimon, setDigimon] = useState<Digimon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!name) return;

    fetchDigimon(name)
      .then((digimon) => {
        setDigimon(digimon);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [name]);

  if (loading) {
    return (
      <div className="flex flex-col items-center min-w-screen min-h-screen w-full h-full p-4 space-y-4 bg-slate-100"></div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center min-w-screen min-h-screen w-full h-full p-4 space-y-4 bg-slate-100">
        Error: {error.message}
      </div>
    );
  }

  if (!digimon) {
    return (
      <div className="flex flex-col items-center min-w-screen min-h-screen w-full h-full p-4 space-y-4 bg-slate-100">
        Not found
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-w-screen min-h-screen w-full h-full p-4 space-y-4 bg-slate-100">
      <div className="m-auto">
        <DigimonCard key={digimon.name} digimon={digimon} showLevel />
      </div>
    </div>
  );
}
