const OldToNewItem = ({ title, content, date }) => {
	return (
		<div className="w-full min-h-[70vh] py-4 flex justify-center items-start">
			<div className="cursor-pointer corner-border corner-border-top-right corner-border-bottom-left w-[96%] p-4 lg:w-[85%]   ">
				<h1 className="text-3xl text-primary hover:text-primaryDark mb-8">
					{title}
				</h1>
				<p className="font-medium text-md text-gray-600">{content}</p>
				{date && (
					<>
						<br />
						<hr />
						<p className="mt-2 text-gray-800 text-xs ">{date}</p>
					</>
				)}
			</div>
		</div>
	);
};

export default OldToNewItem;
