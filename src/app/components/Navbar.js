"use client";
import Logo from "@images/logo.png";
import { menus } from "@mock/home";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import CartButtons from "./CartButtons";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = ({ clusters }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [expandedMenu, setExpandedMenu] = useState(null);
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

	const handleClick = () => setIsOpen((prev) => !prev);

	const toggleSubMenu = (index) => {
		if (menus[index].sub_menus.length === 0) {
			return;
		}

		if (expandedMenu === index) {
			setExpandedMenu(null);
		} else {
			setExpandedMenu(index);
		}
	};

	return (
		<>
			{/* Main Navbar */}
			<div className="w-full h-auto bg-white flex flex-row items-center justify-center shadow-md">
				<div className="px-2 py-2 h-full w-full lg:w-[85%] lg:pl-0 flex flex-row items-center justify-between">
					<div className="max-w-[200px] max-h-[200px] cursor-pointer">
						<Link href="/">
							<Image
								src={Logo}
								alt="Logo"
								className="ml-[-7.5px]"
								width={200}
								height={200}
							/>
						</Link>
					</div>
					<div className="hidden w-[100%] lg:block">
						<Menu />
					</div>
					<CartButtons />
				</div>
			</div>

			{/* Mobile Menu */}
			<div className="block w-full h-auto bg-white lg:hidden">
				<div className="relative px-2 py-2 h-full w-full lg:w-[85%] lg:pl-0 flex flex-row items-center justify-between gap-2">
					<div className="h-[45px] w-[100%] relative bg-white border border-solid border-gray-300  shadow-sm flex items-center pr-2">
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
							//   onClick={handleUserSearch}
							color="#585858"
							size={30}
							className="cursor-pointer transition-transform duration-300 hover:scale-110"
						/>
					</div>

					<FiMenu
						color="#3c3b6e"
						size={45}
						onClick={handleClick}
						className={`cursor-pointer transition-transform duration-300 ${
							isOpen ? "rotate-90" : "hover:scale-110"
						}`}
					/>

					{isOpen && menus.length > 0 && (
						<div className="absolute z-[999] p-4 right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out">
							{menus.map((menu, index) => (
								<div key={index}>
									<p
										onClick={() => toggleSubMenu(index)}
										className="cursor-pointer text-lg font-medium text-gray-900 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-500 transition-all duration-300 ease-in-out py-1"
									>
										{menu.name}
									</p>
									{expandedMenu === index && (
										<div className="text-gray-800 mt-1 pl-4 rounded-lg p-2 flex flex-col gap-1 transition-all duration-300 ease-in-out">
											{menu.sub_menus.length > 0 &&
												menu.sub_menus.map((subMenu, subIndex) => (
													<li
														key={subIndex}
														className="ml-2 list-none text-base font-normal hover:text-gray-600 border-b-2 border-transparent hover:border-gray-500 transition-all duration-300 ease-in-out cursor-pointer py-1"
													>
														{subMenu.name}
													</li>
												))}
										</div>
									)}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
