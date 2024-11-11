import { CurrencyExchange, LocalShipping, Payment, SupervisorAccount } from "@mui/icons-material";

const Service = () => {
  return (
    <div className="py-12 px-6 sm:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Card 1: Fast Shipping */}
        <div className="bg-primaryDark border border-transparent shadow-lg rounded-lg overflow-hidden group hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-center p-8 bg-gradient-to-b from-primaryDark to-transparent group-hover:bg-primaryDark">
            <LocalShipping className="text-6xl text-secondary group-hover:text-secondaryDark transform group-hover:scale-110 transition-all duration-300" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-secondary transition-all duration-300">Fast Shipping via Courier</h3>
            <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-all duration-300">
              Get your packages delivered with reliable courier services, ensuring fast and safe delivery worldwide.
            </p>
          </div>
        </div>

        {/* Card 2: Secure Payment */}
        <div className="bg-primaryDark border border-transparent shadow-lg rounded-lg overflow-hidden group hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-center p-8 bg-gradient-to-b from-primaryDark to-transparent group-hover:bg-primaryDark">
            <Payment className="text-6xl text-secondary group-hover:text-secondaryDark transform group-hover:scale-110 transition-all duration-300" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-secondary transition-all duration-300">Secure Payment Methods</h3>
            <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-all duration-300">
              Secure and easy online payment options for fast transactions across multiple platforms.
            </p>
          </div>
        </div>

        {/* Card 3: Experienced Specialists */}
        <div className="bg-primaryDark border border-transparent shadow-lg rounded-lg overflow-hidden group hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-center p-8 bg-gradient-to-b from-primaryDark to-transparent group-hover:bg-primaryDark">
            <SupervisorAccount className="text-6xl text-secondary group-hover:text-secondaryDark transform group-hover:scale-110 transition-all duration-300" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-secondary transition-all duration-300">Experienced Specialists</h3>
            <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-all duration-300">
              Our team of specialists provides expert advice and guidance to meet all your needs.
            </p>
          </div>
        </div>

        {/* Card 4: Currency Payment */}
        <div className="bg-primaryDark border border-transparent shadow-lg rounded-lg overflow-hidden group hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-center p-8 bg-gradient-to-b from-primaryDark to-transparent group-hover:bg-primaryDark">
            <CurrencyExchange className="text-6xl text-secondary group-hover:text-secondaryDark transform group-hover:scale-110 transition-all duration-300" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-secondary transition-all duration-300">Convenient Currency Payments</h3>
            <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-all duration-300">
              Make payments in multiple currencies easily, offering flexibility for international transactions.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Service;
