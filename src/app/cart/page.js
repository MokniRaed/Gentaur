import Announcement from "@components/Announcement";
import Navbar from "@components/Navbar";
import CartSection from "../components/CartSection";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { getClusters } from "../api/requests";

export default async function Cart() {
	const clusters = await getClusters();
	return (
		<main className="font-[family-name:var(--font-geist-sans)] bg-white">
			<Announcement />
			<Navbar clusters={clusters} />
			<SearchBar clusters={clusters} />
			<CartSection />
			<Footer />
		</main>
	);
}
