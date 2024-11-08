// Check if the environment variable is available
const baseUrl =
	typeof window === "undefined" ? process.env.NEXT_PUBLIC_API_HOST : "/gentaur";

export const getProducts = async (page) => {
	let requestURL = `${baseUrl}/products?page=${page}`;

	try {
		const response = await fetch(requestURL);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

export const searchProducts = async (page, query) => {
	const requestURL = `${baseUrl}/search/search-with-filters?searchParam=${query}&page=${page}`;

	try {
		const response = await fetch(requestURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			// body: raw,
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

export const getProduct = async (id) => {
	try {
		const response = await fetch(`${baseUrl}/products/${id}`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};
export const getSimilars = async (id) => {
	try {
		const response = await fetch(`${baseUrl}/search/similars?searchParam=${id}`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};
export const searchWithFiltersFixedCluster = async (
	cluster_name,
	page,
	searchParam,
	requestBody
) => {
	const requestURL = `${baseUrl}/search/cluster/${cluster_name}/search-with-filters?page=${page}&searchParam=${searchParam}`;

	//   console.log(requestURL);

	const raw = JSON.stringify({
		data: [...requestBody],
	});

	try {
		const response = await fetch(requestURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: raw,
		});
		// return await response.json();
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};
export const getClusters = async () => {
	try {
		const response = await fetch(`${baseUrl}/products/get/clusters`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

export const OrderProducts = async (data) => {
	try {
		const response = await fetch(`${baseUrl}/orders/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...data,
			}),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

export const applyForContact = async (data) => {
	try {
		const response = await fetch(`${baseUrl}/contacts/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...data,
			}),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.log(error);
	}
};
