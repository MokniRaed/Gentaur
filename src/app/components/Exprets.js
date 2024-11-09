import React from "react";
import ExpertCard from "./ExpertCard";
import { experts } from "@mock/home";

const Exprets = () => {
	return (
		<div className="flex items-center justify-center">
			<div className=" w-full p-2 lg:p-0 lg:w-[85%]">
				<div className="flex gap-4 justify-center">
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
