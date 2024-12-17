import DigimonCard from "@/components/DigimonCard";
import { useEffect, useState } from "react";

type Digimons = Digimon[];

function DigimonCardSkeleton() {
  return (
    <div className="flex flex-col items-center flex-1 p-4 bg-white rounded-lg shadow-lg gap-2 animate-pulse">
      <div className="h-3 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="w-[200px] h-[200px] bg-gray-300 rounded"></div>
    </div>
  );
}

async function fetchDigimons(): Promise<Digimons> {
  return await fetch("http://localhost:3002/digimon").then((res) => res.json());
}

export default function Digimon() {
  const [digimons, setDigimons] = useState<Digimons>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchDigimons()
      .then((digimons) => {
        setDigimons(digimons);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-w-screen min-h-screen w-full h-full p-4 space-y-4 bg-slate-100">
        <h1 className="text-2xl font-bold">Loading...</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }, (_, index) => (
            <DigimonCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-w-screen min-h-screen w-full h-full p-4 space-y-4 bg-slate-100">
        <h1 className="text-2xl font-bold">Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-w-screen min-h-screen w-full h-full p-4 space-y-4 bg-slate-100">
      <h1 className="text-2xl font-bold">Digimon List</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {digimons.map((digimon) => (
          <DigimonCard key={digimon.name} digimon={digimon} shouldNavigate />
        ))}
      </div>
    </div>
  );
}
