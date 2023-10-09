import { useZaffat } from "@/app/helper/Endpoint";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { SpecificDayZaffat } from "./SpecificDayZaffat";

const FutureSpecificDay = async () => {
  const { zaffat } = await useZaffat();

  return (
    <section>
      <BreadCrumbs />

      <SpecificDayZaffat zaffat={zaffat} />
    </section>
  );
};

export default FutureSpecificDay;
