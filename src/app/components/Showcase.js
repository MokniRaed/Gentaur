import { ShowcaseCards } from "@mock/home";
import ShowcaseCard from "./ShowcaseCard";

const Showcase = () => {
 return (
  <div className="w-full h-auto bg-gray-100 py-12 flex justify-center">
   {/* Outer container to center everything */}
   <div className="px-4 w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto justify-items-center">
    {/* Only center if there are fewer than 4 cards */}
    <div className="flex justify-center col-span-full">
     {ShowcaseCards.length < 4 && (
      <div className="flex justify-center w-full">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
        {ShowcaseCards.map((card, i) => (
         <div
          key={i}
          className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
         >
          <div className="relative overflow-hidden">
           <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-110"
           />
          </div>
          <div className="p-6 flex flex-col justify-between flex-1">
           <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
           <p className="text-sm text-gray-500 mt-2">{card.brand}</p>
           <a
            href={card.url}
            className="mt-4 text-blue-500 hover:text-blue-700 text-sm font-semibold"
           >
            Learn More
           </a>
          </div>
         </div>
        ))}
       </div>
      </div>
     )}
    </div>

    {/* Standard grid layout when 4 or more cards */}
    {ShowcaseCards.length >= 4 && (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
      {ShowcaseCards.map((card, i) => (
       <div
        key={i}
        className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
       >
        <div className="relative overflow-hidden">
         <img
          src={card.image}
          alt={card.title}
          className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-110"
         />
        </div>
        <div className="p-6 flex flex-col justify-between flex-1">
         <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
         <p className="text-sm text-gray-500 mt-2">{card.brand}</p>
         <a
          href={card.url}
          className="mt-4 text-blue-500 hover:text-blue-700 text-sm font-semibold"
         >
          Learn More
         </a>
        </div>
       </div>
      ))}
     </div>
    )}
   </div>
  </div>
 );
};

export default Showcase;