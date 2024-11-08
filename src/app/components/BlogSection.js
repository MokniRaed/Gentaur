"use client";
import gentaurImage from "@images/product.png";
import ClusterCard from "./ClusterCard";
import { privacyImage } from "../mock/home";
import { useState } from "react";
import { Button } from "@mui/joy";
import BlogCard from "./BlogCard";
import { blogs } from "@mock/home";

const BlogSection = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const blogsPerPage = 10;
	const totalPages = Math.ceil(blogs.length / blogsPerPage);

	// Get current blogs for the current page
	const currentClusters = blogs.slice(
		(currentPage - 1) * blogsPerPage,
		currentPage * blogsPerPage
	);

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<div className="flex items-center mt-14 justify-center">
			<div className=" w-full flex items-center flex-col p-2 lg:p-0 lg:w-[85%]">
				<h1 className="text-primary text-3xl font-bold  mb-8">Explore Blogs</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{blogs.map((card, i) => (
						<BlogCard
							key={i}
							image={card.image}
							date={card.date}
							content={card.content}
							title={card.title}
							url={card.url}
						/>
					))}
				</div>
				<div className="w-full mt-24 mb-32 mx-auto flex items-center justify-between ">
					<Button
						onClick={handlePreviousPage}
						disabled={currentPage === 1}
						className="bg-primary px-4 py-2 rounded-none hover:bg-primaryDark disabled:opacity-50"
					>
						Previous
					</Button>
					<span className="text-gray-700 text-sm">
						Page {currentPage} of {totalPages}
					</span>
					<Button
						onClick={handleNextPage}
						disabled={currentPage === totalPages}
						className="bg-primary px-4 py-2 rounded-none hover:bg-primaryDark disabled:opacity-50"
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
};

export default BlogSection;
