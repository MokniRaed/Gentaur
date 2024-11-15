import React from "react";

const Empty = () => {
	return (
		<section className="bg-white min-h-[70vh] flex items-center justify-center ">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<h1 className="mb-4 text-7xl text-primary tracking-tight font-extrabold lg:text-9xl text-primary-600 ">
						404
					</h1>
					<p className="mb-4 text-3xl tracking-tight font-bold text-primaryDark md:text-4xl ">
						Something&apos;s missing.
					</p>
					<p className="mb-4 text-lg font-light text-gray-500 ">
						Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home
						page.{" "}
					</p>
					<a
						href="/"
						className="inline-flex text-white bg-primary hover:bg-primaryDark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-nonetext-sm px-5 py-2.5 text-center  my-4"
					>
						Back to Homepage
					</a>
				</div>
			</div>
		</section>
	);
};

export default Empty;
