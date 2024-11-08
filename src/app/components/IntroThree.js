import { introItemsThree } from "@mock/home";

const IntroThree = () => {
	return (
		<div className="w-full  h-auto bg-white flex items-center justify-center">
			<div className="px-2 py-2 h-full w-full lg:w-[85%] grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
				{introItemsThree.map((item, index) => (
					<div
						key={index}
						className="bg-white corner-border corner-border-top-right corner-border-bottom-left cursor-pointer w-full  p-6 flex-grow"
					>
						<h2 className="text-lg  mb-2 text-primary hover:text-primaryDark">
							{item.title}
						</h2>
						<p className="text-md text-[#585858]">{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default IntroThree;
