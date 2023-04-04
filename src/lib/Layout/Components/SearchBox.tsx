import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FormEvent, useState } from "react";

interface SearchBoxProps{
    router: NextRouter
}

export default function SearchBox({router}:SearchBoxProps) {
  const [route, setRoute] = useState(String);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("search?" + "text="+route);
  };
  return (
    <form
      className="flex object-cover w-full justify-center"
      onSubmit={handleSubmit}>
      <div className="relative w-full   m-2">
        
        <div className="absolute  inset-y-0 right-0 flex items-center justify-center  pr-3 pointer-events-none">
        <span className=" "><svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1507 24.2936L17.1693 18.8573M19.8785 11.4532C19.9068 17.2085 15.7266 21.9357 10.5417 22.0117C5.35684 22.0877 1.13075 17.4838 1.10247 11.7285C1.07419 5.97329 5.25443 1.24611 10.4393 1.17008C15.6241 1.09405 19.8503 5.69798 19.8785 11.4532Z"
              stroke="#98CC61"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          </span>
        </div>
        
        <input
          type="text"
          id="simple-search"
          className="text-xl text-[#0000007b] border-2 rounded-tl-3xl rounded-br-3xl   border-[#98CC61]   focus:ring-[#e1f0d2] focus:opacity-1   w-full pl-10 p-2.5  "
          placeholder="Поиск"
          onChange={(e) => {
            setRoute(e.target.value);
          }}
        />
        
      </div>
      
    </form>
  );
}
