import React from "react";
import ExpertCard from "./ExpertCard";
import { experts } from "@mock/home";

const Exprets = () => {
	return (
		<div className="flex items-center justify-center">
			<div className=" w-full p-2 lg:p-0 lg:w-[85%]">
				<p className="text-primary cursor-pointer hover:text-primaryDark text-2xl font-semibold mb-8">
					Our Experts
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{experts.map((expert, index) => (
						<ExpertCard
							key={index}
							image={expert.image}
							title={expert.name}
							roles={expert.roles}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Exprets;
