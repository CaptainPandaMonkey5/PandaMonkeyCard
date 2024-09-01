import React from "react";
import { useCustomScript } from "./Script";

function Card() {
  useCustomScript();

  return (
    <>
      <div className="mx-auto mt-10 flex max-w-7xl items-center justify-center">
        <h1 className="text-4xl font-bold">PandaMonkey</h1>
      </div>

      <div>
        <p></p>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
        <div className="flex flex-col space-y-4 py-5">
          <button
            className="btn btn-primary rounded-2xl px-[10rem] shadow-white hover:shadow-none"
            data-link="https://example.com"
          >
            Recent Project
          </button>
          <button
            className="btn btn-primary rounded-2xl shadow-white hover:shadow-none"
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
