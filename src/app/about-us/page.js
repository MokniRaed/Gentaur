// pages/about.js
import Image from "next/image";
import { aboutImage } from "../mock/home";
import Footer from "../components/Footer";

export default async function About() {
	return (
		<>
			<div className="container mx-auto bg-white py-16 px-4 sm:px-6 lg:px-8">
				<div className="text-center mt-4">
					<h1 className="text-4xl scale-105 font-extrabold text-gray-900 mb-4">
						About Us
					</h1>
					<p className="text-lg text-gray-600 mb-8">
						We are committed to delivering excellence, innovation, and a personal
						touch in every project we undertake.
					</p>
				</div>

				<section className="mb-12 mt-40">
					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
							<p className="text-gray-600">
								Established with the vision of creating impactful solutions, our company
								has evolved over the years into a hub of innovation and expertise. Our
								dedicated team has worked on numerous groundbreaking projects that push
								the boundaries of what&apos;s possible.
							</p>
						</div>
						<div className="relative h-64">
							<Image
								src={aboutImage} // Replace with actual image path
								alt="Our Story"
								layout="fill"
								objectFit="cover"
								className=" shadow-lg"
							/>
						</div>
					</div>
				</section>

				<section className="mb-12">
					<div className="grid md:grid-cols-2 gap-8">
						<div className="relative h-64">
							<Image
								src={aboutImage} // Replace with actual image path
								alt="Our Team"
								layout="fill"
								objectFit="cover"
								className=" shadow-lg"
							/>
						</div>
						<div>
							<h2 className="text-2xl font-semibold text-gray-800 mb-4">
								Meet Our Team
							</h2>
							<p className="text-gray-600">
								Behind every successful project is a team of talented individuals who
								are passionate about what they do. Our team members come from diverse
								backgrounds, bringing unique skills and perspectives that enrich our
								work and culture.
							</p>
						</div>
					</div>
				</section>

				<section className="mb-12">
					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
							<ul className="list-disc list-inside text-gray-600">
								<li className="mb-2">Commitment to quality and excellence</li>
								<li className="mb-2">Innovative thinking and continuous learning</li>
								<li className="mb-2">Customer-centric approach</li>
								<li className="mb-2">Integrity and transparency</li>
								<li className="mb-2">Community and environmental responsibility</li>
							</ul>
						</div>
						<div className="relative h-64">
							<Image
								src={aboutImage} // Replace with actual image path
								alt="Our Values"
								layout="fill"
								objectFit="cover"
								className=" shadow-lg"
							/>
						</div>
					</div>
				</section>

				<section className="mt-40">
					<div className="text-center">
						<h2 className="text-2xl font-semibold text-gray-800 mb-4">
							Subscribe to our newsletter
						</h2>
						<p className="text-gray-600 mb-8">
							We’re always looking for passionate people and innovative companies to
							collaborate with. Subscribe to our newsletter and stay updated on our
							latest news and opportunities.
						</p>
						<form className="flex flex-col md:flex-row justify-center items-center gap-4">
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full md:w-1/2 px-4 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-primaryDark transition duration-300"
								required
							/>
							<button
								type="submit"
								className="bg-primary text-white py-2 px-6  hover:bg-primaryDark transition duration-300"
							>
								Subscribe
							</button>
						</form>
					</div>
				</section>
			</div>
		</>
	);
}
