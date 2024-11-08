export function generateProductUrl(productData) {
  // Format the product name for URL
  const formattedName = productData.name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove all special characters except spaces and dashes
    .replace(/\s+/g, "-") // Replace spaces with a single dash
    .replace(/-+/g, "-"); // Replace multiple dashes with a single dash

  // Generate the URL using product id and formatted name
  return `/products/${formattedName}-${productData.id}`;
}
export function generateProductUrlForClusterPage(productData) {
  // Format the product name for URL
  const formattedName = productData.name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove all special characters except spaces and dashes
    .replace(/\s+/g, "-") // Replace spaces with a single dash
    .replace(/-+/g, "-"); // Replace multiple dashes with a single dash

  // Generate the URL using product id and formatted name
  return `/${formattedName}-${productData.id}`;
}
