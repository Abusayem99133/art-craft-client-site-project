import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

import { IoLogoUsd } from "react-icons/io5";
const ArtList = () => {
  const { user } = useContext(AuthContext);

  const [sortItem, setSortItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/artCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSortItem(data);
      });
  }, [user]);

  return (
    <div className=" mt-6 gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {sortItem?.map((item, index) => (
        <div key={index} className="card mt-2  bg-slate-100 shadow-2xl">
          <figure className="px-10 pt-10">
            <img src={item?.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item?.item_name}</h2>
            <p className="flex items-center mr-2">
              <span className="font-bold mr-2 font-display">Price:</span>{" "}
              <IoLogoUsd />
              {item?.price}
            </p>

            <p>Rating: {item?.rating}</p>
            <p> Customization: {item?.customization}</p>

            <p>Status: {item?.stockStatus}</p>

            <div className="card-actions justify-between">
              <button className="btn bg-purple-700 hover:bg-purple-600">
                Update
              </button>
              <button className="btn bg-purple-700 hover:bg-purple-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtList;
