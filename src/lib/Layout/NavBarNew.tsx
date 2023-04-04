import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";
import { NextRouter } from "next/router";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { SearchBoxNew } from "./Components/SearchBoxNew";

interface NavBarProps {
  router: NextRouter;
}

export function NavBarNew({ router }: NavBarProps) {
  const [cart, setCart] = useState(false);
  const { addItem, emptyCart, totalItems } = useCart();
  let pathname: string = router.pathname;
  return (
    <Navbar
  fluid={true}
  rounded={true}
  className="border-b-2 "
>
  <Navbar.Brand href="/">
    <img
      src="/logo_new.png"
      className="mr-3 h-24"
      alt="Flowbite Logo"
    />
    
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="/default.png" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
   <SearchBoxNew />
    <Navbar.Link href="/navbars">
    <span className="flex justify-center align-middle">
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
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
                     Избранное
    </Navbar.Link>
    <Navbar.Link href="/navbars">
    <span className="flex justify-center align-middle">
            <svg width="40" height="40" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.69138 16.9403C3.77126 15.786 4.60123 14.8966 5.59846 14.8966H32.2004C33.1978 14.8966 34.0277 15.786 34.1075 16.9403L35.7864 41.1999C35.9652 43.7859 34.2064 45.999 31.9721 45.999H5.82669C3.59256 45.999 1.83358 43.7859 2.01254 41.1999L3.69138 16.9403Z" stroke="#C17A0F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.5524 21.5615V10.4535C26.5524 5.54571 23.126 1.56714 18.8995 1.56714C14.6729 1.56714 11.2466 5.54571 11.2466 10.4535V21.5615" stroke="#C17A0F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </span>
            Корзина
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
  );
}
