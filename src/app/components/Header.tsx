"use client";
import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

type NavBarProps = {
  status: string;
};

const Header = () => {
  const [isNavVisible, setNavIsVisible] = useState<boolean>(false);
  return (
    <header className="w-[90%] md:w-[80%] flex flex-col justify-between items-center">
      <div className="w-full flex flex-row justify-between items-center md:gap-[40px]">
        <Image
          src="/images/logo.svg"
          alt="Logo image"
          height={40}
          width={40}
          priority
          className="w-[25%] md:w-[15%]"
        />
        <div className="hidden md:flex flex-row w-full items-center">
          <ol className="flex flex-col md:flex-row gap-4 p-0 text-center">
            <li className="font-bold md:text-[0.95rem] md:text-[#9e9aa7] hover:text-[#232127] cursor-pointer">
              Features
            </li>
            <li className="font-bold md:text-[0.95rem] md:text-[#9e9aa7] hover:text-[#232127] cursor-pointer">
              Pricing
            </li>
            <li className="font-bold md:text-[0.95rem] md:text-[#9e9aa7] hover:text-[#232127] cursor-pointer">
              Resources
            </li>
          </ol>
          <div className="flex flex-row justify-end gap-3 w-full p-0">
            <button
              type="button"
              className="bg-[transparent] text-[#9e9aa7] rounded-full py-[0.4rem] px-4 w-[30%] font-semibold border-[1.5px] border-solid border-[#2acfcf] hover:border-[#2acfcf73] cursor-pointer"
            >
              Login
            </button>
            <button
              type="button"
              className="bg-[#2acfcf] hover:bg-[#2acfcf73] text-[#ffffff] rounded-full py-[0.4rem] px-4 w-[30%] font-semibold cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>
        {isNavVisible == false ? (
          <GiHamburgerMenu
            className="text-[30px] md:hidden text-[#9e9aa7] cursor-pointer"
            onClick={() => {
              setNavIsVisible(!isNavVisible);
            }}
          />
        ) : (
          <MdClose
            className="text-[30px] md:hidden text-[#9e9aa7] cursor-pointer"
            onClick={() => {
              setNavIsVisible(!isNavVisible);
            }}
          />
        )}
      </div>
      {isNavVisible && <NavBar status={isNavVisible ? "nav-in" : "nav-out"} />}
    </header>
  );
};

const NavBar = (props: NavBarProps) => {
  return (
    <nav
      id={props.status}
      className="flex flex-col justify-center items-center w-[90%] rounded-lg mt-4 p-6 bg-[#3b3054] absolute top-[55px] z-10 place-self-center"
    >
      <ol className="flex flex-col gap-4 p-0 text-center">
        <li className="font-bold text-[#ffffff]">Features</li>
        <li className="font-bold text-[#ffffff]">Pricing</li>
        <li className="font-bold text-[#ffffff]">Resources</li>
      </ol>
      <hr className="w-full h-[1px] rounded-full border-none border-0 my-4 mx-0 bg-[#bfbfbf80] md:hidden" />
      <div className="flex flex-col gap-3 w-full p-0">
        <button
          type="button"
          className="bg-[transparent] text-[#ffffff] rounded-full py-[0.4rem] px-4 w-full font-semibold border-[1.5px] border-solid border-[#2acfcf]"
        >
          Login
        </button>
        <button
          type="button"
          className="bg-[#2acfcf] text-[#ffffff] rounded-full py-[0.4rem] px-4 w-full font-semibold"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Header;
