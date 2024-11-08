import AntibodiesMain from "./AntibodiesMain";
import CustomBreadCumbs from "./CustomBreadcumbs";
import Empty from "./Empty";
import OldDataCard from "./OldDataCard";

const OldToNew = ({ old_url, data }) => {
	return (
		<div className="w-full h-auto pt-4 pb-4 bg-white flex justify-center">
			<div className="w-full pl-2 pr-2 lg:w-[85%] lg:pl-0 lg:pr-0  ">
				{old_url === "/news" ||
				old_url === "/scientific-journal" ||
				old_url === "/outbreaks" ||
				old_url === "/new-products" ||
				old_url === "/antibody" ||
				old_url === "/antibody/monoclonal" ||
				old_url === "/antibody/polyclonal" ||
				old_url === "/antibody/primary" ||
				old_url === "/antibody/secondary" ? (
					<main>
						<CustomBreadCumbs
							data={
								old_url === "/news"
									? ["Categories", "News"]
									: old_url === "/scientific-journal"
									? ["Categories", "Scientific Journal"]
									: old_url === "/new-products"
									? ["Categories", "New Products"]
									: old_url === "/antibody"
									? ["Genprice", "Antibody"]
									: old_url === "/antibody/monoclonal"
									? ["Genprice", "Antibody", "Monoclonal Antibody"]
									: old_url === "/antibody/polyclonal"
									? ["Genprice", "Antibody", "Polyclonal Antibody"]
									: old_url === "/antibody/primary"
									? ["Genprice", "Antibody", "Primary Antibody"]
									: old_url === "/antibody/secondary"
									? ["Genprice", "Antibody", "Secondary Antibody"]
									: ["Categories", "Outbreaks"]
							}
						/>
						<div className="hidden lg:grid grid-cols-[1fr_350px] gap-0">
							<div className="flex flex-col gap-20 mt-4">
								{data.map(({ title, url, content, date }, i) => (
									<OldDataCard
										key={i}
										title={title}
										url={url}
										content={content}
										date={date}
									/>
								))}
							</div>
							<div className="max-w-[350px] pl-4">
								<div className="pt-4 pb-4 cursor-pointer pl-8 pr-4 corner-border corner-border-top-right corner-border-bottom-right corner-border-bottom-left">
									<h1 className="font-medium pb-4 text-primary hover:text-primaryDark text-xl ">
										Genprice
									</h1>
									<p className="text-gray-700  pb-2 text-md">
										We are a life science supplier, We worldwide deliver in 5 working
										days.
									</p>

									<p className="text-xs text-gray-800">
										Talk to our PhD <span className="font-semibold">us@genprice.com</span>
									</p>
								</div>
							</div>
						</div>
						<div className="flex lg:hidden  flex-col gap-20 mt-4">
							{data.map(({ title, url, content, date }, i) => (
								<OldDataCard
									key={i}
									title={title}
									url={url}
									content={content}
									date={date}
								/>
							))}
							<div className="w-full pt-4 pb-4 pl-2 cursor-pointer corner-border corner-border-top-left corner-border-bottom-right corner-border-bottom-right">
								<h1 className="font-medium pb-4 text-primary hover:text-primaryDark text-xl ">
									Genprice
								</h1>
								<p className="text-gray-700  pb-2 text-md">
									We are a life science supplier, We worldwide deliver in 5 working days.
								</p>

								<p className="text-xs text-gray-800">
									Talk to our PhD <span className="font-semibold">us@genprice.com</span>
								</p>
							</div>
						</div>
					</main>
				) : old_url.includes("/antibodies") ? (
					<AntibodiesMain data={data} />
				) : (
					<Empty />
				)}
			</div>
		</div>
	);
};

export default OldToNew;
