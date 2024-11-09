import Announcement from "@components/Announcement";
import Navbar from "@components/Navbar";
import Menu from "@components/Menu";
import Showcase from "@components/Showcase";
import Intro from "@components/Intro";
import ProductsOne from "@components/ProductsOne";
import Exprets from "@components/Exprets";
import ProductsTwo from "@components/ProductsTwo";
import Divider from "@components/Divider";
import IntroTwo from "@components/IntroTwo";
import DividerHR from "@components/DividerHR";
import ProductsThree from "@components/ProductsThree";
import Blogs from "@components/Blogs";
import ProductsFour from "@components/ProductsFour";
import Suppliers from "@components/Suppliers";
import IntroThree from "@components/IntroThree";
import ProductsFive from "@components/ProductsFive";
import ProductsSix from "@components/ProductsSix";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { getClusters } from "./api/requests";
import Empty from "./components/Empty";
import HeroSection from "@components/HeroSection";
import Service from "@components/Service";
import Separator from "@components/Separator";

export default async function Home() {
	// const clusters = await getClusters();
	const clusters = []


	// if (!clusters || clusters.length === 0) {
	// 	return (
	// 		<div className="w-screen h-screen bg-white flex items-center justify-center">
	// 			<Empty />
	// 		</div>
	// 	);
	// }
	return (
		<main className="font-[family-name:var(--font-geist-sans)] bg-white  items-center">
			<Announcement />
			<Navbar clusters={clusters} /> 
			<SearchBar clusters={clusters} />
			<HeroSection />
			<div className="flex flex-col items-center justify-center text-center mt-20 mb-10">
				<h6 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-primaryDark md:text-5xl lg:text-4xl">
					<span
						className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable
					AI.
				</h6>
				<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
					Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive
					economic growth.
				</p>
			</div>
			<Separator />
			<Service />
			<div className="flex flex-col items-center justify-center text-center mt-20 mb-10">
				<h6 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-primaryDark md:text-5xl lg:text-4xl">
					<span
						className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable
					AI.
				</h6>
				<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
					Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive
					economic growth.
				</p>
			</div>
			<Separator />
			<Showcase />
			<div className="flex flex-col items-center justify-center text-center mt-20 mb-10">
				<h6 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-primaryDark md:text-5xl lg:text-4xl">
					<span
						className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable
					AI.
				</h6>
				<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
					Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive
					economic growth.
				</p>
			</div>
			<Separator />
			<Intro />
			<div className="flex flex-col items-center justify-center text-center mt-20 mb-10">
				<h6 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-primaryDark md:text-5xl lg:text-4xl">
					<span
						className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable
					AI.
				</h6>
				<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
					Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive
					economic growth.
				</p>
			</div>
			<Separator />
			<Suppliers />
			<div className="flex flex-col items-center justify-center text-center mt-20 mb-10">
				<h6 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-primaryDark md:text-5xl lg:text-4xl">
					<span
						className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable
					AI.
				</h6>
				<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
					Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive
					economic growth.
				</p>
			</div>
			<Separator />
			<ProductsOne />
			<div className="flex flex-col items-center justify-center text-center mt-20 mb-10">
				<h6 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-primaryDark md:text-5xl lg:text-4xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c500]  to-[#2c3493]">
        Our Experts</span>
     Scalable AI.
				</h6>

				<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
					Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive
					economic growth.
				</p>
			</div>
			<Separator />
			<Exprets />
			<div className="flex flex-col items-center justify-center text-center mt-20 mb-10">
				<h6 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-primaryDark md:text-5xl lg:text-4xl">
					<span
						className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable
					AI.
				</h6>
				<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
					Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive
					economic growth.
				</p>
			</div>
			<Separator />
			<ProductsTwo />
			<DividerHR />
			<Footer />
		</main>
	);
}
