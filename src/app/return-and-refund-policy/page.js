import Announcement from "@components/Announcement";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import SearchBar from "../components/SearchBar";
import { getClusters } from "../api/requests";
import ReturnsPolicySection from "../components/ReturnsPolicySection";

export default async function ReturnAndRefundPolicyPage() {
	return (
		<>
			<ReturnsPolicySection />
		</>
	);
}
