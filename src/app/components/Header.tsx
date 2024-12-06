"use client";
import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

interface NavBarProps {
  status: string;
}

const Header = () => {
  let [isNavVisible, setNavIsVisible] = useState<boolean>(false);
  return (
    <header className="w-[90%] flex flex-col justify-between items-center">
      <div className="w-full flex flex-row justify-between items-center">
        <Image
          src="/images/logo.svg"
          alt="Logo image"
          height={40}
          width={40}
          priority
          className="w-[25%]"
        />
        {isNavVisible == false ? (
          <GiHamburgerMenu
            className="text-[30px] text-zinc-500"
            onClick={() => {
              setNavIsVisible(!isNavVisible);
            }}
          />
        ) : (
          <MdClose
            className="text-[30px] text-zinc-500"
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
      <hr className="w-full h-[1px] rounded-full border-none border-0 my-4 mx-0 bg-[#bfbfbf80]" />
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
