import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { SingleZaffe } from "../types/SingleZaffe";

type FutureDayState = {
  selectedZaffe: SingleZaffe[] | null;
  setSelectedZaffe: (zaffe: SingleZaffe[] | null) => void;
};

export const useSelectedDay = create<FutureDayState>()(
  devtools(
    persist(
      (set) => ({
        selectedZaffe: null,
        setSelectedZaffe: (zaffe) =>
          set({
            selectedZaffe: zaffe,
          }),
      }),
      {
        name: "selected-future-day-store",
      },
    ),
  ),
);
