import { productsTwo } from "@mock/home";
import ProductCardHome from "./ProductCardHome";
import productImage from "@images/Gentaur.webp"

const ProductsTwo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" w-full p-2 lg:p-0 lg:w-[85%] justify-center flex flex-col items-center gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productsTwo.map((product, index) => (
            <ProductCardHome
              key={index}
              image={productImage}
              price={product.price}
              availability={product.availability}
              catalogNumber={product.catalog_number}
              title={product.name}
              contactEmail={product.contact_email} // Using mailto for example, adjust as necessary
            />
          ))}
          
        </div>
        <div>
        <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-secondary hover:bg-secondaryDark focus:ring-4 focus:ring-secondary-300 dark:focus:ring-secondary-900 transition duration-300"
            >
              Explore more
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
        </div>
        
      </div>
    </div>
  );
};

export default ProductsTwo;
