import Announcement from "@components/Announcement";
import Navbar from "@components/Navbar";
import ProductCard from "@components/ProductCard";
import { redirect } from "next/navigation";
import Footer from "src/app/components/Footer";
import OldToNew from "src/app/components/OldToNew";
import SearchBar from "src/app/components/SearchBar";
import {
	antibodies_menu,
	new_data,
	new_data_urls,
	old_menus,
	old_menus_data,
	old_menus_pages,
	old_menus_pages_data,
	new_products_data,
	new_products_data_urls,
	outbreaks_data_urls,
	outbreaks_data,
	scientific_journal_data_urls,
	scientific_journal_data,
} from "src/app/mock/OldMenus";
import { getClusters, getProduct, getSimilars } from "../../api/requests";
import OldToNewItem from "src/app/components/OldToNewItem";
import SimilarsTable from "src/app/components/SimilarsTable";

export default async function Product({ params }) {
	const { cluster_name, id } = params;
	const path = `/${cluster_name}/${id}`;

	// Fetch clusters
	const clusters = await getClusters();
	const antibodiesUrls = [...new Set(antibodies_menu.map((item) => item.url))];
	const antibodiesCategoriesUrls = [
		...new Set(antibodies_menu.map((item) => item.categoryUrl)),
	];

	if (old_menus_pages.includes(path)) {
		const legacyData = old_menus_pages_data[path];

		return (
			<MainLayout clusters={clusters}>
				<OldToNewItem title={legacyData.title} content={legacyData.content} />
			</MainLayout>
		);
	}

	// Handle old menu paths
	if (old_menus.includes(path)) {
		const legacyData = old_menus_data[path];
		return (
			<MainLayout clusters={clusters}>
				<OldToNew old_url={path} data={legacyData} />
			</MainLayout>
		);
	}

	if (antibodiesUrls.includes(path)) {
		const legacyData = antibodies_menu.find((item) => item.url === path);
		return (
			<MainLayout clusters={clusters}>
				<OldToNewItem title={legacyData.title} content={legacyData.content} />
			</MainLayout>
		);
	}
	if (antibodiesCategoriesUrls.includes(path)) {
		const legacyData = antibodies_menu.filter(
			(item) => item.categoryUrl === path
		);
		return (
			<MainLayout clusters={clusters}>
				<OldToNew old_url={path} data={legacyData} />
			</MainLayout>
		);
	}
	if (new_data_urls.includes(path)) {
		const legacyData = new_data.find((item) => item.url === path);
		return (
			<MainLayout clusters={clusters}>
				<OldToNewItem
					title={legacyData.title}
					date={legacyData.date}
					content={legacyData.content}
				/>
			</MainLayout>
		);
	}
	if (new_data_urls.includes(path)) {
		const legacyData = new_data.find((item) => item.url === path);
		return (
			<MainLayout clusters={clusters}>
				<OldToNewItem
					title={legacyData.title}
					date={legacyData.date}
					content={legacyData.content}
				/>
			</MainLayout>
		);
	}
	if (new_products_data_urls.includes(path)) {
		const legacyData = new_products_data.find((item) => item.url === path);
		return (
			<MainLayout clusters={clusters}>
				<OldToNewItem
					title={legacyData.title}
					date={legacyData.date}
					content={legacyData.content}
				/>
			</MainLayout>
		);
	}
	if (outbreaks_data_urls.includes(path)) {
		const legacyData = outbreaks_data.find((item) => item.url === path);
		return (
			<MainLayout clusters={clusters}>
				<OldToNewItem
					title={legacyData.title}
					date={legacyData.date}
					content={legacyData.content}
				/>
			</MainLayout>
		);
	}
	if (scientific_journal_data_urls.includes(path)) {
		const legacyData = scientific_journal_data.find((item) => item.url === path);
		return (
			<MainLayout clusters={clusters}>
				<OldToNewItem
					title={legacyData.title}
					date={legacyData.date}
					content={legacyData.content}
				/>
			</MainLayout>
		);
	}

	// Extract and validate product ID
	const productId = parseInt(id.split("-").pop(), 10);
	if (isNaN(productId)) {
		redirect("/products");
		return null;
	}

	// Fetch product
	const product = await getProduct(productId).catch((error) => {
		console.error("Error fetching product:", error);
		redirect("/products");
		return null;
	});

	// Redirect if product not found or invalid
	if (!product || product.success === false || !product.name) {
		redirect("/products");
		return null;
	}

	const productCluster = product.cluster_name;

	if (!productCluster || productCluster.length === 0) {
		redirect("/products");
		return null;
	}

	const similars = await getSimilars(cluster_name);
	const { products } = similars;

	return (
		<MainLayout clusters={clusters}>
			<ProductCard product={product} />
			{products && products.length > 0 && <SimilarsTable similars={products} />}
		</MainLayout>
	);
}

// Reusable layout component
function MainLayout({ clusters, children }) {
	return (
		<main className=" h-auto bg-white font-[family-name:var(--font-geist-sans)]">
			<div className="w-full h-[35px]">
				<Announcement />
			</div>
			<Navbar clusters={clusters} />
			<SearchBar clusters={clusters} />
			{children}
			<Footer />
		</main>
	);
}
