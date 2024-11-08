"use client";
import React from "react";
import OldDataCard from "./OldDataCard";
import { Pagination } from "@mui/material";
import CustomBreadCumbs from "./CustomBreadcumbs";
import { antibodies_menu } from "../mock/OldMenus";
import { usePathname, useRouter } from "next/navigation";

const AntibodiesMain = ({ data }) => {
	const { replace } = useRouter();
	const pathname = usePathname();

	const pages =
		data && data.length > 0
			? Math.ceil(data.length / 20)
			: Math.ceil(antibodies_menu.length / 20);
	const items =
		data && data.length > 0 ? data.slice(0, 20) : antibodies_menu.slice(0, 20);
	const handleClick = (e, v) => {
		const newValue = v;
		if (newValue === 1) {
			data && data.length > 0 ? replace(`${pathname}`) : replace("/antibodies");
		} else {
			data && data.length > 0
				? replace(`${pathname}/page/${newValue}`)
				: replace(`/antibodies/page/${newValue}`);
		}
	};
	return (
		<main className="h-[auto]">
			<CustomBreadCumbs data={["Categories", "Antibodies"]} />
			<div className="hidden lg:grid grid-cols-[1fr_350px] gap-0">
				<div className="flex flex-col gap-20 mt-4">
					{items.map(({ title, url, content, date, category, categoryUrl }, i) => (
						<OldDataCard
							key={i}
							title={title}
							url={url}
							content={content}
							date={date}
							category={category}
							categoryUrl={categoryUrl}
						/>
					))}
				</div>
				<div className="max-w-[350px] pl-4">
					<div className="pt-4 pb-4 cursor-pointer pl-8 pr-4 corner-border corner-border-top-right corner-border-bottom-right corner-border-bottom-left">
						<h1 className="font-medium pb-4 text-primary hover:text-primaryDark text-xl ">
							Genprice
						</h1>
						<p className="text-gray-700  pb-2 text-md">
							We are a life science supplier, We worldwide deliver in 5 working days.
						</p>

						<p className="text-xs text-gray-800">
							Talk to our PhD <span className="font-semibold">us@genprice.com</span>
						</p>
					</div>
				</div>
			</div>
			<div className="flex lg:hidden  flex-col gap-20 mt-4">
				{items.map(({ title, url, content, date, category, categoryUrl }, i) => (
					<OldDataCard
						key={i}
						title={title}
						url={url}
						content={content}
						date={date}
						category={category}
						categoryUrl={categoryUrl}
					/>
				))}
				<div className="w-full pt-4 pb-4 pl-2 cursor-pointer corner-border corner-border-top-left corner-border-bottom-right corner-border-bottom-right">
					<h1 className="font-medium pb-4 text-primary hover:text-primaryDark text-xl ">
						Genprice
					</h1>
					<p className="text-gray-700  pb-2 text-md">
						We are a life science supplier, We worldwide deliver in 5 working days.
					</p>

					<p className="text-xs text-gray-800">
						Talk to our PhD <span className="font-semibold">us@genprice.com</span>
					</p>
				</div>
			</div>
			<div className="w-full h-full mt-20  flex items-center justify-center">
				<Pagination
					sx={{ width: "100%", display: "flex", justifyContent: "center" }}
					count={pages}
					color="primary"
					onChange={handleClick}
				/>
			</div>
		</main>
	);
};

export default AntibodiesMain;
