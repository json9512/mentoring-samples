import DigimonCard from "@/components/DigimonCard";

type DigimonProps = Digimon[];

export default function Digimon({ digimons }: { digimons: DigimonProps }) {
  return (
    <div className="flex flex-col items-center w-full h-full p-4 space-y-4 bg-slate-100">
      <h1 className="text-2xl font-bold">Digimon List</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {digimons.map((digimon) => (
          <DigimonCard key={digimon.name} digimon={digimon} shouldNavigate />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3002/digimon");
  const digimons = await response.json();

  return {
    props: {
      digimons,
    },
  };
}