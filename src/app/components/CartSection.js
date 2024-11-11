"use client";
import { Button } from "@mui/joy";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../contexts/Cart";
import { productsImageCartPage } from "../mock/products";
import Image from "next/image";

const CartItem = ({ product, changeQuantity, removeProduct }) => {
	return (
		<div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm   md:p-6">
			<Toaster />
			<div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
				<a className="shrink-0 md:order-1">
					<Image  fill className="h-20 w-20 " src={productsImageCartPage} alt="product" />
					<Image
					fill
						className="hidden h-20 w-20 "

						src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
						alt="imac image"
						width={80}
						height={80}
					/>
				</a>

				<label htmlFor="counter-input" className="sr-only">
					Choose quantity:
				</label>
				<div className="flex items-center justify-between md:order-3 md:justify-end">
					<div className="flex items-center">
						<button
							type="button"
							id="decrement-button"
							onClick={() => {
								const newQty = product?.qty - 1;
								if (newQty >= 1) {
									changeQuantity(product?.id, newQty);
								}
							}}
							data-input-counter-decrement="counter-input"
							className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100    "
						>
							<svg
								className="h-2.5 w-2.5 text-gray-900 "
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 18 2"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 1h16"
								/>
							</svg>
						</button>
						<input
							type="text"
							id="counter-input"
							data-input-counter
							className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 "
							value={product?.qty}
							readOnly
							required
						/>
						<button
							type="button"
							id="increment-button"
							onClick={() => {
								const newQty = product?.qty + 1;
								if (newQty <= 10) {
									changeQuantity(product?.id, newQty);
								}
							}}
							data-input-counter-increment="counter-input"
							className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100    "
						>
							<svg
								className="h-2.5 w-2.5 text-gray-900 "
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 18 18"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 1v16M1 9h16"
								/>
							</svg>
						</button>
					</div>
					<div className="text-end md:order-4 md:w-32">
						<p className="text-base font-bold text-gray-900 ">
							{product?.sell_price &&
							product?.sell_price !== 0 &&
							product?.sell_price !== "null"
								? "$" + parseFloat(product.sell_price).toFixed(2)
								: "Ask for quotation"}
						</p>
					</div>
				</div>

				<div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
					<a className="text-base font-medium text-gray-900 hover:underline ">
						{product?.name}
					</a>

					<div className="flex items-center gap-4">
						<button
							onClick={() => {
								removeProduct(product?.id);
								toast.error("Product removed.");
							}}
							type="button"
							className="inline-flex items-center text-sm font-medium text-red-600 hover:underline "
						>
							<svg
								className="me-1.5 h-5 w-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18 17.94 6M18 18 6.06 6"
								/>
							</svg>
							Remove
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const CartSection = () => {
	const { cart, removeProduct, changeQuantity } = useContext(CartContext);

	const { products, total, type } = cart;
	const [mounted, setMounted] = useState(false);
	const { replace } = useRouter();

	const goToProducts = () => {
		replace("/products");
	};
	const goToOrder = () => {
		replace("/order");
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	return (
		<div className="container mx-auto bg-white py-16 px-4 sm:px-6 lg:px-8">
			<div className="text-center mt-4">
				<h1 className="text-4xl scale-105 font-extrabold text-gray-900 mb-4">
					Shopping Cart
				</h1>
				{products.length === 0 && (
					<section className="w-full h-[50vh] flex items-center justify-center">
						<Link href="/products">
							<Button
								sx={{ borderRadius: 0 }}
								className="rounded-none bg-primary hover:bg-primaryDark"
							>
								Cart is empty go shopping
							</Button>
						</Link>
					</section>
				)}
				{products.length > 0 && (
					<section className="bg-white py-8 antialiased  md:py-16">
						<div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
							<div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
								<div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
									<div className="space-y-6">
										{products &&
											products.map((product, i) => (
												<CartItem
													key={i}
													product={product}
													changeQuantity={changeQuantity}
													removeProduct={removeProduct}
												/>
											))}
									</div>
								</div>

								<div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
									<div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm   sm:p-6">
										<p className="text-xl font-semibold text-gray-900 ">Order summary</p>

										<div className="space-y-4">
											<div className="space-y-2">
												<dl className="flex items-center justify-between gap-4">
													<dt className="text-base font-normal text-gray-500 ">
														Original price
													</dt>
													<dd className="text-base font-medium text-gray-900 ">
														{type === "payement"
															? "$" + parseFloat(total + (total * 1) / 100).toFixed(2)
															: "Ask for quotation"}
													</dd>
												</dl>

												{type === "payement" && (
													<dl className="flex items-center justify-between gap-4">
														<dt className="text-base font-normal text-gray-500 ">Savings</dt>
														<dd className="text-base font-medium text-green-600">
															-${parseFloat((total * 1) / 100).toFixed(2)}
														</dd>
													</dl>
												)}
											</div>

											<dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
												<dt className="text-base font-bold text-gray-900 ">Total</dt>
												<dd className="text-base font-bold text-gray-900 ">
													{type === "payement"
														? "$" + parseFloat(total).toFixed(2)
														: "Ask for quotation"}
												</dd>
											</dl>
										</div>

										<a
											onClick={goToOrder}
											className="flex cursor-pointer w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300   "
										>
											Proceed Inquery
										</a>

										<div className="flex items-center justify-center gap-2">
											<span className="text-sm font-normal text-gray-500 "> or </span>
											<a
												title=""
												className="inline-flex items-center gap-2 text-sm font-medium text-black cursor-pointer underline hover:no-underline"
												onClick={goToProducts}
											>
												Continue Shopping
												<svg
													className="h-5 w-5"
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
												>
													<path
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M19 12H5m14 0-4 4m4-4-4-4"
													/>
												</svg>
											</a>
										</div>
									</div>

									{/* <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm   sm:p-6">
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="voucher"
                        className="mb-2 block text-sm font-medium text-gray-900 "
                      >
                        {" "}
                        Do you have a voucher or gift card?{" "}
                      </label>
                      <input
                        type="text"
                        id="voucher"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500     "
                        placeholder=""
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300   "
                    >
                      Apply Code
                    </button>
                  </form>
                </div> */}
								</div>
							</div>
						</div>
					</section>
				)}
			</div>
		</div>
	);
};

export default CartSection;
