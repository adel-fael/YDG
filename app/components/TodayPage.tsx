import moment from "moment";
import { googleSheetsAPI } from "../types/API";
import { SingleZaffe } from "../types/SingleZaffe";
import { SingleEntry } from "./SingleEntry";

export const TodayPage = async () => {
  const res = await fetch(googleSheetsAPI, {
    next: {
    	revalidate: 60
    },

  });

  const zaffat: { data: SingleZaffe[] } = await res.json();

  const todaysZaffat = zaffat.data.filter((z) => {
    const zaffeDate = moment(z.date, "DD/MM/YYYY");
    return zaffeDate.isSame(moment(), "day");
  });

  return (
    <>
      {todaysZaffat.map((z, idx) => (
          <SingleEntry key={idx} zaffe={z} />
        ))}

      {todaysZaffat.length === 0 ? (
        <div className="alert alert-info ml-auto mr-auto mt-5 w-[75vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>No Zaffat Today 👌</span>
        </div>
      ) : null}
    </>
  );
};
