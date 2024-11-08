"use client";
/* eslint-disable @next/next/no-img-element */
import productImage from "@images/product.png";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/Cart";
import { Skeleton } from "@mui/joy";
import Lottie from "lottie-react";
import Loading from "../animations/loading.json";
import toast, { Toaster } from "react-hot-toast";

const ProductCard = ({ product }) => {
	const { addProduct } = useContext(CartContext);
	const [mounted, setMounted] = useState(false);

	const addToCart = () => {
		const data = {
			id: Date.now(),
			catalog_number: product?.catalog_number,
			name: product?.name,
			size: product?.size,
			sell_price: product?.sell_price,
			qty: 1,
		};
		addProduct(data);
		toast.success("Product Added");
	};

	useEffect(() => {
		// setTimeout(() => {
		// 	setMounted(true);
		// }, 1000);
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<div className="bg-white min-h-[80vh] flex items-center justify-center py-8 font-[Geist Serif]">
				<Lottie animationData={Loading} style={{ wifth: 200, height: 200 }} />
			</div>
		);
	}

	return (
		<div className="bg-white min-h-[80vh] h-auto py-8 font-[Geist Serif]">
			<Toaster />
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row -mx-4">
					<div className="md:flex-1 px-4">
						<div className="h-[460px] bg-gray-50 rounded-3xl mb-4">
							<img
								className="w-full h-full object-cover "
								src={productImage.src}
								alt="Product Image"
							/>
						</div>
						<div className="flex -mx-2 mb-4">
							<div className="w-1/2 px-2">
								<button
									onClick={() => addToCart()}
									className="w-full bg-primary  text-white  py-2 px-4 rounded-full font-bold hover:bg-primaryDark"
								>
									Add to Wishlist
								</button>
							</div>
							<div className="w-1/2 px-2">
								<button
									onClick={() => addToCart()}
									className="w-full bg-secondary  text-white py-2 px-4 rounded-full font-bold hover:bg-secondaryDark "
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
					<div className="md:flex-1 px-4">
						<h1 className="text-3xl font-bold text-primary  mb-2">{product?.name}</h1>
						<p className="text-primaryDark text-sm mb-4">
							{product.description && product.description}
						</p>
						<div className="flex mb-4 text-xl">
							<div className="mr-4">
								{/* <span className="font-bold text-gray-700">Price:</span> */}
								<span className="font-bold  text-secondary">
									{product.sell_price > 0
										? " " + product.sell_price + " USD"
										: "Ask for quotation"}
								</span>
							</div>
							<div c>
								<span className="font-bold text-gray-700">Availability:</span>
								<span className="font-medium text-primary"> In Stock</span>
							</div>
						</div>

						<div className="mb-4">
							<span className="font-bold text-gray-700">Shipping:</span>
							<div className="flex items-center mt-2">
								<span className="text-secondary text-sm font-medium">
									{product.dry_ice
										? "This product is shipped with dry ice"
										: "This product is shipped without dry ice"}
								</span>
							</div>
						</div>
						<div className="mb-4">
							<span className="font-bold text-gray-700">Select Size:</span>
							<div className="flex items-center mt-2">
								<button className="bg-primary text-white  py-2 px-4 rounded-full font-bold mr-2 hover:bg-primaryDark">
									{product.size}
								</button>
							</div>
						</div>
						<div>
							<span className="font-bold text-gray-700">Product Description:</span>
							{product.specifications && product.specifications.length > 0 && (
								<div className="w-full mt-2 text-primaryDark text-sm">
									<p className="font-medium text-md ">Specifications:</p>
									{product.specifications.split(";").map((item, i) => (
										<p key={i}>{item}</p>
									))}
								</div>
							)}
							{product.storage_and_shipping &&
								product.storage_and_shipping.length > 0 && (
									<div className="w-full mt-2 text-primaryDark text-sm">
										<p className="font-medium text-md ">Storage and shipping:</p>
										{product.storage_and_shipping}
									</div>
								)}

							{product.additional_information &&
								product.additional_information.length > 0 && (
									<div className="w-full mt-2 text-primaryDark text-sm">
										<p className="font-medium text-md ">Additional informations:</p>
										{product.additional_information.split(";").map((item, i) => (
											<p key={i}>{item}</p>
										))}
									</div>
								)}

							{product.notes && product.notes.length > 0 && (
								<div className="w-full mt-2 text-primaryDark text-sm">
									<p className="font-medium text-md ">Notes:</p>
									{product.notes}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
