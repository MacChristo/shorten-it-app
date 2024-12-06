"use client";
import React from "react";
import { useState } from "react";

const aliasCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const aliasLength = [4, 5, 6, 7, 8, 9, 10];
const aliasNumber = aliasLength[Math.floor(Math.random() * aliasLength.length)];

const myToken = "Q2lVtpqZoueoyZiUqbUI6uEGy0hPMQyq01C0MHbIBeMe7C4VRpYiZ6BYTYIS";
const myLink: string = "https://www.youtube.com/watch?v=8SkiIAbFbNs";
let myAlias: string = "";
let myResponseLink: string;

const getRandomNumber = () => {
  return Math.floor(Math.random() * aliasCharacters.length);
};

for (let i = 0; i < aliasNumber; i++) {
  myAlias += aliasCharacters[getRandomNumber()];
}
// console.log(myAlias);

const postData = async () => {
  //   alert(`You made a request with this link: ${myLink}`);
  try {
    const response = await fetch("https://api.tinyurl.com/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${myToken}`,
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        url: myLink,
        domain: "tinyurl.com",
        alias: myAlias,
        expires_at: null,
        description: "string",
      }),
    });

    //Checks if there is error with getting a response from the api
    if (!response.ok) {
      throw new Error(
        `Error: ${response.status} and Status_text is: ${response.statusText}`
      );
    }

    //receives the response and destructure it
    const myResponse = await response.json();
    const myResponseLinkData = myResponse.data.tiny_url;
    myResponseLink = myResponseLinkData;
    console.log(myResponseLink);
  } catch (error) {
    console.error("Error: ", error);
    alert(`Error: ${error}`);
  }
};

const MakeRequest = () => {
  const [divs, setDivs] = useState<ResponseTypes[]>([]);

  interface ResponseTypes {
    id: number;
    given_link: string;
    response_link: string;
  }
  const newDiv = () => {
    const newDivContent = {
      id: divs.length + 1,
      given_link: myLink,
      response_link: myResponseLink,
    };
    setDivs([...divs, newDivContent]);
  };
  return (
    <>
      <div className="flex flex-col w-[90%] bg-[#3b3054] shorten-bg-img rounded-[15px] mt-8">
        {/* // <button type="submit" onClick={postData}>
       MakeRequest
    </button> */}

        <div className="flex flex-col w-full">
          <form
            method="post"
            className="flex flex-col w-full p-4 rounded-lg gap-[10px]"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex flex-col w-full">
              <input
                type="text"
                name="link"
                id="link"
                placeholder="Shorten a link here..."
                className="active:outline-none focus-within:outline-none py-2 px-3 rounded-md text-[#9e9aa7] text-sm"
              />
              <span className="error-msg mt-1 py-0 px-4 text-[0.75rem] text-[#f46262]">
                Please enter a valid link!
              </span>
            </div>
            <div className="flex flex-col w-full">
              <input
                type="text"
                name="alias"
                id="alias"
                placeholder="Enter your alias here..."
                className="active:outline-none focus-within:outline-none py-2 px-3 rounded-md text-[#9e9aa7] text-sm"
              />
              <span className="error-msg mt-1 py-0 px-4 text-[0.75rem] text-[#f46262]">
                Please enter a valid alias
              </span>
            </div>
            <input
              type="submit"
              value="Shorten It!"
              className="py-2 px-3 mt-3 rounded-md text-[#ffffff] font-semibold bg-[#2acfcf] hover:cursor-pointer"
              onClick={() => {
                postData();
                newDiv();
              }}
            />
          </form>
        </div>
      </div>
      <div className="flex flex-col w-full p-4 rounded-md gap-[10px]">
        {divs.map((divItems) => (
          <div key={divItems.id}>
            <h2>{divItems.given_link}</h2>
            <hr />
            <h2>{divItems.response_link}</h2>
            <button
              type="button"
              className="w-full text-[#ffffff] font-bold p-4 bg-[#2acfcf]"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default MakeRequest;

// const AddResponse = () => {

// };
