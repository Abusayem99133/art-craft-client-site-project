import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const CraftDetails = () => {
  const data = useLoaderData();
  console.log("hlw world", data);

  const {
    image,
    item_name,
    sub_Name,
    shortDescription,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
  } = data;
  return (
    <div>
      <Helmet>
        <title>Property Details</title>
      </Helmet>
      <div className="hero min-h-screen bg-slate-300 p-8 items-center">
        <div className="lg:flex flex-row-reverse justify-between items-center bg-slate-200 p-6 rounded-md">
          <img src={image} className="lg:w-[50%] rounded-lg shadow-2xl" />
          <div>
            {/* <span className="bg-lime-400 ml-0  px-2 rounded-md">New</span> */}
            <h1 className="text-5xl mt-3  font-display font-bold">
              {item_name}
            </h1>
            <p className="font-display mt-2 text-2xl">
              <span className="font-display  font-bold">SubName:</span>{" "}
              {sub_Name}
            </p>
            <p className="font-display  text-2xl mt-2">
              <span className="font-bold font-display">Customization:</span>{" "}
              {customization}
            </p>
            <p className="font-display  text-2xl mt-2">
              <span className="font-bold font-display">Processing Time:</span>{" "}
              {processing_time}
            </p>
            <p className="font-display  text-2xl mt-2">
              <span className="font-bold font-display">StockStatus:</span>{" "}
              {stockStatus}
            </p>
            <p className="font-display text-2xl mt-2">
              <span className="font-display font-bold">Price:</span> {price}
            </p>
            <div className="flex items-center gap-2">
              <h2 className="font-display font-bold text-3xl">{rating}</h2>
            </div>

            <p className="mt-2  font-display">
              <span className="font-bold">Description:</span> {shortDescription}
            </p>
            <p className="mt-2">
              {" "}
              <span className="bg-red-300 p-2 rounded-xl items-center">
                {status}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
