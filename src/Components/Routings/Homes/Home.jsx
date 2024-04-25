import Banner from "./Banner";
import CraftItems from "./CraftItems";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h1 className="text3-xl">hlw world a</h1>
      <div>{<CraftItems></CraftItems>}</div>
    </div>
  );
};

export default Home;
