import { useZaffat } from "@/app/helper/Endpoint";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { SpecificDayZaffat } from "./SpecificDayZaffat";

const FutureSpecificDay = async () => {
  const { zaffat } = await useZaffat();

  return (
    <div>
      <BreadCrumbs />

      <SpecificDayZaffat zaffat={zaffat} />
    </div>
  );
};

export default FutureSpecificDay;
