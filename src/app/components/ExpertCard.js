import Image from "next/image";

const ExpertCard = ({ image, title, roles }) => {
	return (
		<div className="bg-white corner-borders-bottom cursor-pointer shadow-lg overflow-hidden transform transition-all hover:shadow-2xl">
			<Image
				src={image}
				alt={title}
				width={500}
				height={500}
				className="w-full h-48 object-contain object-top hover:scale-105 transition-all duration-300 ease-in-out"
			/>
			<div className="p-4 flex flex-col items-start justify-center w-full gap-1">
				<div className="min-h-14">
					{roles.map((item, index) => (
						<p key={index} className="text-sm text-[#585858]">
							{item}
						</p>
					))}
				</div>
				<h3 className="text-lg font-semibold text-primary hover:text-primaryDark">
					{title}
				</h3>
			</div>
		</div>
	);
};

export default ExpertCard;
