import Image from "next/image";
import React from "react";

const ShowcaseCard = ({ image, brand, title, url }) => {
	return (
		<div className="bg-white corner-borders-bottom shadow-lg overflow-hidden transform transition-all hover:shadow-2xl">
			<Image
				src={image}
				alt={title}
				width={192}
				height={192}
				className="w-full h-48 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
			/>
			<div className="p-4 cursor-pointer flex flex-col items-center justify-center w-full text-center">
				<h1 className="text-2xl font-medium text-primary hover:text-primaryDark">
					{brand}
				</h1>
				<p className="text-md p-4 md:min-h-28 text-[#585858]">{title}</p>
				<a
					href={url}
					className="mt-2 inline-block px-2 py-1 bg-secondary hover:bg-secondaryDark text-white w-full"
				>
					Read more
				</a>
			</div>
		</div>
	);
};

export default ShowcaseCard;
