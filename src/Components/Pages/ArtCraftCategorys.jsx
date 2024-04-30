import { useEffect, useState } from "react";
import Categorys from "./Categorys";
import { Typewriter } from "react-simple-typewriter";

const ArtCraftCategorys = () => {
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
  return (
    <div>
      <h1 className="text-center text-4xl mt-16 bg-purple-100 p-4 font-bold font-display">
        <span style={{ color: "purple", fontWeight: "semiBold" }}>
          <Typewriter
            words={["Craft Category"]}
            loop={100}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </h1>
      <div className=" mt-6 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
        {extraCraft?.map((category) => (
          <Categorys key={category._id} category={category}></Categorys>
        ))}
      </div>
    </div>
  );
};

export default ArtCraftCategorys;
