import DigimonCard from "@/components/DigimonCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

async function fetchDigimon(name: string) {
  const digimons: Digimon[] = await fetch(
    `http://localhost:3002/digimon/${name}`
  ).then((res) => res.json());
  return digimons[0];
}

export default function DigimonDetail() {
  const router = useRouter();
  const [digimon, setDigimon] = useState<Digimon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!router.query.name) return;

    fetchDigimon(router.query.name as string)
      .then((digimon) => {
        setDigimon(digimon);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [router.query.name]);

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
