"use client";
import Table from "@mui/joy/Table";
import { useMediaQuery } from "@mui/material";
import { generateProductUrlForClusterPage } from "../helpers";
import Link from "next/link";

const SimilarsTable = ({ similars }) => {
	const isTablet = useMediaQuery("(max-width:768px)");
	return (
		<div className="w-full  gap-2 mt-8 flex flex-col items-center justify-center">
			<h1 className="text-3xl font-bold text-primary">Similar Products</h1>
			<Table size="sm" className="lg:w-[85%] w-[96%] bg-white">
				<thead>
					<tr>
						<th style={{ width: "20%" }}>Cat</th>
						<th style={{ width: isTablet ? "80%" : "40%" }}>Product Name</th>
						{!isTablet && <th style={{ width: "20%" }}>Size</th>}
						{!isTablet && <th style={{ width: "20%" }}>Price&nbsp;(USD)</th>}
					</tr>
				</thead>
				<tbody>
					{similars &&
						similars.map((item, i) => {
							const url = item.cluster_name + generateProductUrlForClusterPage(item);
							return (
								<tr
									key={i}
									className="w-full hover:bg-primary hover:text-white cursor-pointer"
								>
									<td>
										<Link href={url}>{item.catalog_number}</Link>
									</td>
									<td>
										<Link href={url}>{item.name}</Link>
									</td>
									{!isTablet && (
										<td>
											<Link href={url}>{item.size}</Link>
										</td>
									)}
									{!isTablet && (
										<td>
											<Link href={url}>{item.sell_price}</Link>
										</td>
									)}
								</tr>
							);
						})}
				</tbody>
			</Table>
		</div>
	);
};

export default SimilarsTable;
