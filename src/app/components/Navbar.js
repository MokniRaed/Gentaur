"use client";
import Logo from "@images/Gentaur-logo.png";
import { menus } from "@mock/home";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import CartButtons from "./CartButtons";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = ({ clusters = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  // const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // const handleUserSearch = (phrase) => {
  //   const params = new URLSearchParams(searchParams);
  //   params.set("query", phrase);
  //   params.set("page", 1);
  //   const slug = pathname.slice(1, pathname.length);
  //   if (clusters.includes(slug)) {
  //     replace(`${pathname}?${params.toString()}`);
  //   } else {
  //     replace(`/products?${params.toString()}`);
  //   }
  // };

  const handleClick = () => setIsOpen((prev) => !prev);

  const toggleSubMenu = (index) => {
    if (menus[index].sub_menus.length === 0) {
      return;
    }

    if (expandedMenu === index) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(index);
    }
  };


  return (
   <>
     {/* Main Navbar */}
     <div className="w-full h-auto bg-white flex flex-row items-center justify-center shadow-lg">
       <div className="px-2 py-3 h-full w-full lg:w-[85%] lg:pl-0 flex flex-row items-center justify-between">
         <div className="max-w-[200px] max-h-[200px] cursor-pointer transition-transform duration-500 hover:scale-110">
           <Link href="/">
             <Image
              src={Logo}
              alt="Logo"
              className="ml-[-7.5px]"
              width={126}
              height={126}
             />
           </Link>
         </div>
         <div className="hidden w-[100%] lg:block">
           <Menu pathname={pathname} />
         </div>
         <CartButtons />
       </div>
     </div>

      {/* Mobile Menu */}
      <div className="block w-full h-auto bg-white lg:hidden">
        <div className="relative px-2 py-3 h-full w-full flex flex-row items-center justify-between gap-2">
          <div className="h-[45px] w-full relative bg-white border border-solid border-gray-300 shadow-sm flex items-center pr-2 transition-transform duration-300 hover:scale-105">
            {/*<input*/}
            {/*  defaultValue={searchParams.get("query")?.toString()}*/}
            {/*  onChange={(e) => handleUserSearch(e.target.value)}*/}
            {/*  type="text"*/}
            {/*  className="w-full h-full px-3 text-md text-gray-700 outline-none"*/}
            {/*  placeholder="Search by product name, brand, or category"*/}
            {/*/>*/}
            <CiSearch
              color="#585858"
              size={30}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          </div>

          <FiMenu
            color="#3c3b6e"
            size={45}
            onClick={handleClick}
            className={`cursor-pointer transition-transform duration-300 ${
              isOpen ? "rotate-90" : "hover:scale-110"
            }`}
          />

          {/* Mobile Dropdown Menu */}
          {isOpen && menus.length > 0 && (
            <div className="absolute z-[999] right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out">
              <div className="flex flex-col gap-1">
                {menus.map((menu, index) => (
                  <div key={index}>
                    <p
                      onClick={() => toggleSubMenu(index)}
                      className="cursor-pointer text-lg font-medium text-gray-900 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out py-2 relative group"
                    >
                     <span > {menu.name}        </span>

					  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>

                    </p>
                    {expandedMenu === index && (
                      <div className="text-gray-800 mt-1 pl-4 rounded-lg p-2 flex flex-col gap-1 transition-all duration-300 ease-in-out">
                        {menu.sub_menus.length > 0 &&
                          menu.sub_menus.map((subMenu, subIndex) => (
                            <li
                              key={subIndex}
                              className="ml-2 list-none text-base font-normal hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out cursor-pointer py-1"
                            >
                              {subMenu.name}
                            </li>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
