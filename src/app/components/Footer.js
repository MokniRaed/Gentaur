import React from "react";
import Logo from "@images/logo.png";
import Image from "next/image";
const Footer = () => {
	return (
		<footer className="bg-white">
			<div className="w-full lg:w-[85%]  mx-auto p-4 md:py-8">
				<div className="sm:flex sm:items-center sm:justify-between">
					<a
						href="/"
						className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
					>
						<Image src={Logo} alt="Logo" width={200} height={200} />
					</a>
					<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#585858] sm:mb-0 ">
						<li>
							<a href="/about-us" className="hover:underline me-4 md:me-6">
								About
							</a>
						</li>
						<li>
							<a href="/privacy-policy" className="hover:underline me-4 md:me-6">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="blogs" className="hover:underline me-4 md:me-6">
								Blog
							</a>
						</li>
						<li>
							<a href="/contact" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
				<span className="block text-sm text-gray-500 sm:text-center ">
					© 2024{" "}
					<a href="/" className="hover:underline">
						Genprice™
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
