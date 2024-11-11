import getConfig from 'next/config';

const { NEXT_PUBLIC_API_HOST } = getConfig().publicRuntimeConfig;

export async function fetchProducts() {
	const response = await fetch(`${NEXT_PUBLIC_API_HOST}/products`);
	if (!response.ok) throw new Error("Failed to fetch products");
	return response.json();
}
