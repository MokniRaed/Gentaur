import { introItems } from "@mock/home";

const Intro = () => {
	return (
		<div className="w-full h-auto bg-gray-100 flex items-center justify-center py-12">
			<div className="px-4 py-4 h-full w-full lg:w-[85%] grid grid-cols-1 sm:grid-cols-2 gap-8">
				{introItems.map((item, index) => (
					<div
						key={index}
						className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer p-8 transform hover:scale-105"
					>
						<h2 className="text-2xl font-bold mb-4 text-gray-800 hover:text-primary transition-colors duration-200">
							{item.title}
						</h2>
						<p className="text-md text-gray-600 leading-relaxed">{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};


export default Intro;

