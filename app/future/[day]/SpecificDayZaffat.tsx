"use client";

import { SingleEntry } from "@/app/components/SingleEntry";
import { SingleZaffe } from "@/app/types/SingleZaffe";
import moment from "moment";
import { useParams } from "next/navigation";

type SpecificDayZaffatProps = {
  zaffat: SingleZaffe[];
};

export const SpecificDayZaffat: React.FC<SpecificDayZaffatProps> = ({
  zaffat,
}) => {
  const { day } = useParams();

  const specificDayZaffat = zaffat.filter(
    (z) => moment(z.date, "DD/MM/YYYY").format("DD-MM-YYYY") === day,
  );

  return (
    <>
      {specificDayZaffat.map((z, idx) => (
        <SingleEntry key={idx} zaffe={z} />
      ))}
    </>
  );
};
