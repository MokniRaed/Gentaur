import Image from "next/image";
import Link from "next/link";

const ClusterCard = ({ name, image }) => {
	return (
		<div className="bg-white shadow-lg overflow-hidden transform transition-all hover:shadow-2xl">
			<Image
				src={image}
				alt={name}
				width={192}
				height={192}
				className="w-full h-48 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
			/>
			<Link href={`/${name}`}>
				<div className="p-4 flex cursor-pointer flex-col items-start justify-center w-full gap-1">
					<h3 className="text-lg font-semibold text-primary hover:text-primaryDark">
						{name}
					</h3>
				</div>
			</Link>
		</div>
	);
};

export default ClusterCard;
