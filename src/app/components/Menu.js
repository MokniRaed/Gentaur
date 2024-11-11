"use client"
import { useState, useEffect } from "react";
import { menus } from "@mock/home";
import Link from "next/link";

const Menu = ({ pathname }) => {
	const [activeMenu, setActiveMenu] = useState(null);
	const [activeSubMenu, setActiveSubMenu] = useState(null);
	let menuTimeout;
	let subMenuTimeout;

	const handleMenuHover = (index) => {
		clearTimeout(menuTimeout); // Clear any existing timeout
		setActiveMenu(index); // Set the active menu
	};

	const handleMenuLeave = () => {
		menuTimeout = setTimeout(() => {
			setActiveMenu(null); // Hide menu after delay
		}, 200); // Adjust delay as needed
	};

	const handleSubMenuHover = (index) => {
		clearTimeout(subMenuTimeout); // Clear any existing timeout
		setActiveSubMenu(index); // Set the active submenu
	};

	const handleSubMenuLeave = () => {
		subMenuTimeout = setTimeout(() => {
			setActiveSubMenu(null); // Hide submenu after delay
		}, 200); // Adjust delay as needed
	};

	useEffect(() => {
		return () => {
			clearTimeout(menuTimeout);
			clearTimeout(subMenuTimeout);
		};
	}, [menuTimeout, subMenuTimeout]);

	return (
		<div className="w-full h-auto bg-white flex flex-row items-center justify-center">
			<div className="px-2 py-2 h-full w-full lg:w-[auto] lg:pl-0 hidden lg:flex flex-row items-center justify-center gap-5">
				<nav className="corner-borders-bottom rounded-b-lg bg-white shadow-lg">
					<div className="container mx-auto px-4">
						<div className="flex justify-between items-center py-4">
							<ul className="hidden md:flex space-x-4">
								{menus.map((menu, index) => (
									<li
										key={index}
										className="relative group"
										onMouseEnter={() => handleMenuHover(index)}
										onMouseLeave={handleMenuLeave}
									>
										<Link
											href={menu.url}
											className={`text-primary hover:text-primaryDark font-medium relative ${
												pathname === menu.url ? "text-primaryDark" : ""
											}`}
										>
											<span>{menu.name}</span>
											<span
												className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primaryDark transition-all group-hover:w-full ${
													pathname === menu.url ? "w-full" : ""
												}`}
											></span>
										</Link>

										{/* First Level Submenus */}
										{menu.sub_menus.length > 0 && activeMenu === index && (
											<ul
												className="absolute left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-t-sm rounded-b-sm transition-all duration-300 ease-in-out z-50"
												onMouseEnter={() => clearTimeout(menuTimeout)}
												onMouseLeave={handleMenuLeave}
											>
												{menu.sub_menus.map((subMenu, subIndex) => (
													<li
														key={subIndex}
														className="relative group whitespace-nowrap"
														onMouseEnter={() => handleSubMenuHover(subIndex)}
														onMouseLeave={handleSubMenuLeave}
													>
														<Link legacyBehavior href={subMenu.url}>
															<a
																className={`block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-primaryDark ${
																	pathname === subMenu.url ? "text-primaryDark" : ""
																}`}
																rel={subMenu.rel}
															>
																{subMenu.name}
															</a>
														</Link>

														{/* Second Level Submenus */}
														{subMenu.sub_menus?.length > 0 && activeSubMenu === subIndex && (
															<ul
																className="absolute left-full top-0 mt-0 bg-white shadow-lg border border-gray-200 rounded-sm transition-all duration-300 ease-in-out z-50"
																onMouseEnter={() => clearTimeout(subMenuTimeout)}
																onMouseLeave={handleSubMenuLeave}
															>
																{subMenu.sub_menus.map((subSubMenu, subSubIndex) => (
																	<li key={subSubIndex} className="whitespace-nowrap">
																		<Link legacyBehavior href={subSubMenu.url}>
																			<a
																				className={`block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-primaryDark ${
																					pathname === subSubMenu.url
																						? "text-primaryDark"
																						: ""
																				}`}
																				rel={subSubMenu.rel}
																			>
																				{subSubMenu.name}
																			</a>
																		</Link>
																	</li>
																))}
															</ul>
														)}
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>

							{/* Mobile menu toggle button */}
							<button className="md:hidden block text-gray-700 hover:text-primaryDark">
								<svg
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Menu;





















