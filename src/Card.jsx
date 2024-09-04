import React from "react";
import { useCustomScript } from "./Script";
import logoImage from "./assets/cpm_logo_b.png";

function Card() {
  useCustomScript();

  return (
    <>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center">
        <img
          className="mb-4 h-32 w-32 rounded-full"
          src={logoImage}
          alt="profile_img"
        />
        <h1 className="text-4xl font-bold">PandaMonkey</h1>
        <p className="text-base">Hello!</p>
      </div>

      <div>
        <p></p>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
        <div className="flex flex-col space-y-6 py-5">
          <button
            className="btn btn-warning flex items-center rounded-2xl border-2 border-[#333333] px-[10rem] text-lg font-bold shadow-[5px_10px_0px_0px_rgba(51,51,51,1)] transition duration-500 hover:bg-black hover:text-white hover:shadow-[0_0_0_0_rgba(0,0,0,0)]"
            data-link="https://example.com"
          >
            <img src={logoImage} alt="icon" className="mr-2 h-6 w-6" />
            Recent Project
          </button>

          <button
            className="btn btn-warning flex items-center rounded-2xl border-2 border-[#333333] px-[10rem] text-lg font-bold shadow-[5px_10px_0px_0px_rgba(51,51,51,1)] transition duration-500 hover:bg-black hover:text-white hover:shadow-[0_0_0_0_rgba(0,0,0,0)]"
            data-link="https://example.com"
          >
            More About Me
          </button>

          <button
            className="btn btn-warning flex items-center rounded-2xl border-2 border-[#333333] px-[10rem] text-lg font-bold shadow-[5px_10px_0px_0px_rgba(51,51,51,1)] transition duration-500 hover:bg-black hover:text-white hover:shadow-[0_0_0_0_rgba(0,0,0,0)]"
            data-link="https://github.com/CaptainPandaMonkey5"
          >
            Github
          </button>

          <button
            className="btn btn-warning flex items-center rounded-2xl border-2 border-[#333333] px-[10rem] text-lg font-bold shadow-[5px_10px_0px_0px_rgba(51,51,51,1)] transition duration-500 hover:bg-black hover:text-white hover:shadow-[0_0_0_0_rgba(0,0,0,0)]"
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
