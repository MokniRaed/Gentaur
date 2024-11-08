"use client";
import gentaurImage from "@images/product.png";
import ClusterCard from "./ClusterCard";
import { privacyImage } from "../mock/home";
import { useState } from "react";
import { Button } from "@mui/joy";

const Clusters = ({ clusters }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const clustersPerPage = 10;
	const totalPages = Math.ceil(clusters.length / clustersPerPage);

	// Get current clusters for the current page
	const currentClusters = clusters.slice(
		(currentPage - 1) * clustersPerPage,
		currentPage * clustersPerPage
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
			<div className=" w-full p-2 lg:p-0 lg:w-[85%]">
				<p className="text-primary text-2xl font-semibold mb-8">
					Explore all clusters
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{currentClusters.map((cluster, index) => (
						<ClusterCard key={index} image={privacyImage} name={cluster} />
					))}
				</div>
				<div className="max-w-[75vw] mt-24 mb-32 mx-auto flex items-center justify-between ">
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

export default Clusters;
