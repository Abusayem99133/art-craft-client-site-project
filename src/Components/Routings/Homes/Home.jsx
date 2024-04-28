import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CraftItems from "./CraftItems";

const Home = () => {
  const allCrafts = useLoaderData();
  console.log(allCrafts);
  return (
    <div>
      <Banner></Banner>
      <h1 className="text3-xl">hlw world a</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allCrafts?.slice(0 - 9)?.map((craft) => (
          <CraftItems key={craft._id} craft={craft}></CraftItems>
        ))}
      </div>
    </div>
  );
};

export default Home;
