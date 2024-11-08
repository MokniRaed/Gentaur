import React from "react";
import Phone from "./Phone";
import Mail from "./Mail";

const Announcement = () => {
	return (
		<div className="w-full h-[35px] bg-primary flex flex-row items-center justify-center">
			<div className="pl-2 h-full w-full lg:w-[85%] lg:pl-0 flex flex-row gap-2 ">
				<Phone />
				<Mail />
			</div>
		</div>
	);
};

export default Announcement;
