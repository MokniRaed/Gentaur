import Announcement from "@components/Announcement";
import Navbar from "@components/Navbar";
import { getClusters, getProducts, searchProducts } from "../api/requests";
import Empty from "../components/Empty";
import ProductsTable from "../components/ProductsTable";
import SearchBar from "../components/SearchBar";

export default async function Home({ searchParams }) {
	const { page = 1, query = "" } = searchParams;
	let response;
	let clusters;
	function getUniqueProducts(products) {
		const uniqueCatalogNumbers = new Set(
			products.map((product) => product.catalog_number)
		);
		return Array.from(uniqueCatalogNumbers).map((catalogNumber) => {
			return products.find((product) => product.catalog_number === catalogNumber);
		});
	}

	try {
		clusters = await getClusters();

		if (query.length > 0) {
			response = await searchProducts(page, query);
		} else {
			response = await getProducts(page);
		}

		if (
			response &&
			typeof response === "object" &&
			response.hasOwnProperty("count")
		) {
			const { count = 0 } = response;

			if (count === 0) {
				response = { count: 0, products: [] };
			}
		} else {
			response = { count: 0, products: [] };
		}
	} catch (error) {
		response = { count: 0, products: [] };
	}

	return (
		<>
			<div className="flex flex-grow overflow-hidden">
				{response.count &&
				response.count > 0 &&
				response.products &&
				response.products.length > 0 ? (
					<ProductsTable
						count={response?.count}
						page={response?.page}
						products={response?.products && getUniqueProducts(response.products)}
					/>
				) : (
					<div className="w-screen h-auto bg-white flex items-center justify-center">
						<Empty />
					</div>
				)}
			</div>
		</>
	);
}
