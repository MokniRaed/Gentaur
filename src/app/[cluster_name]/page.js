import { redirect } from "next/navigation";
import { getClusters, searchWithFiltersFixedCluster } from "../api/requests";
import Announcement from "../components/Announcement";
import Empty from "../components/Empty";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OldToNew from "../components/OldToNew";
import OldToNewItem from "../components/OldToNewItem";
import ProductsTable from "../components/ProductsTable";
import SearchBar from "../components/SearchBar";
import {
	old_menus,
	old_menus_data,
	old_menus_pages,
	old_menus_pages_data,
} from "../mock/OldMenus";

export default async function Product({ params, searchParams }) {
	const { cluster_name } = params;
	const { page = 1, query = "" } = searchParams;

	// Fetch clusters
	const clusters = await getClusters();

	// Redirect if clusters are not available
	if (!clusters) {
		redirect("/products");
		return null;
	}

	// Normalize cluster_name
	const normalizedClusterName = cluster_name.startsWith("/")
		? cluster_name
		: `/${cluster_name}`;

	// Check if cluster_name is invalid
	// if (
	// 	!clusters.includes(cluster_name) &&
	// 	!old_menus.includes(normalizedClusterName)
	// ) {
	// 	redirect("/products");
	// 	return null;
	// }

	// Handle old menu paths
	if (old_menus.includes(normalizedClusterName)) {
		const legacyData = old_menus_data[normalizedClusterName];
		return (
			<MainLayout clusters={clusters}>
				<OldToNew old_url={normalizedClusterName} data={legacyData} />
			</MainLayout>
		);
	}
	if (old_menus_pages.includes(normalizedClusterName)) {
		
		const legacyData = old_menus_pages_data[normalizedClusterName];

		return (
			<MainLayout clusters={clusters}>
				<OldToNewItem title={legacyData.title} content={legacyData.content} />
			</MainLayout>
		);
	}

	// Fetch and display products for valid clusters
	try {
		const searchResponse = await searchWithFiltersFixedCluster(
			cluster_name,
			page,
			query,
			[]
		);

		const hasProducts =
			searchResponse?.count > 0 && searchResponse.products.length > 0;

		return (
			<MainLayout clusters={clusters}>
				{hasProducts ? (
					<ProductsTable
						count={searchResponse.count}
						page={searchResponse.page}
						products={searchResponse.products}
					/>
				) : (
					<div className="w-full flex items-center justify-center">
						<Empty />
					</div>
				)}
			</MainLayout>
		);
	} catch (error) {
		console.error("Error fetching data:", error);
		redirect("/products");
		return null;
	}
}

// Reusable layout component
function MainLayout({ clusters, children }) {
	return (
		<main className="flex flex-col min-h-screen bg-white font-[family-name:var(--font-geist-sans)]">
			<Announcement />
			<Navbar clusters={clusters} />

			<SearchBar clusters={clusters} />
			<div className="flex flex-grow">{children}</div>
			<Footer />
		</main>
	);
}
