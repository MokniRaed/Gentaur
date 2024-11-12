"use client";
import Logo from "@images/Gentaur-logo.png";
import { menus } from "@mock/home";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import CartButtons from "./CartButtons";
import Menu from "./Menu";
import Link from "next/link";
import SearchBar from "@components/SearchBar";

const Navbar = ({ clusters = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const isProductsPage = pathname === "/products";

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
    {!isProductsPage && (
     <div className="w-full h-auto bg-white flex flex-row items-center justify-center shadow-lg">
      <div className="px-1 py-1 w-full lg:w-[90%] flex items-center justify-between">
       <div className="cursor-pointer transition-transform duration-300 hover:scale-105">
        <Link href="/">
         <Image src={Logo} alt="Logo" className="mr-4" width={126} height={126} />
        </Link>
       </div>
       <div className="w-[70%] flex flex-col items-center justify-center ">
        <div className="hidden w-full lg:block">
         {/* <Menu pathname={pathname} /> */}
         <div className="hidden w-[100%] lg:block">
          <Menu pathname={pathname} />
         </div>
        </div>
        <SearchBar clusters={clusters} />
       </div>
       <CartButtons />

      </div>
     </div>
    )}
    {isProductsPage && (
     <div className="w-full bg-white flex items-center justify-center shadow-lg">
       <div className="px-1 py-1 w-full lg:w-[90%] flex items-center justify-between">
         <div className="cursor-pointer transition-transform duration-300 hover:scale-105">
           <Link href="/">
             <Image src={Logo} alt="Logo" className="mr-4" width={72} height={72} />
           </Link>
         </div>

         <div className="flex flex-col items-center justify-center w-full">
           <div className=" lg:w-[80%] w-full lg:block">
             {/* <Menu pathname={pathname} /> */}
             <SearchBar clusters={clusters} />
           </div>
         </div>
         <CartButtons />
       </div>
     </div>
    )}
     {/* Main Navbar */}


     {/* Mobile Menu */}

   </>
  );
};

export default Navbar;
