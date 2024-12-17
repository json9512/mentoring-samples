import DigimonCard from "@/components/DigimonCard";

type Params = Promise<{ name: string[] }>;

export default async function DigimonDetail({ params }: { params: Params }) {
  const { name } = await params;
  const digimons: Digimon[] = await fetch(
    `http://localhost:3002/digimon/${name}`
  ).then((res) => res.json());
  const digimon = digimons[0];

  return (
    <div className="flex flex-col items-center min-w-screen min-h-screen w-full h-full p-4 space-y-4 bg-slate-100">
      <div className="m-auto">
        <DigimonCard key={digimon.name} digimon={digimon} showLevel />
      </div>
    </div>
  );
}
