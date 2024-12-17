import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col gap-3 md:w-[80%] md:flex-row-reverse md:mt-12">
      <div className="flex justify-center items-center mt-4 mb-4 bg-img"></div>
      <div className="flex flex-col w-[90%] self-center text-center gap-2 md:w-1/2 md:gap-5">
        <h1 className="text-4xl font-bold text-[#232127] md:text-left md:w-[500px] md:text-6xl">
          More than just shorter links
        </h1>
        <div className="flex flex-col justify-between items-center gap-3 w-[250px] self-center md:items-start md:self-start md:w-auto">
          <p className="text-base text-[#9e9aa7] md:text-left md:w-[360px]">
            Build your brands recognition and get detailed insights on how your
            links are performing.
          </p>
          <button
            type="button"
            className="bg-[#2acfcf] hover:bg-[#2acfcf73] cursor-pointer text-[#ffffff] rounded-full py-2 px-4 font-semibold"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
