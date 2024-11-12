import React from "react";

const Loader = () => {
	return (
		<section className="bg-white min-h-[70vh] flex items-center justify-center">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<div className="loader mb-4 inline-block h-16 w-16 rounded-full border-4 border-t-4 border-gray-200 border-t-blue-500 animate-spin"></div>
					<p className="text-lg font-light text-gray-500">
						Loading, please wait...
					</p>
				</div>
			</div>
		</section>
	);
};

export default Loader;
