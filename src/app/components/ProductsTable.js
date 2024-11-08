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

// Custom Cell Renderer Component
const CellRenderer = memo(({ value, field, name, id, cluster_name }) => {
	const url = cluster_name + generateProductUrlForClusterPage({ name, id });
	switch (field) {
		case "sell_price":
			const amount = value || "Ask for a quotation";
			return (
				<Link className="hover:text-primaryDark" legacyBehavior href={url}>
					<span className="hover:text-primaryDark">
						{amount !== "Ask for a quotation"
							? `${Math.round(Number(amount)) + 1} USD`
							: amount}
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
				alignItems: "center",
				justifyContent: "flex-start",
			}}
		>
			<Chip
				size="sm"
				// variant="soft"
				onClick={() => addProductToCart(row)}
				slotProps={{
					root: {
						sx: {
							backgroundColor: "#b22234",
							":hover": { backgroundColor: "#8e1b29" },
						},
					},
					action: {
						sx: {
							backgroundColor: "#b22234",
							":hover": { backgroundColor: "#8e1b29" },
						},
					},
					label: { sx: { color: "#fff" } },
				}}
				sx={{
					display: "flex",
					justifyContent: "center",
					paddingRight: 1,
					paddingLeft: 1,
				}}
			>
				ADD
			</Chip>
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
		catWidth: 150,
		productNameWidth: 400,
		sizeWidth: 150,
		priceWidth: 150,
		actionWidth: 150,
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
				catWidth: width * 0.2,
				productNameWidth: width * 0.4,
				sizeWidth: width * 0.2,
				priceWidth: width * 0.2,
				actionWidth: 150, // Keep action width consistent
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
				width: columnWidths.catWidth,
				flex: 1,
				renderCell: (params) =>
					isLoading ? (
						<Skeleton width={columnWidths.catWidth - 20} />
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
				width: columnWidths.productNameWidth,
				flex: 2,
				renderCell: (params) =>
					isLoading ? (
						<Skeleton width={columnWidths.productNameWidth - 20} />
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
				flex: 1,
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
				flex: 1,
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
			},
			{
				field: "action",
				headerName: "Action",
				width: columnWidths.actionWidth,
				flex: 1,
				renderCell: (params) =>
					isLoading ? (
						<Skeleton width={columnWidths.actionWidth - 20} />
					) : (
						<ActionRender row={params.row} addProductToCart={addProductToCart} />
					),
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
					<div className="font-medium text-md w-full items-center justify-center flex h-14 text-[#343434]">
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
