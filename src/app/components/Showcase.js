import { ShowcaseCards } from "@mock/home";
import ShowcaseCard from "./ShowcaseCard";

const Showcase = () => {
  return (
    <div className="w-full h-auto bg-white flex flex-row items-center justify-center">
      <div className="px-2 py-2 h-full w-full lg:w-[85%] lg:pl-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {ShowcaseCards.map((card, i) => <ShowcaseCard key={i} image={card.image} brand={card.brand} title={card.title} url={card.url} />)}
      </div>
    </div>
  );
};

export default Showcase;
