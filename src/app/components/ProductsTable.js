/* eslint-disable react/display-name */
"use client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Chip } from "@mui/joy";
import { Box, Skeleton, useMediaQuery, withStyles } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { memo, useContext, useEffect, useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../contexts/Cart";
import { generateProductUrlForClusterPage } from "../helpers";
import { AiOutlineShoppingCart } from "react-icons/ai";

// Custom Cell Renderer Component
const CellRenderer = memo(({ value, field, name, id, cluster_name }) => {
	const url = cluster_name + generateProductUrlForClusterPage({ name, id });
	switch (field) {
		case "sell_price":
			const amount = value || "Ask";
			return (
				<Link className="hover:text-primaryDark" legacyBehavior href={url}>
                    <span className="hover:text-primaryDark">
                        {/* {amount !== "Ask"
                            ? `${Math.round(Number(amount)) + 1} USD`
                            : amount} */}
																					144 €
                    </span>
				</Link>
			);
		default:
			return (
				<Link className="hover:text-primaryDark" legacyBehavior href={url}>
					<span className="hover:text-primaryDark">{value}</span>
				</Link>
			);
	}
});

const ActionRender = memo(({ row, addProductToCart }) => {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",  // Vertically centers the content
				justifyContent: "center",  // Horizontally centers the content
			}}
		>
			{/* <Box className="px-1 bg-secondary hover:bg-secondaryDark rounded-2xl text-white"                onClick={() => addProductToCart(row)}
            >
                +Add
            </Box> */}
			<AiOutlineShoppingCart
				//   onClick={goToCart}
				color="#B22243"
				size={20}
				className="cursor-pointer transition-transform duration-300 hover:scale-110"
			/>
		</Box>
	);
});

// Main Grid Component
export default function ProductsTable({ page, count, products }) {
	const rows = products.length > 0 ? products : [];
	const isLoading = products.length === 0;
	const pages = Math.ceil(count / 100);
	const { addProduct } = useContext(CartContext);
	const [columnWidths, setColumnWidths] = useState({
		catWidth: 100,
		productNameWidth: 500,
		sizeWidth: 150,
		priceWidth: 150,
		actionWidth: 100,
	});
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const isTablet = useMediaQuery("(max-width:768px)");
	const isMobile = useMediaQuery("(max-width:425px)");

	const addProductToCart = (row) => {
		let { cluster_name, variant, ...others } = row;
		if (
			!others.sell_price ||
			others.sell_price === 0 ||
			others.sell_price === "null"
		) {
			others.sell_price = "Ask for quotation";
		}
		others.qty = 1;
		addProduct(others);
		toast.success("Product Added");
	};

	const handleChange = (event, value) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", value);
		replace(`${pathname}?${params.toString()}`);
	};

	useEffect(() => {
		const updateColumnWidths = () => {
			const width = window.innerWidth;
			setColumnWidths({
				catWidth: 150, // Fixed width for Cat
				productNameWidth: width - 200, // Remaining space (100px for Cat, 100px for Action)
				sizeWidth: 100,
				priceWidth: 100,
				actionWidth: 100, // Fixed width for Action
			});
		};

		updateColumnWidths();
		window.addEventListener("resize", updateColumnWidths);
		return () => window.removeEventListener("resize", updateColumnWidths);
	}, []);

	const columns = useMemo(() => {
		return [
			{
				field: "catalog_number",
				headerName: "Cat",
				width: 130, // Fixed width for 'Cat' column
				renderCell: (params) =>
					isLoading ? (
						<Skeleton width={100 - 20} />
					) : (
						<CellRenderer
							value={params.value}
							field={params.field}
							name={params.row?.name}
							id={params.row?.id}
							cluster_name={params.row?.cluster_name}
						/>
					),
			},
			{
				field: "name",
				headerName: "Product Name",
				flex: 1,
				renderCell: (params) =>
					isLoading ? (
						<Skeleton width="100%" />
					) : (
						<CellRenderer
							value={params.value}
							field={params.field}
							name={params.row?.name}
							id={params.row?.id}
							cluster_name={params.row?.cluster_name}
						/>
					),
			},
			{
				field: "size",
				headerName: "Size",
				width: columnWidths.sizeWidth,
				// flex: 1,
				renderCell: (params) =>
					isLoading ? (
						<Skeleton width={columnWidths.sizeWidth - 20} />
					) : (
						<CellRenderer
							value={params.value}
							field={params.field}
							name={params.row?.name}
							id={params.row?.id}
							cluster_name={params.row?.cluster_name}
						/>
					),
			},
			{
				field: "sell_price",
				headerName: "Price",
				width: columnWidths.priceWidth,
				// flex: 1,
				renderCell: (params) =>
					isLoading ? (
						<Skeleton width={columnWidths.priceWidth - 20} />
					) : (
						<CellRenderer
							value={params.value}
							field={params.field}
							name={params.row?.name}
							id={params.row?.id}
							cluster_name={params.row?.cluster_name}
						/>
					),
				cellClassName: 'text-right',

			},
			{
				field: "action",
				headerName: "Action",
				width: 100,
				headerAlign: 'center',

				renderCell: (params) =>
					isLoading ? (
						<Skeleton width={100 - 20} />
					) : (
						<ActionRender row={params.row} addProductToCart={addProductToCart} />
					),
				cellClassName: 'text-center',

			},
		];
	}, [isLoading, columnWidths]);

	return (
		<Box
			className="h-full"
			sx={{
				width: "100vw",
				display: "flex",
				flexDirection: "row",
				px: 2,
				gap: 1,
			}}
		>
			<Toaster />
			{!isMobile && !isTablet && (
				<div
					className="w-[250px] min-w-[250px] max-w-[250px] h-[100%]"
					style={{
						border: "1px solid rgb(229, 231, 235)",
						borderBottom: "none",
					}}
				>
					<div className="font-medium text-md w-full items-center justify-center pr-3 flex h-8 text-[#343434] ">
						Filters
					</div>
				</div>
			)}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					flexGrow: 1, // Ensure this container grows to fill space
				}}
				className="h-auto"
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						height: "100%", // Fill the parent container height
					}}
				>
					{/* DataGrid Container */}
					<Box
						sx={{
							flexGrow: 1, // Makes the DataGrid take up all available space
							minHeight: "70vh",
						}}
					>
						{isLoading ? (
							<Skeleton
								variant="rectangular"
								width="100%"
								height="100%" // Make the skeleton fill the space
								sx={{ borderRadius: 0 }}
							/>
						) : (
							<DataGrid
								rowHeight={26}
								sx={{
									fontFamily: "inherit",
									".MuiDataGrid-cell": {
										fontSize: 14,
										":hover": {
											color: "#2A294D",
										},
									},
									".MuiDataGrid-columnHeader": {
										height: "30px !important",
									},
									".MuiDataGrid-columnHeaderTitle": {
										color: "#3c3b6e !important",
									},
									".MuiDataGrid-row": { cursor: "pointer" },
									".MuiDataGrid-columnHeaderTitleContainer": {
										fontWeight: "semibold",
										fontSize: 15,
										color: "#343434",
									},
									borderRadius: 0,
								}}
								getRowId={(row) => row.catalog_number}
								rows={rows}
								columns={columns}
								pageSize={100}
								rowsPerPageOptions={[]}
								hideFooter={true}
								disableSelectionOnClick
							/>
						)}
					</Box>
					{/* Pagination fixed at the bottom */}
					<Stack
						spacing={4}
						alignItems="center"
						justifyContent="center"
						py={0.5}
						sx={{
							fontFamily: "Geist sans",
							borderLeft: "1px solid rgb(229, 231, 235)",
							borderRight: "1px solid rgb(229, 231, 235)",
							borderTop: "1px solid rgb(229, 231, 235)",
						}}
					>
						<Pagination
							count={pages}
							page={page}
							onChange={handleChange}
							sx={{
								"&.MuiPagination-root": {
									height: "30px !important",
								},
							}}
							renderItem={(item) => (
								<PaginationItem
									slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
									{...item}
								/>
							)}
						/>
					</Stack>
				</Box>
			</div>
		</Box>
	);
}
