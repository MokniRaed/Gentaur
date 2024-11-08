import { CurrencyExchange, LocalShipping, Payment, SupervisorAccount } from "@mui/icons-material";

const Service = () => {
	return (
		<div className="flex justify-center items-center py-10">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{/* Card 1 */}
				<div
					className="w-64 h-80 rounded-lg border border-primary shadow-md bg-primaryDark flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-xl group"
				>
					<div className="text-5xl text-secondary group-hover:scale-125 transition-transform duration-300">
						{/* Example icon */}
						<LocalShipping className="text-5xl group-hover:text-secondaryDark transition-colors duration-300" />
					</div>
					<div className="mt-4 text-center">
						<h3 className="text-2xl font-semibold text-white">Fast shipping via courier</h3>
						<p className="mt-2 text-sm text-gray-200">
							Get your packages delivered with reliable courier services, ensuring fast and safe delivery all over the world.
						</p>
					</div>
				</div>

				{/* Card 2 */}
				<div
					className="w-64 h-80 rounded-lg border border-primary shadow-md bg-primaryDark flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-xl group"
				>
					<div className="text-5xl text-secondary group-hover:scale-125 transition-transform duration-300">
						{/* Example icon */}
						<Payment className="text-5xl group-hover:text-secondaryDark transition-colors duration-300" />
					</div>
					<div className="mt-4 text-center">
						<h3 className="text-2xl font-semibold text-white">Fast and Secure Payment Methods</h3>
						<p className="mt-2 text-sm text-gray-200">
							Secure and easy online payment options for fast transactions across various platforms.
						</p>
					</div>
				</div>

				{/* Card 3 */}
				<div
					className="w-64 h-80 rounded-lg border border-primary shadow-md bg-primaryDark flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-xl group"
				>
					<div className="text-5xl text-secondary group-hover:scale-125 transition-transform duration-300">
						{/* Example icon */}
						<SupervisorAccount className="text-5xl group-hover:text-secondaryDark transition-colors duration-300" />
					</div>
					<div className="mt-4 text-center">
						<h3 className="text-2xl font-semibold text-white">Experienced specialists</h3>
						<p className="mt-2 text-sm text-gray-200">
							Our team of specialists are here to provide expert advice and guidance for all your needs.
						</p>
					</div>
				</div>

				{/* Card 4 */}
				<div
					className="w-64 h-80 rounded-lg border border-primary shadow-md bg-primaryDark flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-xl group"
				>
					<div className="text-5xl text-secondary group-hover:scale-125 transition-transform duration-300">
						{/* Example icon */}
						<CurrencyExchange className="text-5xl group-hover:text-secondaryDark transition-colors duration-300" />
					</div>
					<div className="mt-4 text-center">
						<h3 className="text-2xl font-semibold text-white">Convenient currency payment</h3>
						<p className="mt-2 text-sm text-gray-200">
							Make payments in multiple currencies with ease, offering flexibility for international transactions.
						</p>
					</div>
				</div>
			</div>
		</div>


	);
};

export default Service;
