import moment from "moment";
import { SingleEntry } from "./components/SingleEntry";
import { googleSheetsAPI } from "./types/API";
import { SingleZaffe } from "./types/SingleZaffe";

const Home = async () => {
  const res = await fetch(googleSheetsAPI, {
    // next: {
    // 	revalidate: 10
    // }
    cache: "no-store", // it is store(true) by default
  });

  const zaffat: { data: SingleZaffe[] } = await res.json();

  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const todaysZaffat = zaffat.data.filter((z) => {
    const zaffeDate = moment(z.date, "DD/MM/YYYY").format("DD-MM-YYYY");
    return zaffeDate === moment().format("DD-MM-YYYY");
  });

  return (
    <main className="">
      {todaysZaffat.map((z, idx) => (
        <SingleEntry key={idx} zaffe={z} displayDateAsTitle={true} />
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
    </main>
  );
};

export default Home;
