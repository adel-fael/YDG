import { googleSheetsAPI } from "@/app/types/API";
import { SingleZaffe } from "@/app/types/SingleZaffe";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { SpecificDayZaffat } from "./SpecificDayZaffat";

const FutureSpecificDay = async () => {
  const res = await fetch(googleSheetsAPI, {
    next: {
    	revalidate: 60
    },

  });

  const zaffat: { data: SingleZaffe[] } = await res.json();

  return (
    <div>
      <BreadCrumbs />

      <SpecificDayZaffat zaffat={zaffat.data} />
    </div>
  );
};

export default FutureSpecificDay;
