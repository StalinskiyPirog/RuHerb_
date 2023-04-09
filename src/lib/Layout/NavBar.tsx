import Hamburger from "hamburger-react";
import { useState } from "react";
import { useCart } from "react-use-cart";
import Drawer from "./Components/Drawer";
import Link from "next/link";
import DropdownCatalog from "./Components/DropdownMenu";
import SearchBox from "./Components/SearchBox";
import { NextRouter } from "next/router";

interface NavBarProps{
    router: NextRouter
}

export default function NavBar({router}:NavBarProps) {
  const [drawer, setDrawer] = useState(false);
  const [cart, setCart] = useState(false);

  const { addItem, emptyCart, totalItems } = useCart();
  return (
    <nav className="md:flex flex-row hidden w-full border-b-0  md:border-b-4 border-[#98cc61] z-[10000]  top-0 sticky p-4 h-18 sm:h-24 md:bg-[#fff]">
      <div className="flex  space-x-16 justify-between mx-0  w-full items-center md:px-8">
        <div className=" flex md:hidden left-0  z=[11000]">
          <div className="text-[#98cc61] rounded-tl-3xl bg-white rounded-br-3xl border-4 border-[#98CC61] m-1 p-1">
            <Hamburger toggled={drawer} toggle={setDrawer} />
          </div>
          <Drawer isOpen={drawer} setIsOpen={setDrawer} />
        </div>

        {/*//! Лого !//
         */}
        <div className="md:flex hidden">
          <Link href="/">
            <div className="relative object-cover h-24 w-24 justify-between  cursor-pointer  ">
              <img
                src="/logo_new.png"
                height={96}
                width={96}
                alt="/"
              />
            </div>
          </Link>
        </div>

        {/* //! Каталог !//
         */}
        <div className="hidden lg:flex  ">

        <DropdownCatalog />
        </div>

        {/* //! Поисковая строка !//
         */}
        <div className="hidden md:flex min-w-[164px] max-w-[328px] ">
          <SearchBox router={router}/>
        </div>

        {/* //! Три ссылки !//
         */}
        <div className="md:flex  pb-2  hidden ">
          <ul className="items-center mx-auto flex ">
            <li className="p-1 text-[#0000007b] text-lg font-bold  hover:text-orange-400">
              <Link className="flex flex-col" href="/profile">
                {/* Профиль лого */}
                <span className=" mflex mx-auto  ">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 37 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5 20.3405C23.7163 20.3405 27.945 16.2349 27.945 11.1703C27.945 6.10566 23.7163 2 18.5 2C13.2836 2 9.05493 6.10566 9.05493 11.1703C9.05493 16.2349 13.2836 20.3405 18.5 20.3405Z"
                      stroke="#C17A0F"
                      strokeWidth="3"
                    />
                    <path
                      d="M27.945 24.3276H28.6094C31.4673 24.3276 33.8781 26.3939 34.2326 29.1473L34.9703 34.8769C35.2521 37.0662 33.4938 39 31.2213 39H5.77857C3.50611 39 1.74787 37.0662 2.02973 34.8769L2.76739 29.1473C3.12188 26.3939 5.53265 24.3276 8.39067 24.3276H9.05494"
                      stroke="#C17A0F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Профиль
              </Link>
            </li>
            <li className="text-[#0000007b] p-1 text-lg font-bold  hover:text-orange-400 ">
              <Link className="flex flex-col" href="/favourite">
                {/* Избранное лого */}
                <span className="flex mx-auto">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 2C6.02944 2 2 6.3753 2 11.7725C2 16.1297 3.57439 26.4702 19.0775 36.925C19.6389 37.3037 20.3611 37.3037 20.9225 36.925C36.4255 26.4702 38 16.1297 38 11.7725C38 6.3753 33.9705 2 29 2C24.0295 2 20 7.92274 20 7.92274C20 7.92274 15.9706 2 11 2Z"
                      stroke="#C17A0F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Избранное
              </Link>
            </li>

            <li className="text-[#0000007b] p-1 text-lg font-bold  hover:text-orange-400 ">
              <Link className="flex relative flex-col" href="/cart">
                {/* Корзина лого */}
                <span className="flex mx-auto">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 38 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.69138 16.9403C3.77126 15.786 4.60123 14.8966 5.59846 14.8966H32.2004C33.1978 14.8966 34.0277 15.786 34.1075 16.9403L35.7864 41.1999C35.9652 43.7859 34.2064 45.999 31.9721 45.999H5.82669C3.59256 45.999 1.83358 43.7859 2.01254 41.1999L3.69138 16.9403Z"
                      stroke="#C17A0F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.5524 21.5615V10.4535C26.5524 5.54571 23.126 1.56714 18.8995 1.56714C14.6729 1.56714 11.2466 5.54571 11.2466 10.4535V21.5615"
                      stroke="#C17A0F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Корзина
                <div className="bg-orange-700 text-center align-middle rounded-full h-6 w-6 right-0 absolute">
                  {totalItems}
                </div>
              </Link>
            </li>
          </ul>
        </div>

        
      </div>
    </nav>
  );
}
