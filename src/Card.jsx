import React from "react";
import { useCustomScript } from "./Script";
import logoImage from "./assets/cpm_logo_b.png";
import recentProject from "./assets/code.png";
import github from "./assets/github.svg";
import user from "./assets/user.png";
import linkedin from "./assets/linkedin.png";
import xlogo from "./assets/x_logo.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";

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
        <p className="mt-2 text-base">Hello!</p>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-6 py-5">
          <button
            className="btn btn-warning flex w-80 items-center justify-center truncate rounded-2xl border-2 border-[#333333] text-lg font-bold shadow-[5px_10px_0px_0px_rgba(51,51,51,1)] transition duration-500 hover:bg-gray-500 hover:text-white hover:shadow-[0_0_0_0_rgba(0,0,0,0)]"
            data-link="https://github.com/Lucianono/ShelterAlloc_Thesis"
          >
            <img src={recentProject} alt="code" className="h-6 w-6" />
            <span className="text-center">recent projects</span>
          </button>

          <button
            className="btn btn-warning flex w-80 items-center justify-center rounded-2xl border-2 border-[#333333] text-lg font-bold shadow-[5px_10px_0px_0px_rgba(51,51,51,1)] transition duration-500 hover:bg-gray-500 hover:text-white hover:shadow-[0_0_0_0_rgba(0,0,0,0)]"
            data-link="https://github.com/CaptainPandaMonkey5"
          >
            <img src={github} alt="github" className="h-6 w-6" />
            <span className="text-center">github</span>
          </button>

          <button
            className="btn btn-warning flex w-80 items-center rounded-2xl border-2 border-[#333333] text-lg font-bold shadow-[5px_10px_0px_0px_rgba(51,51,51,1)] transition duration-500 hover:bg-gray-500 hover:text-white hover:shadow-[0_0_0_0_rgba(0,0,0,0)]"
            data-link="https://captainpandamonkey5.github.io/CPM-Alpha/src/index.html"
          >
            <img src={user} alt="icon" className="mr-2 h-6 w-6" />
            <span className="text-center">more about me</span>
          </button>

          <button
            className="btn btn-warning flex w-80 items-center rounded-2xl border-2 border-[#333333] text-lg font-bold shadow-[5px_10px_0px_0px_rgba(51,51,51,1)] transition duration-500 hover:bg-gray-500 hover:text-white hover:shadow-[0_0_0_0_rgba(0,0,0,0)]"
            data-link="https://twitter.com/CptPandaMonkey"
          >
            <img src={twitter} alt="x" className="h-6 w-6" />
            twitter
          </button>

          <button
            className="btn btn-warning flex w-80 items-center rounded-2xl border-2 border-[#333333] text-lg font-bold shadow-[5px_10px_0px_0px_rgba(51,51,51,1)] transition duration-500 hover:bg-gray-500 hover:text-white hover:shadow-[0_0_0_0_rgba(0,0,0,0)]"
            data-link="https://www.instagram.com/captainpandamonkey/"
          >
            <img src={instagram} alt="ig" className="h-6 w-6" />
            instagram
          </button>

          <button
            className="btn btn-disabled btn-warning flex w-80 items-center rounded-2xl border-2 border-[#333333] text-lg font-bold shadow-[5px_10px_0px_0px_rgba(51,51,51,1)] transition duration-500 hover:bg-gray-500 hover:text-white hover:shadow-[0_0_0_0_rgba(0,0,0,0)]"
            data-link="https://example.com"
          >
            <img src={linkedin} alt="linkedin" className="h-6 w-6" />
            <span className="text-center">linkedin</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
