"use client";
import React from "react";
import MakeRequest from "./MakeRequest";
import { statisticsData } from "../data";
import Image from "next/image";

const Statistics = () => {
  return (
    <>
      <section className="flex flex-col p-4 bg-[#bfbfbf66] w-full mt-12 pb-14 items-center">
        <MakeRequest />

        <div className="flex flex-col justify-center w-[90%] text-center mt-12 gap-[40px]">
          <div className="flex flex-col gap-3 pb-6 ">
            <h2 className="text-[1.45rem] font-extrabold">
              Advanced Statistics
            </h2>
            <p className="text-[0.85rem] text-[#9e9aa7]">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-3 ">
            {statisticsData.map((statsItems, index) => (
              <div
                className="flex flex-col items-center w-full gap-3"
                key={statsItems.id}
              >
                <div className="flex flex-col gap-3 bg-[#ffffff] p-6 rounded-xl items-center h-[200px] stats">
                  <Image
                    src={statsItems.symbol}
                    alt={statsItems.alt}
                    width={60}
                    height={60}
                    className="p-4 bg-[#3b3054] rounded-full relative bottom-[50px]"
                  />
                  <div className="flex flex-col relative bottom-[40px] gap-2">
                    <h3 className="text-lg font-bold">{statsItems.alt}</h3>
                    <p className="text-[0.8rem] text-[#9e9aa7]">
                      {statsItems.text}
                    </p>
                  </div>
                </div>
                {index !== 2 && (
                  <div className="w-[8px] h-[50px] bg-[#2acfcf] relative bottom-3 -z-10 green-line"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col boost-bg h-[260px] bg-[#3b3054] p-4 w-full items-center justify-center">
        <div className="flex flex-col items-center w-[90%] gap-4 py-4">
          <h2 className="text-[1.45rem] text-[#ffffff] font-bold">
            Boost your links today
          </h2>
          <button
            type="button"
            className="bg-[#2acfcf] text-[#ffffff] rounded-full py-2 px-4 font-semibold"
          >
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default Statistics;
