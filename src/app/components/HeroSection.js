import Image from "next/image";

const HeroSection = () => {
  return (
   <section className="bg-background corner-border-top-right corner-border-bottom-left dark:bg-primary container mx-auto mt-8 mb-8 pl-8 sm:pl-6 lg:pl-16 rounded-lg transform transition-all duration-300 hover:shadow-2xl relative z-10">
     <div className="relative">
       <div className="grid items-center grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 py-8 lg:py-16 ">
         {/* Text Content */}
         <div className="lg:col-span-5">
           <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary dark:text-white">
             Welcome to Gentaur: Innovating Life Sciences with Precision
           </h1>
           <p className="max-w-2xl mb-6 font-light text-foreground lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
             Explore our world-class solutions and services that empower researchers
             and healthcare professionals worldwide.
           </p>
           <div className="flex flex-wrap">
             <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 mb-2 sm:mb-0 text-base font-medium text-center text-primary rounded-lg bg-secondary hover:bg-secondaryDark focus:ring-4 focus:ring-secondary-300 dark:focus:ring-secondary-900 transition duration-300"
             >
               Discover Products
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
             <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mb-2 sm:mb-0 text-base font-medium text-center text-foreground border border-secondary rounded-lg hover:bg-secondaryDark focus:ring-4 focus:ring-secondary-100 dark:text-white dark:border-secondaryDark dark:hover:bg-secondaryDark dark:focus:ring-secondary-800 transition duration-300"
             >
               Speak to Sales
             </a>
           </div>
         </div>

         {/* Image Section */}
         <div className="absolute inset-y-0 right-0 hidden lg:block lg:w-7/12 h-full">
           <Image
            src={
              "https://cdn.gentaur.co.uk/wp-content/uploads/2024/08/Gentaur-SDS-Blue-Instant-Blue-1-1140x640.png"
            }
            alt={"Gentaur Products"}
            fill
            className="transition-opacity duration-300 object-center object-cover"
           />
           {/* Gradient overlay that changes on hover */}
           <div className="absolute inset-0 bg-gradient-to-r from-primary group-hover:from-primaryDark from-10% to-transparent transition duration-300"></div>
         </div>
       </div>
     </div>
   </section>
  );
};

export default HeroSection;