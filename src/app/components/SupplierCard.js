import Image from "next/image";
import React from "react";

const SupplierCard = ({image}) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden transform transition-all hover:shadow-2xl">
      <Image
        src={image}
        alt='supplier'
        width={192}
        height={192}
        className="w-full h-48 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
      />
    </div>
  );
};

export default SupplierCard;
