import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-center items-center mt-4 mb-4 bg-img"></div>
      <div className="flex flex-col w-[90%] self-center text-center gap-2">
        <h1 className="text-4xl font-bold">More than just shorter links</h1>
        <div className="flex flex-col justify-between items-center gap-3 w-[250px] self-center">
          <p className="text-base text-[#9e9aa7]">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button
            type="button"
            className="bg-[#2acfcf] text-[#ffffff] rounded-full py-2 px-4 font-semibold"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
