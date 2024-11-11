import Announcement from "@components/Announcement";
import Navbar from "@components/Navbar";
import Intro from "@components/Intro";
import ProductsOne from "@components/ProductsOne";
import Exprets from "@components/Exprets";
import ProductsTwo from "@components/ProductsTwo";
import DividerHR from "@components/DividerHR";
import Suppliers from "@components/Suppliers";
import Footer from "./components/Footer";
import HeroSection from "@components/HeroSection";
import Service from "@components/Service";
import SectionTitle from "@components/SectionTitle"; // Import the reusable component
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
	// const clusters = await getClusters();
	// // const clusters = [];
	//
	//  if (!clusters || clusters.length === 0) {
	//  	return (
	//  		<div className="w-screen h-screen bg-white flex items-center justify-center">
	//  			<Empty />
	//  		</div>
	//  	);
	//  }
	return (
		<>
			{/*<Navbar clusters={clusters} />*/}
			{/*<SearchBar clusters={clusters} />*/}
			<HeroSection />

			{/* Replaced the repetitive section with SectionTitle component */}
			<SectionTitle
				title="Why "
				subtitle="Choose Us"
				description="We Make Shopping Simple: Fast Global Shipping, Secure Payments, and Expert Guidance Every Step of the Way."
				gradientFrom="#2c3493"
				gradientTo="#f5c500"
			/>
			
			<Service />
			<DividerHR />
			
			{/* Repeated section replaced with SectionTitle */}
			<SectionTitle
				title="Better Data"
				subtitle="Scalable AI"
				description="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
				gradientFrom="#2c3493"
				gradientTo="#f5c500"
			/>
			
			<Intro />
			<DividerHR />

			{/* Repeated section replaced with SectionTitle */}
			<SectionTitle
				title="Our Suppliers"
				subtitle=""
				// description="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
				gradientFrom="#2c3493"
				gradientTo="#f5c500"
			/>
			<Suppliers />
			<DividerHR />

			{/* Repeated section replaced with SectionTitle */}
			<SectionTitle
				title="Discover"
				subtitle="Our Products"
				description="Explore a wide range of high-quality laboratory supplies, reagents, and research tools for life sciences and biomedical research at Gentaur.com."
				gradientFrom="#2c3493"
				gradientTo="#f5c500"
			/>
			<ProductsOne />
			<DividerHR />

			{/* Repeated section replaced with SectionTitle */}
			<SectionTitle
				title="Our Experts"
				subtitle=""
				description="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
				gradientFrom="#2c3493"
				gradientTo="#f5c500"
			/>
			<Exprets />
			<DividerHR />

			{/* Repeated section replaced with SectionTitle */}
			<SectionTitle
				title="Find "
				subtitle="the product you need"
				description="we offer a wide selection of products. From antibodies and diagnostic kits to lab equipment and molecular biology products"
				gradientFrom="#2c3493"
				gradientTo="#f5c500"
			/>
			<ProductsTwo />
			<DividerHR />
			<section className="relative h-[500px] w-full">

            {/* Background Image */}
            <Image
                src="https://www.leinco.com/wp-content/uploads/2024/05/Recombinant-antibody-web-1.jpg" // replace with your image path
                alt="Background for Mpox Research"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
                priority // Optional: load this image with priority
            />

            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center justify-start pl-10 md:pl-20">
                <div className="text-white max-w-lg">
                    <h1 className="text-4xl font-bold mb-4">
																					Connecting You to Quality Worldwide
																				</h1>
                    <Link href="/more-info"  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-secondary hover:bg-secondaryDark focus:ring-4 focus:ring-secondary-300 dark:focus:ring-secondary-900 transition duration-300">
                            Read more
                    </Link>
                </div>
            </div>
        </section>
		</>
	);
}
