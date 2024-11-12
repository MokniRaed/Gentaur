import Announcement from "@components/Announcement";
import Navbar from "@components/Navbar";
import ProductCard from "@components/ProductCard";
import { redirect } from "next/navigation";
import SearchBar from "src/app/components/SearchBar";
import { getClusters, getProduct } from "../../api/requests";

export default async function Product({ params }) {
	const { id } = params;
	const productId = Number(id.split("-").slice(-1));
	const response = await getProduct(productId);
	const clusters = await getClusters();
	if (
		(Object.keys(response).includes("success") &&
			response["success"] === false) ||
		!Object.keys(response).includes("name")
	) {
		redirect("/products");
	}

	return (
		<main className="flex flex-col h-screen bg-white font-[family-name:var(--font-geist-sans)]">
			<Announcement />
			{/*<Navbar clusters={clusters} />*/}
			{/*<SearchBar clusters={clusters} />*/}
			<ProductCard product={response} />
		</main>
	);
}
