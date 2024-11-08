import Announcement from "@components/Announcement";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import SearchBar from "../components/SearchBar";
import { getClusters } from "../api/requests";
import FaqSection from "../components/FaqSection";

export default async function OrderPage() {
	const clusters = await getClusters();
	return (
		<main className="font-[family-name:var(--font-geist-sans)] bg-white">
			<Announcement />
			<Navbar clusters={clusters} />
			<SearchBar clusters={clusters} />
			<FaqSection />
			<Footer />
		</main>
	);
}
