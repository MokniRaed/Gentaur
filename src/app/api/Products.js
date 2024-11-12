const apiUrl = process.env.NEXT_PUBLIC_API_HOST;

export async function fetchBestsellersProducts() {
	const response = await fetch(`${apiUrl}/products/get/bestsellers`);
	if (!response.ok) throw new Error("Failed to fetch products");
	return response.json();
}

export async function fetchHighlightedProducts() {
	const response = await fetch(`${apiUrl}/products/get/Highlighted`);
	if (!response.ok) throw new Error("Failed to fetch products");
	return response.json();
}


export async function fetchProducts() {
	const response = await fetch(`${apiUrl}/products`);
	if (!response.ok) throw new Error("Failed to fetch products");
	return response.json();
}