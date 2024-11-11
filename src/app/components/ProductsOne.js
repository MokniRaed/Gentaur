import { productsOne } from "@mock/home";
import ProductCardHome from "./ProductCardHome";
import productImage from "@images/Gentaur-product1.png"
import Image from "next/image";
const ProductsOne = () => {
 return (
  <div className="flex justify-center w-full py-12 bg-gray-100 ">
   <div className="px-4 w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto justify-items-center">
    {productsOne.map((product, index) => (
     <div
      key={index}
      className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl hover:cursor-pointer"
     >
      <div className="relative overflow-hidden">
       <Image
       width={500}
       height={500}
        src={productImage}
        alt={product.name}
        className="w-full h-48 object-contain rounded-t-lg transition-transform duration-300 transform hover:scale-110"
       />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1 ">
       <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">Catalog #: {product.catalog_number}</p>
        <p className="text-sm text-gray-500 mb-2">Availability: {product.availability}</p>
       </div>


       <div className="flex justify-between items-center ">
        <a
         href={`mailto:${product.contact_email}`}
         className="text-secondary hover:text-secondaryDark text-sm font-semibold transition-all duration-300">
        Contact
        </a>
        <p className="text-2xl font-bold text-primary ">{product.price}</p>
       </div>

      </div>
     </div>
    ))}
   </div>
  </div>
 );
};

export default ProductsOne;
