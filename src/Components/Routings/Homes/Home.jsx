import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CraftItems from "./CraftItems";
import ReviewProject from "../../Pages/ReviewProject";
import Frequency from "../../Pages/Frequency";
import ArtCraftCategorys from "../../Pages/ArtCraftCategorys";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const allCrafts = useLoaderData();

  const [extraCraft, setExtraCraft] = useState([]);
  useEffect(() => {
    fetch("https://my-art-craft-server-project.vercel.app/extraCraft")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setExtraCraft(data);
      });
  }, []);
  console.log(extraCraft);
  // console.log(allCrafts);

  return (
    <div>
      <Helmet>
        <title>Home-Page</title>
      </Helmet>
      <Banner></Banner>
      <div className="  font-display p-2">
        <h1 className="text-center text-4xl font-bold mt-4 mb-8 bg-purple-50 shadow-xl p-2">
          {""}
          <span style={{ color: "purple", fontWeight: "semiBold" }}>
            <Typewriter
              words={["Craft Item"]}
              loop={100}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <p className="text-center">
          Buy your Craft Items from rfleshop with a low price and best
          satisfaction rate and free delivery. we always care about our customer
          satisfaction. Craft & Decor. Sorting; Price Range; Color; Material;
          More filters. 87 items; Products.
        </p>
      </div>

      <div className=" mt-6 gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {allCrafts?.slice(0 - 6)?.map((craft) => (
          <CraftItems key={craft._id} craft={craft}></CraftItems>
        ))}
      </div>
      <div>
        <ArtCraftCategorys></ArtCraftCategorys>
      </div>
      <div>
        <ReviewProject></ReviewProject>
      </div>
      <div>
        <Frequency></Frequency>
      </div>
    </div>
  );
};

export default Home;
