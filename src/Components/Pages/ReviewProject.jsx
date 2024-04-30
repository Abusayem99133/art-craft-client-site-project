import { FaStar } from "react-icons/fa";
import img1 from "../../assets/image/images.jpeg";
import img2 from "../../assets/image/images (1).jpeg";
import img3 from "../../assets/image/FjU2lkcWYAgNG6d.jpg";
import { Typewriter } from "react-simple-typewriter";
const ReviewProject = () => {
  return (
    <div>
      <div className="mt-16 text-center shadow-xl bg-purple-50 p-2">
        <h1 className="text-4xl font-bold font-display">
          {""}
          <span style={{ color: "purple", fontWeight: "semiBold" }}>
            <Typewriter
              words={["Customer Review"]}
              loop={100}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <p className="font-display">
          As well as being key sales metrics, reviews are also an integral
          source of customer feedback,
        </p>
      </div>
      <div className="mt-12 flex items-center justify-center p-5 space-x-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-full " />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className=" font-display">jabed Rahman</h3>
            <span className="font-display">Client</span>
            <p>
              capable of keeping businesses up to date with the quality of the
              customer experience they provide
            </p>
            <span className="flex ">
              <FaStar className="mr-2 text-[#edb70a]" />
              <FaStar className="mr-2 text-[#edb70a]" />
              <FaStar className="mr-2 text-[#edb70a]" />
              <FaStar className="mr-2 text-[#edb70a]" />
              <FaStar className="mr-2 text-[#edb70a]" />
            </span>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className=" font-display">Monica Wagase </h3>
            <span className="font-display">Client</span>
            <p>
              capable of keeping businesses up to date with the quality of the
              customer experience they provide
            </p>
            <span className="flex ">
              <FaStar className="mr-2 text-[#edb70a]" />
              <FaStar className="mr-2 text-[#edb70a]" />
              <FaStar className="mr-2 text-[#edb70a]" />
              <FaStar className="mr-2 text-[#edb70a]" />
              <FaStar className="mr-2 text-[#edb70a]" />
            </span>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className=" font-display">Joo Root</h3>
            <span className="font-display">Client</span>
            <p>
              capable of keeping businesses up to date with the quality of the
              customer experience they provide
            </p>
            <span className="flex ">
              <FaStar className="mr-2 text-[#edb70a]" />
              <FaStar className="mr-2 text-[#edb70a]" />
              <FaStar className="mr-2 text-[#edb70a]" />
              <FaStar className="mr-2 text-[#edb70a]" />
              <FaStar className="mr-2 text-[#edb70a]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewProject;
