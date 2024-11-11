import React from "react";
import { suppliers } from "@mock/home";
import SupplierCard from "./SupplierCard";
import supplier4 from "@images/s2.webp";

const Suppliers = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="w-full p-2 lg:p-0 lg:w-[85%]">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{suppliers.map((supplier, index) => (
						<div 
							key={index} 
							className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-primaryDark rounded-lg overflow-hidden 
								border-4 border-transparent bg-clip-border 
								shadow-md hover:cursor-pointer"
						>
							<SupplierCard image={supplier4} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Suppliers;
