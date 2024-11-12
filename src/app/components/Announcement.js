import React from "react";
import Link from "next/link";
import Phone from "./Phone";
import Mail from "./Mail";

const Announcement = () => {
 return (
  <div className="w-full bg-primary text-white">
   <div className=" mx-auto px-24 py-2 flex flex-col sm:flex-row items-center justify-between">
    {/* Left Side: Contact Information */}
    <div className="flex items-center space-x-4 mb-2 sm:mb-0">
     {/* <Phone /> */}
     <Mail />
    </div>

    {/* Right Side: Navigational Links */}
    <div className="flex items-center space-x-4">
     <Link href="/contact" className="relative group text-sm">
      Contact Us
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
     </Link>
     <span className="hidden sm:inline-block">|</span>
     <Link href="/custom-services" className="relative group text-sm">
      Custom Services
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
     </Link>
    </div>
   </div>
  </div>
 );
};

export default Announcement;
