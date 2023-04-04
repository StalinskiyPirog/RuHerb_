import {
  Menu,
  MenuItem,
  MenuButton,
  MenuHeader,
  SubMenu,
  MenuDivider,
} from "@szhsin/react-menu";

function DropdownCatalog() {
  return (
    <Menu
      menuClassName="w-fit absolute z-[10000]  rounded-xl"
      menuButton={
        <MenuButton className="pr-3  text-2xl justify-center border-2  text-[#0000007b] flex flex-row border-[#98cc61] rounded-xl">
          <span className="pt-2 px-3 ">
            <svg
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H10.7374H20.4748M1 6.82492H20.4748M1 12.6498H20.4748"
                stroke="#98CC61"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          Каталог
        </MenuButton>
      }
    >
      <div className="flex ">
        <div className=" p-2 space-y-3 bg-[#d3ffd2ce] rounded-xl flex flex-row">
          <div className="flex flex-col">
            <MenuHeader className="text-2xl text-[#0000007b] pt-3 pl-2 ">
              Категории
            </MenuHeader>
            <div className="flex flex-row pl-12">
              <div className="flex flex-col ">
                <MenuItem
                  href={`/search?category1=Пищевые добавки`}
                  className="flex justify-center bg-white
      p-1 m-2 w-52
      border-b-2 border-[#98CC61]
      rounded-xl
      hover:scale-125
      ease-in-out
      duration-500
     cursor-pointer"
                >
                  <div className="first-letter:font-bold first-letter:text-orange-600">
                    Пищевые добавки
                  </div>
                </MenuItem>
                <MenuItem
                href={`/search?category1=Активный образ жизни`}
                  className="flex justify-center first bg-white
      p-1 m-2 w-52
      border-b-2 border-[#98CC61] rounded-xl
      hover:scale-125
      ease-in-out
      duration-500
     cursor-pointer"
                >
                  <div className="first-letter:font-bold first-letter:text-orange-600">
                    Активный образ жизни
                  </div>
                </MenuItem>
                <MenuItem
                href={`/search?category1=Активный образ жизни`}
                  className="flex  bg-white border-b-2 border-[#98CC61]
      p-1 m-2 w-52
       rounded-xl
      hover:scale-125
      ease-in-out
      duration-500
     cursor-pointer"
                >
                  <div className="first-letter:font-bold first-letter:text-orange-600">
                    Средства для душа и ухода
                  </div>
                </MenuItem>
                <MenuItem
                href={`/search?category1=Средства для душа и ухода`}
                  className="flex justify-center bg-white border-b-2 border-[#98CC61] 
      p-1 m-2 w-52
       rounded-xl
      hover:scale-125
      ease-in-out
      duration-500
     cursor-pointer"
                >
                  <div className="first-letter:font-bold first-letter:text-orange-600">
                    Красота
                  </div>
                </MenuItem>
              </div>

              <div className="flex flex-col pl-12">
                <MenuItem
                href={`/search?category1=Красота`}
                  className="flex justify-center bg-white border-b-2 border-[#98CC61]
      p-1 m-2 w-48
       rounded-xl
      hover:scale-125
      ease-in-out
      duration-500
     cursor-pointer"
                >
                  <div className="first-letter:font-bold first-letter:text-orange-600">
                    Бакалея
                  </div>
                </MenuItem>
                <MenuItem
               href={`/search?category1=Бакалея`}
                  className="flex justify-center bg-white border-b-2 border-[#98CC61]
      p-1 m-2 w-48
       rounded-xl
      hover:scale-125
      ease-in-out
      duration-500
     cursor-pointer"
                >
                  <div className="first-letter:font-bold first-letter:text-orange-600">
                    Товары для детей
                  </div>
                </MenuItem>
                <MenuItem
               href={`/search?category1=Товары для детей`}
                  className="flex justify-center bg-white border-b-2 border-[#98CC61]
      p-1 m-2 w-48
       rounded-xl
      hover:scale-125
      ease-in-out
      duration-500
     cursor-pointer"
                >
                  <div className="first-letter:font-bold first-letter:text-orange-600">
                    Зоотовары
                  </div>
                </MenuItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Menu>
  );
}

export default DropdownCatalog;
