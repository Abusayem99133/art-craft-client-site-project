import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CraftItems from "./CraftItems";

const Home = () => {
  const allCrafts = useLoaderData();
  console.log(allCrafts);
  return (
    <div>
      <Banner></Banner>
      <div className=" bg-purple-400 font-display p-5">
        <h1 className="text-center text-4xl font-bold mt-4 mb-8">Craft Item</h1>
        <p className="text-center">
          Buy your Craft Items from rfleshop with a low price and best
          satisfaction rate and free delivery. we always care about our customer
          satisfaction. Craft & Decor. <br /> Sorting; Price Range; Color;
          Material; More filters. 87 items; Products. ×. Sort By. Default. Name
          (A - Z). Name (Z - A). Price: low to high.
        </p>
      </div>

      <div className=" mt-6 gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {allCrafts?.slice(0 - 6)?.map((craft) => (
          <CraftItems key={craft._id} craft={craft}></CraftItems>
        ))}
      </div>
    </div>
  );
};

export default Home;
