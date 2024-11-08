import { getClusters } from "src/app/api/requests";
import Announcement from "@components/Announcement";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import SearchBar from "@components/SearchBar";
import { antibodies_menu } from "src/app/mock/OldMenus";
import { redirect } from "next/navigation";
import AntibodiesPage from "src/app/components/AntibodiesPage";

export default async function Antibodies({ params }) {
	const { cluster_name, id, number } = params;

	const totalPages = Math.ceil(antibodies_menu.length / 20);
	const page = number;
	if ((!page || page === "1" || page === 1) && page !== "page") {
		redirect("/antibodies");
		return null;
	}
	if ((page > String(totalPages) || page > totalPages) && page !== "page") {
		redirect(`/antibodies/page/${totalPages}`);
		return null;
	}
	const startIndex = (page - 1) * 20;
	const endIndex = startIndex + 20;

	// Slice the data for the current page
	const currentPageData = antibodies_menu.slice(startIndex, endIndex);
	// Fetch clusters
	const clusters = await getClusters();

	return (
		<MainLayout clusters={clusters}>
			<AntibodiesPage
				pages={totalPages}
				page={Number(page)}
				items={currentPageData}
			/>
		</MainLayout>
	);
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
