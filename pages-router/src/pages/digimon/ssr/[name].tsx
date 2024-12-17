import DigimonCard from "@/components/DigimonCard";
import { GetServerSidePropsContext } from "next";

export default function DigimonDetail({ digimon }: { digimon: Digimon }) {
  return (
    <div className="flex flex-col items-center w-screen h-screen p-4 space-y-4 bg-slate-100">
      <div className="m-auto">
        <DigimonCard key={digimon.name} digimon={digimon} showLevel />
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const params = context.params;
  const response = await fetch(`http://localhost:3002/digimon/${params?.name}`);
  const result = await response.json();

  return {
    props: {
      digimon: result[0],
    },
  };
}
