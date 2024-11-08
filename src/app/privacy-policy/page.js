/* eslint-disable react/no-unescaped-entities */
// pages/privacy.js
import Announcement from "@components/Announcement";
import Navbar from "@components/Navbar";
import Menu from "@components/Menu";
import Footer from "../components/Footer";
import { getClusters } from "../api/requests";
import SearchBar from "../components/SearchBar";

export default async function Privacy() {
	const clusters = await getClusters();
	return (
		<main className="font-[family-name:var(--font-geist-sans)] bg-white">
			<Announcement />
			<Navbar clusters={clusters} />
			<SearchBar clusters={clusters} />
			<div className="container mx-auto md:max-w-[90%] lg:max-w-[40%] bg-white py-16 px-4 sm:px-6 lg:px-8">
				<div className="text-center mt-4">
					<h1 className="text-4xl scale-105 font-extrabold text-gray-900 mb-2">
						Privacy Policy
					</h1>
					<p className=" text-gray-600 text-sm leading-6 mb-8">
						Last updated on November 2, 2021
					</p>
				</div>

				<section className="mb-10">
					<p className="text-gray-600 text-sm leading-6 mb-2">
						This privacy policy ("Policy") describes how Tailwind Labs Inc.
						("Tailwind", "we", "us" or "our") collects, protects and uses the
						personally identifiable information ("Personal Information") you ("User",
						"you" or "your") may provide through the Tailwind UI website
						(tailwindui.com) or in the course of purchasing any Tailwind UI products
						(collectively, "Website"). The Policy also describes the choices available
						to you regarding our use of your Personal Information and how you can
						access and update this information. This Policy does not apply to the
						practices of companies that we do not own or control, or to individuals
						that we do not employ or manage.
					</p>
				</section>
				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-2">
						Collection of Personal Information
					</h2>
					<p className="text-gray-600 text-sm leading-6 mb-2">
						We receive and store any information you knowingly provide to us when you
						make a purchase through the Website. Currently, this is limited to your
						email address, which is required for you to be able to login to the
						Website and access any purchased Tailwind UI products.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-2">
						Collection of Non-Personal Information
					</h2>
					<p className="text-gray-600 text-sm leading-6 mb-2">
						When you visit the Website our servers automatically record information
						that your browser sends. This data may include information such as your
						device's IP address, browser type and version, operating system type and
						version, language preferences or the webpage you were visiting before you
						came to our Website, pages of our Website that you visit, the time spent
						on those pages, information you search for on our Website, access times
						and dates, and other statistics.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-2">Purchases</h2>
					<p className="text-gray-600 text-sm leading-6 mb-2">
						All purchases made through the Website are processed by a third party
						payment processor, Paddle (paddle.com). Paddle may ask you for personal
						and/or non-personal information, such as your name, address, email
						address, credit card information, or other Personal Information. Paddle
						has a privacy policy (paddle.com/legal-buyers/) that describes their
						collection and use of personal information. Tailwind does not control
						Paddle or its collection or use of information. Any questions or concerns
						about Paddle’s practices should be directed to Paddle. Paddle provides us
						with certain non-personal information relating to purchases made by
						visitors to the Website. The non-personal information may include details
						of the purchase such as the date, amount paid, and product purchased. The
						non-personal purchase information may be linked to the Personal
						Information you provide to us (typically limited to your email address, as
						stated above). Paddle does not supply us with any of your other Personal
						Information such as your name, street address, or credit card information.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-2">
						Managing Personal Information
					</h2>
					<p className="text-gray-600 text-sm leading-6 mb-2">
						You are able to update your Personal Information in your "Account
						Settings" on the Website. Currently this is limited to just your email
						address, as described above. You may also request that we delete your
						email address, but this will prevent you from accessing the products you
						have purchased from Tailwind. When you update information, we may maintain
						a copy of the unrevised information in our records. Some information may
						remain in our private records after deletion of such information from your
						account for a retention period. Once the retention period expires,
						Personal Information shall be deleted. Therefore, the right to access, the
						right to erasure, your rights to access, add to, and update your
						information cannot be enforced after the expiration of the retention
						period. We will retain and use your information as necessary to comply
						with our legal obligations, resolve disputes, and enforce our agreements.
						We may use any aggregated data derived from or incorporating your Personal
						Information after you update or delete it, but not in a manner that would
						identify you personally.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-2">
						Use and Processing of Collected Information
					</h2>
					<p className="text-gray-600 text-sm leading-6 mb-2">
						Any of the information we collect from you may be used to personalize your
						experience; improve our Website; improve customer service; process
						transactions; send notification emails such as password reminders,
						updates, etc; and operate our Website. Non-Personal Information collected
						is used only to identify potential cases of abuse and establish
						statistical information regarding Website usage. This statistical
						information is not otherwise aggregated in such a way that would identify
						any particular user of the system. We may process Personal Information
						related to you if one of the following applies: (i) You have given their
						consent for one or more specific purposes. Note that under some
						legislations we may be allowed to process information until you object to
						such processing (by opting out), without having to rely on consent or any
						other of the following legal bases below. This, however, does not apply,
						whenever the processing of Personal Information is subject to European
						data protection law; (ii) Provision of information is necessary for the
						performance of an agreement with you and/or for any pre-contractual
						obligations thereof; (ii) Processing is necessary for compliance with a
						legal obligation to which you are subject; (iv) Processing is related to a
						task that is carried out in the public interest or in the exercise of
						official authority vested in us; (v) Processing is necessary for the
						purposes of the legitimate interests pursued by us or by a third party. In
						any case, we will be happy to clarify the specific legal basis that
						applies to the processing, and in particular whether the provision of
						Personal Data is a statutory or contractual requirement, or a requirement
						necessary to enter into a contract.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-2">
						Information Transfer and Storage
					</h2>
					<p className="text-gray-600 text-sm leading-6 mb-2">
						Depending on your location, data transfers may involve transferring and
						storing your information in a country other than your own. You are
						entitled to learn about the legal basis of information transfers to a
						country outside the European Union or to any international organization
						governed by public international law or set up by two or more countries,
						such as the UN, and about the security measures taken by us to safeguard
						your information. If any such transfer takes place, you can find out more
						by checking the relevant sections of this document or inquire with us
						using the information provided in the Contact section.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-2">
						The Rights of Users
					</h2>
					<p className="text-gray-600 text-sm leading-6 mb-2">
						You may exercise certain rights regarding your information processed by
						us. In particular, you have the right to do the following: (i) you have
						the right to withdraw consent where you have previously given your consent
						to the processing of your information; (ii) you have the right to object
						to the processing of your information if the processing is carried out on
						a legal basis other than consent; (iii) you have the right to learn if
						information is being processed by us, obtain disclosure regarding certain
						aspects of the processing and obtain a copy of the information undergoing
						processing; (iv) you have the right to verify the accuracy of your
						information and ask for it to be updated or corrected; (v) you have the
						right, under certain circumstances, to restrict the processing of your
						information, in which case, we will not process your information for any
						purpose other than storing it; (vi) you have the right, under certain
						circumstances, to obtain the erasure of your Personal Information from us;
						(vii) you have the right to receive your information in a structured,
						commonly used and machine readable format and, if technically feasible, to
						have it transmitted to another controller without any hindrance. This
						provision is applicable provided that your information is processed by
						automated means and that the processing is based on your consent, on a
						contract which you are part of or on pre-contractual obligations thereof.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-2">Cookies</h2>
					<p className="text-gray-600 text-sm leading-6 mb-2">
						The Website uses "cookies" to help personalize your online experience. A
						cookie is a text file that is placed on your hard disk by a web page
						server. Cookies cannot be used to run programs or deliver viruses to your
						computer. Cookies are uniquely assigned to you, and can only be read by a
						web server in the domain that issued the cookie to you. We may use cookies
						to collect, store, and track information for statistical purposes to
						operate our Website. You have the ability to accept or decline cookies.
						Most web browsers automatically accept cookies, but you can usually modify
						your browser setting to decline cookies if you prefer. In addition to
						using cookies and related technologies as described above, we also may
						permit certain third-party companies to help us tailor advertising that we
						think may be of interest to users and to collect and use other data about
						user activities on the Website. These companies may deliver ads that might
						also place cookies and otherwise track user behavior.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-2">
						Information Security
					</h2>
					<p className="text-gray-600 text-sm leading-6 mb-2">
						We secure information you provide on computer servers in a controlled,
						secure environment, protected from unauthorized access, use, or
						disclosure. We maintain reasonable administrative, technical, and physical
						safeguards in an effort to protect against unauthorized access, use,
						modification, and disclosure of Personal Information in its control and
						custody. However, no data transmission over the Internet or wireless
						network can be guaranteed. Therefore, while we strive to protect your
						Personal Information, you acknowledge that (i) there are security and
						privacy limitations of the Internet which are beyond our control; (ii) the
						security, integrity, and privacy of any and all information and data
						exchanged between you and our Website cannot be guaranteed; and (iii) any
						such information and data may be viewed or tampered with in transit by a
						third-party, despite best efforts.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-2">Data Breach</h2>
					<p className="text-gray-600 text-sm leading-6 mb-2">
						In the event we become aware that the security of the Website has been
						compromised or users’ Personal Information has been disclosed to unrelated
						third-parties as a result of external activity, including, but not limited
						to, security attacks or fraud, we reserve the right to take reasonably
						appropriate measures, including, but not limited to, investigation and
						reporting, as well as notification to and cooperation with law enforcement
						authorities. In the event of a data breach, we will make reasonable
						efforts to notify affected individuals if we believe that there is a
						reasonable risk of harm to the user as a result of the breach or if notice
						is otherwise required by law. When we do we will send you an email.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-2">
						Legal Disclosure
					</h2>
					<p className="text-gray-600 text-sm leading-6 mb-2">
						We will disclose any information we collect, use or receive if required or
						permitted by law, such as to comply with a subpoena, or similar legal
						process, and when we believe in good faith that disclosure is necessary to
						protect our rights, protect your safety or the safety of others,
						investigate fraud, or respond to a government request. In the event we go
						through a business transition, such as a merger or acquisition by another
						company, or sale of all or a portion of its assets, your user account and
						personal data will likely be among the assets transferred.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-2">
						Changes and Amendments
					</h2>
					<p className="text-gray-600 text-sm leading-6 mb-2">
						We reserve the right to modify this privacy policy relating to the Website
						at any time, effective upon posting of an updated version of this Policy
						on the Website. When we do we will revise the updated date at the bottom
						of this page. Continued use of the Website after any such changes shall
						constitute your consent to such changes.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-2">Contacting Us</h2>
					<p className="text-gray-600 text-sm leading-6 mb-2">
						If you have any questions about this Policy, please contact us by email at{" "}
						<a
							href="mailto:support@tailwindui.com"
							className="text-primary underline"
						>
							support@tailwindui.com
						</a>
						.
					</p>
				</section>
			</div>
			<Footer />
		</main>
	);
}
