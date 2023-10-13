import { SingleZaffe } from "../types/SingleZaffe";

const googleSheetsAPI =
  "https://script.google.com/macros/s/AKfycbyU_Gk-MtkUwPCfHCfwRY9ej8EJn3F5wwhQjs1JO0dQZtVygzrhMAxMWUbg6CphbJde/exec";

export const useZaffat = async () => {
  try {
    const res = await fetch(googleSheetsAPI);

    if (!res.ok) {
      throw new Error("Network response was not ok.");
    }

    const result: { data: SingleZaffe[] } = await res.json();

    return {
      zaffat: result.data,
    };
  } catch (error) {
    console.error(
      "🚀 ~ file: Endpoint.tsx:24 ~ useZaffat ~ An error occurred while fetching data:",
      error,
    );
    // Handle the error here or re-throw it if you want to handle it elsewhere
    throw error; // You can re-throw the error if needed
  }
};
