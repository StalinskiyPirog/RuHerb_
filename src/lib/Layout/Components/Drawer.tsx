import Image from "next/image";
import a from "next/link";
import Hamburger from "hamburger-react";
import { Dispatch, SetStateAction } from "react";

interface DrawerProps{
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Drawer({ isOpen, setIsOpen }:DrawerProps) {
  return (
    <div
      className={
        "fixed z-[1000]  bg-black bg-opacity-60 inset-0 transform ease-in-out" +
        (isOpen
          ? " transition-opacity opacity-100 duration-100 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "  h-full overflow-y-scroll border-2 rounded-tr-lg rounded-br-lg border-[#98cc61] left-0 absolute bg-white pb-10 shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? " w-9/12 translate-x-0 " : "w-0 -translate-x-full ")
        }
      >
        <div className={isOpen ? "flex flex-col" : "hidden"}>
        <div className=" flex text-black ml-4">
            <div className=" object-cover flex justify-between cursor-pointer  pt-2">
            <a href="/">
              <img
                src="/logo_new.png"
                height={96}
                width={96}
                alt="/"
              />
              </a>
          </div>
          <div className="pt-4"></div>
        </div>
      

        <div className="flex justify-center ">
        <div className="container text-black pl-4 space-y-3">
          <a
            className="flex 
              p-2 m-2 w-10/12
              border-2 rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer"
            href={`/searchResult/test`}
          >
            Главная
          </a>

          <a
            className="flex 
              p-2 m-2 w-10/12
              border-2 rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer"
            href={`/searchResult/test`}
          >
            Каталог
          </a>
          <div className="flex border-b-2 border-[#98cc61] w-11/12 "></div>

          <a
            className="flex
            p-2 m-2 w-10/12
            border-2 rounded-xl
            focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
            ease-in-out
            duration-500
            cursor-pointer"
            href="/payment"
          >
            Оплата
          </a>

          <a
            className="flex
            p-2 m-2 w-10/12
            border-2 rounded-xl
            focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
            ease-in-out
            duration-500
            cursor-pointer"
            href="/delivery"
          >
            Доставка
          </a>

          <a
            className="flex
            p-2 m-2 w-10/12
            border-2 rounded-xl
            focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
            ease-in-out
            duration-500
            cursor-pointer"
            href="/favourite"
          >
            Возврат
          </a>
          <div className="border-b-2 border-[#98cc61] w-11/12"></div>
          <a
            className="flex
            p-2 m-2 w-10/12
            border-2 rounded-xl
            focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
            ease-in-out
            duration-500
            cursor-pointer"
            href="/lk"
          >
            Акции
          </a>

          <a
            className="flex
            p-2 m-2 w-10/12
            border-2 rounded-xl
            focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
            ease-in-out
            duration-500
            cursor-pointer"
            href="/lk"
          >
            О нас
          </a>

          <a
            className="flex
         p-2 m-2 w-10/12
         border-2 rounded-xl
         focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
         ease-in-out
         duration-500
         cursor-pointer"
            href="/lk"
          >
            Вход/регистрация
          </a>

          <a
            className="flex
         p-2 m-2 w-10/12
         border-2 rounded-xl
         focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
         ease-in-out
         duration-500
         cursor-pointer"
            href="/lk"
          >
            Личный кабинет
          </a>

        </div>
        </div>
        </div>
      </section>
      <section
        className=" min-w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </div>
  );
}
