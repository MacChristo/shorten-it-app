import React from "react";
import Image from "next/image";
import { features, resources, company } from "../data";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoInstagram,
} from "react-icons/io";

const Footer = () => {
  return (
    <footer className="flex justify-center gap-5 w-full bg-[#232127] pt-8 pb-12">
      <div className="flex flex-col items-center w-[90%] gap-8">
        <Image
          src="/images/logo_white.svg"
          alt="Logo image"
          height={60}
          width={60}
          priority
          className="w-[35%]"
        />
        <div className="flex flex-col gap-8 text-center">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg text-[#ffffff]">Features</h3>
            <ol className="flex flex-col items-center gap-1">
              {features.map((feature) => (
                <li className="text-[0.75rem] text-[#9e9aa7]" key={feature}>
                  {feature}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg text-[#ffffff]">Resources</h3>
            <ol className="flex flex-col items-center gap-1">
              {resources.map((resource) => (
                <li className="text-[0.75rem] text-[#9e9aa7]" key={resource}>
                  {resource}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg text-[#ffffff]">Company</h3>
            <ol className="flex flex-col items-center gap-1">
              {company.map((comp) => (
                <li className="text-[0.75rem] text-[#9e9aa7]" key={comp}>
                  {comp}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center w-[80%]">
          <IoLogoFacebook className="text-[#ffffff] w-[25px] h-[25px]" />
          <IoLogoTwitter className="text-[#ffffff] w-[25px] h-[25px]" />
          <IoLogoPinterest className="text-[#ffffff] w-[25px] h-[25px]" />
          <IoLogoInstagram className="text-[#ffffff] w-[25px] h-[25px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
