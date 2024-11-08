import { introItemsTwo } from "@mock/home";

const IntroTwo = () => {
	return (
		<div className="w-full h-auto bg-white flex items-center justify-center">
			<div className="px-2 py-2 h-full w-full lg:w-[85%] grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
				{introItemsTwo.map((item, index) => (
					<div
						key={index}
						className="bg-white w-full cursor-pointer p-6 flex-grow corner-border corner-border-bottom-left corner-border-top-right"
					>
						<h2 className="text-lg  mb-2 text-primary hover:text-primaryDark ">
							{item.title}
						</h2>
						<p className="text-md text-[#585858]">{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default IntroTwo;
