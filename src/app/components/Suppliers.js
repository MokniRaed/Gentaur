import React from "react";
import { suppliers } from "@mock/home";
import SupplierCard from "./SupplierCard";

const Suppliers = () => {
	return (
		<div className="flex items-center justify-center">
			<div className=" w-full p-2 lg:p-0 lg:w-[85%]">
				<p className="text-primary cursor-pointer hover:text-primaryDark text-2xl font-semibold mb-8">
					Our suppliers
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{suppliers.map((supplier, index) => (
						<SupplierCard key={index} image={supplier} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Suppliers;
