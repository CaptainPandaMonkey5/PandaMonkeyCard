import React from "react";
import { useCustomScript } from "./Script";
import logoImage from "./assets/cpm_logo.png";

function Card() {
  useCustomScript();

  return (
    <>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center">
        <img className="mb-4 h-32 w-32" src={logoImage} alt="profile_img" />
        <h1 className="text-4xl font-bold">PandaMonkey</h1>
        <p className="text-base">Hello!</p>
      </div>

      <div>
        <p></p>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
        <div className="flex flex-col space-y-6 py-5">
          <button
            className="btn btn-ghost flex items-center rounded-2xl border-white px-[10rem] shadow-white hover:shadow-none"
            data-link="https://example.com"
          >
            <img src={logoImage} alt="icon" className="mr-2 h-6 w-6" />{" "}
            {/* Adjust size and spacing */}
            Recent Project
          </button>

          <button
            className="btn btn-primary rounded-2xl shadow-md shadow-white hover:bg-primary hover:shadow-none"
            data-link="https://example.com"
          >
            More About Me
          </button>
          <button
            className="btn btn-primary rounded-2xl shadow-white hover:shadow-none"
            data-link="https://github.com/CaptainPandaMonkey5"
          >
            Github
          </button>
          <button
            className="btn btn-primary rounded-2xl shadow-white hover:shadow-none"
            data-link="https://example.com"
          >
            Button
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
