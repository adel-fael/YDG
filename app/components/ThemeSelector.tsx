"use client";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

export const ThemeSelector: React.FC = () => {
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
            className="h-5 w-5 stroke-current md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            ></path>
          </svg>{" "}
          <span className="hidden font-normal md:inline">Theme</span>{" "}
          <svg
            width="12px"
            height="12px"
            className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>{" "}
        <div className="dropdown-content rounded-box top-px mt-16 h-[70vh] max-h-96 w-56 overflow-y-auto bg-base-200 text-base-content shadow">
          <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "light" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="light"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="light"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">light</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "dark" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="dark"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="dark"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">dark</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "cupcake" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="cupcake"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="cupcake"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">cupcake</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "bumblebee" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="bumblebee"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="bumblebee"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">bumblebee</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "emerald" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="emerald"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="emerald"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">emerald</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "corporate" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="corporate"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="corporate"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">corporate</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "synthwave" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="synthwave"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="synthwave"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">synthwave</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "retro" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="retro"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="retro"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">retro</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "cyberpunk" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="cyberpunk"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="cyberpunk"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">cyberpunk</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "valentine" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="valentine"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="valentine"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">valentine</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "halloween" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="halloween"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="halloween"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">halloween</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "garden" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="garden"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="garden"
                className="text-ba`se-content w-full cursor-pointer bg-base-100 font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">garden</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "forest" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="forest"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="forest"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">forest</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "aqua" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="aqua"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="aqua"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">aqua</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "lofi" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="lofi"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="lofi"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">lofi</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "pastel" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="pastel"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="pastel"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">pastel</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "fantasy" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="fantasy"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="fantasy"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">fantasy</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "wireframe" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="wireframe"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="wireframe"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">wireframe</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "black" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="black"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="black"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">black</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "luxury" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="luxury"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="luxury"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">luxury</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "dracula" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="dracula"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="dracula"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">dracula</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "cmyk" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="cmyk"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="cmyk"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">cmyk</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "autumn" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="autumn"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="autumn"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">autumn</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "business" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="business"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="business"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">business</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "acid" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="acid"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="acid"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">acid</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "lemonade" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="lemonade"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="lemonade"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">lemonade</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "night" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="night"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="night"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">night</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "coffee" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="coffee"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="coffee"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">coffee</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>
            <button
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                selectedTheme === "winter" ? "[&_svg]:visible" : ""
              }`}
              data-set-theme="winter"
              data-act-classname="[&amp;_svg]:visible"
              onClick={chooseTheme}
            >
              <div
                data-theme="winter"
                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <CheckMark />
                    <div className="flex-grow text-sm">winter</div>{" "}
                    <ColorPaletteBar />
                  </div>
                </div>
              </div>
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckMark = () => {
  return (
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
  );
};
const ColorPaletteBar = () => {
  return (
    <div
      className="flex h-full flex-shrink-0 flex-wrap gap-1"
      data-svelte-h="svelte-izuv7l"
    >
      <div className="w-2 rounded bg-primary"></div>{" "}
      <div className="w-2 rounded bg-secondary"></div>{" "}
      <div className="w-2 rounded bg-accent"></div>{" "}
      <div className="w-2 rounded bg-neutral"></div>{" "}
    </div>
  );
};
