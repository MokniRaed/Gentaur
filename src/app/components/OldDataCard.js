import Link from "next/link";
import LinkIcon from "@mui/icons-material/Link";

const OldDataCard = ({ title, url, content, date, category, categoryUrl }) => {
	return (
		<div className="bg-white cursor-pointer text-black pt-4 pb-4 pl-2 pr-2 corner-border corner-border-top-left corner-border-bottom-right">
			<div className="pb-4">
				{url && (
					<Link href={url}>
						<h1 className="cursor-pointer text-xl font-medium text-primary hover:text-primaryDark ">
							{title}
						</h1>
					</Link>
				)}

				{!url && (
					<h1 className="cursor-pointer text-xl font-medium text-primary hover:text-primaryDark ">
						{title}
					</h1>
				)}
			</div>
			<div>
				<p className="text-gray-700 text-md">{content}</p>
				<br />
				<hr />
				<p className="pt-2 text-xs text-gray-600">{date}</p>
				{category && categoryUrl && (
					<div className="mt-2 flex items-center gap-1">
						<LinkIcon color="primary" />
						<Link
							className="text-gray-600 text-sm hover:text-primary"
							href={categoryUrl}
						>
							{category}
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default OldDataCard;
