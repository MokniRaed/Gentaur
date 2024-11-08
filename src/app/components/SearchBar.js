"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ clusters }) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleUserSearch = (phrase) => {
		const params = new URLSearchParams(searchParams);
		params.set("query", phrase);
		params.set("page", 1);
		const slug = pathname.slice(1, pathname.length);
		if (clusters.includes(slug)) {
			replace(`${pathname}?${params.toString()}`);
		} else {
			replace(`/products?${params.toString()}`);
		}
	};

	return (
		<div className="w-full h-auto bg-white flex flex-row items-center justify-center ">
			<div className="px-2 py-2 h-full w-full lg:w-[60%] lg:pl-0 hidden lg:flex flex-row items-center justify-center gap-5">
				<div className="hidden w-[100%] lg:block">
					<div className="h-[45px] min-w-[650px] bg-white border border-solid border-gray-300  flex items-center pr-2 shadow-sm rounded-lg">
						<input
							defaultValue={searchParams.get("query")?.toString()}
							onChange={(e) => {
								handleUserSearch(e.target.value);
							}}
							type="text"
							className="w-full h-[100%] px-2 text-md text-gray-700 outline-none"
							placeholder="Search by product name brand or category"
						/>
						<CiSearch
							color="#585858"
							size={30}
							className="cursor-pointer transition-transform duration-300 hover:scale-110"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
