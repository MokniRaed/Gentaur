import Announcement from "@components/Announcement";
import Navbar from "@components/Navbar";
import CartSection from "../components/CartSection";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { getClusters } from "../api/requests";

export default async function Cart() {
	return (
		<>
			<CartSection />
			<Footer />
		</>
	);
}
