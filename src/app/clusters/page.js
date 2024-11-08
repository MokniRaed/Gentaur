import Announcement from "@components/Announcement";
import Clusters from "@components/Clusters";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Empty from "../components/Empty";
import SearchBar from "../components/SearchBar";
import { getClusters } from "../api/requests";

export default async function ClustersPage() {
	const clusters = await getClusters();

	return (
		<main className="font-[family-name:var(--font-geist-sans)] bg-white">
			<Announcement />
			<Navbar clusters={clusters} />
			<SearchBar clusters={clusters} />
			{clusters && clusters.length > 0 ? (
				<Clusters clusters={clusters} />
			) : (
				<Empty />
			)}
			<Footer />
		</main>
	);
}
