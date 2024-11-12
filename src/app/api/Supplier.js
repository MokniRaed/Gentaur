const apiUrl = process.env.NEXT_PUBLIC_API_HOST;

export async function fetchProducts() {
	const response = await fetch(`${apiUrl}/products`);
	if (!response.ok) throw new Error("Failed to fetch products");
	return response.json();
}