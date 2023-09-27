import moment from "moment";
import React from "react";
import { googleSheetsAPI } from "../types/API";
import { SingleZaffe } from "../types/SingleZaffe";
import { MenuFuture } from "./components/MenuFuture";

const Tab = async () => {
  const res = await fetch(googleSheetsAPI, {
    next: {
      revalidate: 60,
    },

  });

  const zaffat: { data: SingleZaffe[] } = await res.json();

  const futureZaffat = zaffat.data.filter((z) => {
    // Parse the date string using Moment.js and compare it to the current date
    return moment(z.date, "DD/MM/YYYY").isAfter(moment(),  'day');
  });


  // Create a new array to store unique dates
  const uniqueDates: string[] = [];

  futureZaffat.forEach((z) => {
    // Format the date using Moment.js as "DD-MM-YYYY"
    const formattedDate = moment(z.date, "DD/MM/YYYY").format("DD-MM-YYYY");

    // Check if the formatted date is already in the uniqueDates array
    if (!uniqueDates.includes(formattedDate)) {
      uniqueDates.push(formattedDate);
    }
  });

  return (
    <section className={"mt-10"}>
      <ul className="menu rounded-box menu-lg ml-auto mr-auto w-56 bg-base-200">
        {uniqueDates.map((date, idx) => (
          <MenuFuture key={idx} day={date} />
        ))}
      </ul>

      {futureZaffat.length === 0 ? (
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
          <span>No Future Zaffat For Now 🥳</span>
        </div>
      ) : null}
    </section>
  );
};

export default Tab;
