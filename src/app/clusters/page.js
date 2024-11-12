import Announcement from "@components/Announcement";
import Clusters from "@components/Clusters";
import Footer from "@components/Footer";
import Empty from "../components/Empty";
import clusters from "@components/Clusters";

export default async function ClustersPage() {
	let clusters = []
	return (
		<>
			{clusters && clusters.length > 0 ? (
				<Clusters clusters={clusters} />
			) : (
				<Empty />
			)}
			<Footer />
		</>
	);
}
