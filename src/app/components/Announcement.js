import React from "react";
import Link from "next/link";
import Phone from "./Phone";
import Mail from "./Mail";

const Announcement = () => {
  return (
    <div className="w-full h-[35px] bg-primary flex flex-row items-center justify-center">
      <div className="pl-2 h-full w-full lg:w-[85%] lg:pl-0 flex flex-row gap-2 justify-between items-center">
      <div className="flex flex-row gap-2 justify-start items-center">
        <Phone />
        <Mail />
      </div>

      {/* Right side (Links) */}
      <div className="flex flex-row gap-2 justify-end items-center">
        <Link href="/contact" className="relative group">
          <span className="text-white">Contact Us</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
        </Link>
        <span className="mx-2 text-white">|</span>
        <Link href="/custom-services" className="relative group">
          <span className="text-white">Custom Services</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
        </Link>
      </div>
      </div>
      
    </div>
  );
};

export default Announcement;
