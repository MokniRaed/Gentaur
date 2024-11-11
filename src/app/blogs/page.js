import Empty from "../components/Empty";
import BlogSection from "../components/BlogSection";

export default async function ClustersPage() {
	let clusters = [] ;
	return (
		<>
			{clusters && clusters.length > 0 ? (
				<BlogSection blogs={clusters} />
			) : (
				<Empty />
			)}
		</>
	);
}
