import Image from "next/image";
import React from "react";

const BlogCard = ({ image, title, content, date, url }) => {
	return (
		<div className="bg-white cursor-pointer corner-borders-bottom shadow-lg overflow-hidden transform transition-all hover:shadow-2xl">
			<Image
				src={image}
				alt={title}
				width={192}
				height={192}
				className="w-full h-48 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
			/>
			<div className="p-4 flex flex-col items-start justify-center w-full ">
				<h3 className="text-2xl mb-4 text-primary font-medium hover:text-primaryDark">
					{title}
				</h3>
				<p className="text-sm md:min-h-[200px] lg:min-h-[auto] text-[#585858]">
					{content}
				</p>
				<a
					href={url}
					className="mt-4 inline-block px-2 py-1 cursor-pointer bg-secondary hover:bg-secondaryDark text-white w-full"
				>
					Read more
				</a>
				<div className="w-full h-6 mt-2 flex items-center justify-center">
					<hr className="border-1 rounded w-full" />
				</div>
				<p className="text-xs  text-[#343434]">{date}</p>
			</div>
		</div>
	);
};

export default BlogCard;
