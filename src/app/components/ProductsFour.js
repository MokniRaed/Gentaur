import { productsFour } from "@mock/home";
import ProductCardHome from "./ProductCardHome";

const ProductsFour = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" w-full p-2 lg:p-0 lg:w-[85%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productsFour.map((product, index) => (
            <ProductCardHome
              key={index}
              image={product.image}
              price={product.price}
              availability={product.availability}
              catalogNumber={product.catalog_number}
              title={product.name}
              contactEmail={product.contact_email} // Using mailto for example, adjust as necessary
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsFour;
