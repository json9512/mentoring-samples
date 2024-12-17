"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export default function DigimonCard({
  digimon,
  showLevel = false,
  shouldNavigate = false,
}: {
  digimon: Digimon;
  showLevel?: boolean;
  shouldNavigate?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const onClick = useCallback(() => {
    if (shouldNavigate) {
      router.push(`${pathname}/${digimon.name}`);
    }
  }, [shouldNavigate, router, pathname, digimon]);

  return (
    <div
      key={digimon.name}
      className={`flex flex-col items-center flex-1 p-4 bg-white rounded-lg shadow-lg gap-2 ${
        shouldNavigate ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
    >
      <h2 className="font-sans">{digimon.name}</h2>
      <Image src={digimon.img} alt={digimon.name} width={200} height={200} />
      {showLevel && <label>Level: {digimon.level}</label>}
    </div>
  );
}
