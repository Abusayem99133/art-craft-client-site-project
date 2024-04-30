import Swal from "sweetalert2";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const UpdatePage = () => {
  const { id } = useParams();
  console.log(id);
  const [artCrafts, setArtCrafts] = useState({});

  useEffect(() => {
    fetch(`https://my-art-craft-server-project.vercel.app/singleCraft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArtCrafts(data);
        console.log(data);
      });
  }, [id]);
  const handleUpdateCraft = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const item_name = form.get("item_name");
    const image = form.get("image");
    const sub_Name = form.get("sub_Name");
    const shortDescription = form.get("shortDescription");
    const price = form.get("price");
    const customization = form.get("customization");
    const rating = form.get("rating");
    const processing_time = form.get("processing_time");

    const stockStatus = form.get("stockStatus");
    const addCraft = {
      image,
      item_name,
      sub_Name,
      shortDescription,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
    };
    console.log(addCraft);
    fetch(`https://my-art-craft-server-project.vercel.app/updateCraft/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Art & Craft Updated Successfully",
            icon: "success",
            confirmButtonText: "Wow",
          });
          console.log(data);
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Update-Page</title>
      </Helmet>
      <div
        className=" pt-10
    hero min-h-screen  "
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/sDHkdbyR/pexels-pixabay-159644.jpg)",
        }}
      >
        <div className="shadow-lg p-5 border ">
          <div className="mt-5 mb-8">
            <p className="text-center text-3xl font-semibold">
              <span className="mr-3 text-purple-400">
                <i className="bx bxs-alarm-add"></i>
              </span>
              <span className="dark:text-white">
                <span className="text-purple-400"></span>
                Update Craft
              </span>
            </p>
          </div>
          {/* form */}
          <form onSubmit={handleUpdateCraft}>
            <div className="flex gap-8 ">
              <div className="flex-1">
                <label className="block mb-2 dark:text-white">Item Name</label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-purple-400"
                  type="text"
                  placeholder=" item Name"
                  id="name"
                  name="item_name"
                  defaultValue={artCrafts.item_name}
                />

                <label className="block mt-4 mb-2 dark:text-white">
                  subcategory_Name
                </label>
                <select
                  name="sub_Name"
                  id="subcategory_Name"
                  className="w-full p-2 border rounded-md focus:outline-purple-400"
                  type="text"
                  placeholder="Select Brand"
                  defaultValue={artCrafts.sub_Name}
                >
                  <option value="landscape" selected>
                    Landscape Painting
                  </option>
                  <option value="portrait" selected>
                    Portrait Drawing
                  </option>
                  <option value="water" selected>
                    Watercolor Painting
                  </option>
                  <option value="oil" selected>
                    Oil Painting
                  </option>
                  <option value="charcoal" selected>
                    Charcoal Sketching
                  </option>
                  <option value="cartoon" selected>
                    Cartoon Drawing
                  </option>
                </select>

                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="price"
                >
                  Description
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-purple-400"
                  type="text"
                  placeholder="short shortDescription"
                  id="shortDescription"
                  name="shortDescription"
                  defaultValue={artCrafts.shortDescription}
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-purple-400"
                  type="text"
                  placeholder="Enter Price"
                  id="Price"
                  name="price"
                  defaultValue={artCrafts.price}
                />
              </div>
              {/* Right side */}
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="image">
                  Image
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-purple-400"
                  type="text"
                  placeholder="Enter Image URL"
                  id="image"
                  name="image"
                  defaultValue={artCrafts.image}
                />
                <label
                  className="block mb-2 mt-4 dark:text-white"
                  htmlFor="type"
                >
                  Customization
                </label>

                <select
                  name="customization"
                  className="w-full p-2 border rounded-md focus:outline-purple-400"
                  type="text"
                  defaultValue={artCrafts.customization}
                >
                  <option value="" selected>
                    Yes
                  </option>
                  <option value="" selected>
                    No
                  </option>
                </select>
                <label className="block mt-4 mb-2 text-white" htmlFor="rating">
                  Rating
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-purple-400"
                  type="number"
                  placeholder="Rating"
                  id="rating"
                  name="rating"
                  defaultValue={artCrafts.rating}
                />
                <label className="block mt-4 mb-2 text-white" htmlFor="rating">
                  Processing_time
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-purple-400"
                  type="text"
                  placeholder="processing time"
                  id="time"
                  name="processing_time"
                  defaultValue={artCrafts.processing_time}
                />

                <label className="block mt-4 mb-2 text-white">
                  stockStatus
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-purple-400"
                  type="text"
                  placeholder="stockStatus"
                  id="status"
                  name="stockStatus"
                  defaultValue={artCrafts.stockStatus}
                />
              </div>
            </div>

            <input
              className="px-4 w-full py-2 mt-4 rounded hover:bg-purple-800  bg-purple-500 duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
