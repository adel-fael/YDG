"use client";

import { SingleEntry } from "@/app/components/SingleEntry";
import { SingleZaffe } from "@/app/types/SingleZaffe";
import { useParams } from "next/navigation";

type SpecificDayZaffatProps = {
  zaffat: SingleZaffe[];
};

export const SpecificDayZaffat: React.FC<SpecificDayZaffatProps> = ({
  zaffat,
}) => {
  const { day } = useParams();

  const specificDayZaffat = zaffat.filter((z) => {
    const zaffeDate = new Date(z.date).toLocaleDateString("fr-CA");
    return zaffeDate === day;
  });

  return (
    <>
      {specificDayZaffat.map((z, idx) => (
        <SingleEntry key={idx} zaffe={z} />
      ))}
    </>
  );
};
