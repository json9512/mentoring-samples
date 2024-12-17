import DigimonCard from "@/components/DigimonCard";

export default async function DigimonDetail({
  params,
}: {
  params: { name: string };
}) {
  const { name } = await params;
  const digimons: Digimon[] = await fetch(
    `http://localhost:3002/digimon/${name}`
  ).then((res) => res.json());
  const digimon = digimons[0];

  return (
    <div className="flex flex-col items-center w-screen h-screen p-4 space-y-4 bg-slate-100">
      <div className="m-auto">
        <DigimonCard key={digimon.name} digimon={digimon} showLevel />
      </div>
    </div>
  );
}
