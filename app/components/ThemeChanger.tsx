"use client";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

export const ThemeChanger: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  useEffect(() => {
    themeChange(false);
    const currentTheme = localStorage.getItem("theme");

    setSelectedTheme(currentTheme);
  }, []);

  const chooseTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const theme = button.getAttribute("data-set-theme");

    setSelectedTheme(theme);
  };

  const themeList: string[] = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  return (
    <div>
      <div
        title="Change Theme"
        className="dropdown dropdown-end 
        z-[2000]"
      >
        <div tabIndex={0} className="btn btn-ghost normal-case">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            ></path>
          </svg>{" "}
          <span className="font-medium">Theme</span>{" "}
          <svg
            width="12px"
            height="12px"
            className=" h-2 w-2 fill-current opacity-60 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>{" "}
        <div className="dropdown-content rounded-box top-px mt-16 h-[70vh] max-h-96 w-56 overflow-y-auto bg-base-200 text-base-content shadow">
          <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
            {themeList.map((theme, idx) => (
              <ThemeButton
                key={idx}
                themeName={theme}
                selectedTheme={selectedTheme}
                chooseTheme={chooseTheme}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



type ThemeButtonProps = {
  selectedTheme: string | null;
  chooseTheme: (e: React.MouseEvent<HTMLButtonElement>) => void;
  themeName: string;
};

const ThemeButton: React.FC<ThemeButtonProps> = (props) => {
  const { chooseTheme, selectedTheme, themeName } = props;
  return (
    <button
      className={`overflow-hidden rounded-lg text-left outline-base-content ${
        selectedTheme === themeName ? "[&_svg]:visible" : ""
      }`}
      data-set-theme={themeName}
      data-act-classname="[&amp;_svg]:visible"
      onClick={chooseTheme}
    >
      <div
        data-theme={themeName}
        className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
      >
        <div className="grid grid-cols-5 grid-rows-3">
          <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`invisible h-3 w-3 shrink-0`}
            >
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
            </svg>
            <div className="flex-grow text-sm">{themeName}</div>{" "}
            <div
              className="flex h-full flex-shrink-0 flex-wrap gap-1"
              data-svelte-h="svelte-izuv7l"
            >
              <div className="w-2 rounded bg-primary"></div>{" "}
              <div className="w-2 rounded bg-secondary"></div>{" "}
              <div className="w-2 rounded bg-accent"></div>{" "}
              <div className="w-2 rounded bg-neutral"></div>{" "}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};
