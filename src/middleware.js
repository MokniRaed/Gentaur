import { NextResponse } from "next/server";
import { getProduct } from "./app/api/requests";
import { old_menus } from "./app/mock/OldMenus";

export async function middleware(request) {
	// Get the URL pathname
	const pathname = request.nextUrl.pathname;

	// Check if the pathname starts with any of the old_menus
	if (old_menus.some((menu) => pathname.startsWith(menu))) {
		console.log("trrrrrrrrrrrr");
		// If the URL matches an old menu, allow the request to proceed
		return NextResponse.next();
	}

	// Check if the URL matches the pattern /products/{product-name}
	const productPathPattern = /^\/products\/([^/]+)$/;
	const match = pathname.match(productPathPattern);

	if (match) {
		const productName = match[1]; // Extract the product name from the URL

		// Extract the product ID from the product name (assuming the format includes the ID)
		const productId = Number(productName.split("-").slice(-1));

		if (isNaN(productId)) {
			return NextResponse.redirect(new URL("/products", request.nextUrl.origin));
		}

		try {
			// Fetch the product from the database
			const response = await getProduct(productId);

			if (response && response.cluster_name) {
				const clusterName = response.cluster_name; // Get the cluster_name field

				// Construct the new URL
				const newUrl = request.nextUrl.clone();
				newUrl.pathname = `/${clusterName}/${productName}`;

				// Redirect to the new URL
				return NextResponse.redirect(newUrl);
			} else {
				return NextResponse.redirect(new URL("/products", request.nextUrl.origin));
			}
		} catch (error) {
			// Redirect to /products on error
			return NextResponse.redirect(new URL("/products", request.nextUrl.origin));
		}
	}

	// Allow the request to continue if no match
	return NextResponse.next();
}

// Specify the routes the middleware should apply to
export const config = {
	matcher: "/products/:path*",
};
