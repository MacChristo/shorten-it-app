"use client";
import React from "react";
import { useState } from "react";

const MakeRequest = () => {
  const myToken =
    "Q2lVtpqZoueoyZiUqbUI6uEGy0hPMQyq01C0MHbIBeMe7C4VRpYiZ6BYTYIS";

  const [longLink, setLongLink] = useState<string>("");
  const [myAlias, setMyAlias] = useState<string>("");
  const [errors, setErrors] = useState({ link: "", alias: "" });
  const [myResponseLink, setMyResponseLink] = useState<string>("");
  const [divs, setDivs] = useState<ResponseTypes[]>([]);

  interface ResponseTypes {
    id: number;
    given_link: string;
    response_link: string;
  }

  //isValidURL function takes the given link as an input and tests it using the RegExp method if its matches the specified format for a valid link.
  const isValidURL = (longLink: string) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        '((([a-zA-Z0-9$-_@.&+!*"(),])+\\.)+[a-zA-Z]{2,})' +
        "(\\/[a-zA-Z0-9@:%_\\+.~#?&//=]*)?$",
      "i"
    );
    return urlPattern.test(longLink);
    //returns true or false if valid or not valid respectively
  };
  // console.log(isValidURL);

  //This function to validate the form elements based on some given conditions
  const validateForm = () => {
    const errors = { link: "", alias: "" };

    if (!isValidURL(longLink)) {
      errors.link = "Please enter a valid URL.";
      //if the given link doesn't pass the test of the isValidURL function.
    }

    if (myAlias && /[^a-zA-Z0-9]/.test(myAlias)) {
      errors.alias = "Alias must only contain letters and numbers.";
      //if the alias doesn't pass this given test above
    }

    if (myAlias.length < 4 || myAlias.length > 10) {
      errors.alias = "Alias must be between 4 and 10 characters.";
    }
    setErrors(errors);
    return !errors.link && !errors.alias;
  };

  const generateAlias = () => {
    const aliasCharacters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const aliasLength = [4, 5, 6, 7, 8, 9, 10];
    const aliasLengthNumber =
      aliasLength[Math.floor(Math.random() * aliasLength.length)];

    const getRandomNumber = () => {
      return Math.floor(Math.random() * aliasCharacters.length);
    };

    let generatedAlias = "";
    for (let i = 0; i < aliasLengthNumber; i++) {
      generatedAlias += aliasCharacters[getRandomNumber()];
      console.log(generatedAlias);
    }

    console.log(generatedAlias);
    return generatedAlias;
  };

  const postData = async (myAlias: string) => {
    try {
      const response = await fetch("https://api.tinyurl.com/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${myToken}`,
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          url: longLink,
          domain: "tinyurl.com",
          alias: myAlias,
          expires_at: null,
          description: "string",
        }),
      });

      //Checks if there is error with getting a response from the api
      if (!response.ok) {
        throw new Error(`Error: ${response.status} (${response.statusText})`);
      }

      //receives the response and destructure it
      const myResponse = await response.json();
      const myResponseLinkData = myResponse.data.tiny_url;
      setMyResponseLink(myResponseLinkData);

      console.log(myResponse);

      console.log(myResponseLink);

      setDivs((prevDivs) => [
        ...prevDivs,
        {
          id: prevDivs.length + 1,
          given_link: longLink,
          response_link: myResponseLinkData,
        },
      ]);
    } catch (error) {
      console.error("Error: ", error);

      errors.alias = "Refresh and use another alias.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!myAlias) {
      // const aliasToUse = generateAlias();
      // setMyAlias(aliasToUse);
      await postData(generateAlias());
    } else {
      await postData(myAlias);
    }
  };

  return (
    <>
      <div className="flex flex-col w-[90%] bg-[#3b3054] shorten-bg-img rounded-[15px] mt-8">
        <div className="flex flex-col w-full">
          <form
            method="post"
            className="flex flex-col w-full p-4 rounded-lg gap-[10px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col w-full">
              <input
                type="text"
                name="link"
                id="link"
                placeholder="Shorten a link here..."
                value={longLink}
                onChange={(typedLink) => {
                  setLongLink(typedLink.target.value);
                }}
                className="active:outline-none focus-within:outline-none py-2 px-3 rounded-md text-[#9e9aa7] text-sm"
              />

              {errors.link && (
                <span className="error-msg mt-1 py-0 px-4 text-[0.75rem] text-[#f46262]">
                  {errors.link}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <input
                type="text"
                name="alias"
                id="alias"
                value={myAlias}
                onChange={(typedAlias) => {
                  setMyAlias(typedAlias.target.value);
                }}
                placeholder="Enter your alias here (Optional)..."
                className="active:outline-none focus-within:outline-none py-2 px-3 rounded-md text-[#9e9aa7] text-sm"
              />

              {errors.alias && (
                <span className="error-msg mt-1 py-0 px-4 text-[0.75rem] text-[#f46262]">
                  {errors.alias}
                </span>
              )}
            </div>
            <input
              type="submit"
              value="Shorten It!"
              className="py-2 px-3 mt-3 rounded-md text-[#ffffff] font-semibold bg-[#2acfcf] hover:cursor-pointer"
            />
          </form>
        </div>
      </div>
      <div className="flex flex-col w-full p-4 rounded-md gap-6">
        {divs.map((divItems) => (
          <div
            key={divItems.id}
            className="flex flex-col gap-2 py-[0.85rem] rounded-md bg-[#ffffff]"
          >
            <p className="pl-2 pr-2 text-[0.85rem]">{divItems.given_link}</p>
            <hr className="h-[0.5px] border-0 w-full bg-[#9e9aa7]" />
            <p className="pl-2 pr-2 text-[0.85rem]">{divItems.response_link}</p>
            <button
              type="button"
              className="w-[95%] text-[#ffffff] font-bold py-[0.35rem] px-[0.5rem] rounded-md bg-[#2acfcf] flex self-center"
              onClick={() =>
                navigator.clipboard.writeText(divItems.response_link)
              }
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
