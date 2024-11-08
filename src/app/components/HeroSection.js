const HeroSection = () => {
	return (
		<section className="bg-background dark:bg-primary container mx-auto mt-8 mb-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-primaryDark dark:hover:bg-primaryDark hover:shadow-2xl">
			<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div className="mr-auto place-self-center lg:col-span-7">
					<h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary dark:text-white">
						Payments tool for software companies
					</h1>
					<p className="max-w-2xl mb-6 font-light text-foreground lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
						From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment
						stack.
					</p>
					<a
						href="#"
						className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-secondary hover:bg-secondaryDark focus:ring-4 focus:ring-secondary-300 dark:focus:ring-secondary-900 transition duration-300"
					>
						Get started
						<svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</a>
					<a
						href="#"
						className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-foreground border border-secondary rounded-lg hover:bg-secondaryDark focus:ring-4 focus:ring-secondary-100 dark:text-white dark:border-secondaryDark dark:hover:bg-secondaryDark dark:focus:ring-secondary-800 transition duration-300"
					>
						Speak to Sales
					</a>
				</div>
				<div className="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
			</div>
		</section>
	);
};

export default HeroSection;
