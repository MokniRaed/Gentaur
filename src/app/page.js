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

export default async function Home() {
	const clusters = await getClusters();


	if (!clusters || clusters.length === 0) {
		return (
			<div className="w-screen h-screen bg-white flex items-center justify-center">
				<Empty />
			</div>
		);
	}
	return (
		<main className="font-[family-name:var(--font-geist-sans)] bg-white">
			<Announcement />
			<Navbar clusters={clusters} />
			<SearchBar clusters={clusters} />
			<Showcase />
			<Divider />
			<Intro />
			<Divider />
			<ProductsOne />
			<DividerHR />
			<Exprets />
			<DividerHR />
			<ProductsTwo />
			<Divider />
			<IntroTwo />
			<Divider />
			<ProductsThree />
			<Divider />
			<Suppliers />
			<Divider />
			<ProductsFour />
			<Divider />
			<IntroThree />
			<Divider />
			<ProductsFive />
			<DividerHR />
			<Blogs />
			<DividerHR />
			<ProductsSix />
			<Divider />
			<Footer />
		</main>
	);
}
