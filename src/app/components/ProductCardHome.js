import Image from "next/image";
import React from "react";

const ProductCardHome = ({
	image,
	contactEmail,
	catalogNumber,
	title,
	url,
	price,
	availability,
}) => {
	return (
		<div className="bg-white cursor-pointer corner-borders-bottom shadow-lg overflow-hidden transform transition-all hover:shadow-2xl">
			<Image
				src={image}
				alt={title}
				width={192}
				height={192}
				className="w-full h-48 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
			/>
			<div className="p-4 flex flex-col items-start justify-center w-full gap-1">
				<h3 className="text-lg font-semibold text-primary hover:text-primaryDark">
					{price}
				</h3>
				<p className="text-sm py-1 text-[#585858]">{title}</p>
				<p className="text-xs py-1 text-[#585858]">
					Availability :{" "}
					<span
						style={{
							color: availability === "In Stock" ? "#3c3b6e" : "#b22234",
						}}
						className="font-semibold"
					>
						{availability}
					</span>
				</p>
				<p className="text-sm py-1 text-[#585858]">
					Cat :{" "}
					<span className="font-semibold text-primary hover:text-primaryDark ">
						{catalogNumber}
					</span>
				</p>
				<p className="text-sm py-1 text-[#585858]">
					Ask for more info :{" "}
					<span className="font-semibold text-primary hover:text-primaryDark ">
						{contactEmail}
					</span>
				</p>
			</div>
		</div>
	);
};

export default ProductCardHome;
