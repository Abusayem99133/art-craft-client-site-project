import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddCraft = () => {
  const { user } = useContext(AuthContext);

  const handleAddCraft = (event) => {
    console.log(user);
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const item_name = form.get("item_name");
    const image = form.get("image");
    const userEmail = user.email;
    const sub_Name = form.get("sub_Name");
    const shortDescription = form.get("shortDescription");
    const price = form.get("price");
    const customization = form.get("customization");
    const rating = form.get("rating");
    const processing_time = form.get("processing_time");
    const userName = form.get("userName");
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
      userEmail,
      userName,
    };
    console.log(addCraft);
    fetch("http://localhost:5000/craft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="">
      <div
        className=" pt-10
      hero min-h-screen  rounded-[44px]"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/sDHkdbyR/pexels-pixabay-159644.jpg)",
        }}
      >
        <div className="shadow-lg p-5 border ">
          {/* Heading */}
          {/* dark:bg-[#1a2641d5] */}
          <div className="mt-5 mb-8">
            <p className="text-center text-3xl font-semibold">
              <span className="mr-3 text-[#FF497C]">
                <i className="bx bxs-alarm-add"></i>
              </span>
              <span className="dark:text-white">
                <span className="text-[#FF497C]">
                  {/* {update ? "Update " : "Add "} */}
                </span>
                Add Craft
              </span>
            </p>
          </div>
          {/* form */}
          <form onSubmit={handleAddCraft}>
            <div className="flex gap-8 ">
              <div className="flex-1">
                <label className="block mb-2 dark:text-white">Item Name</label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder=" item Name"
                  id="name"
                  name="item_name"
                />

                <label className="block mt-4 mb-2 dark:text-white">
                  subcategory_Name
                </label>
                <select
                  name="sub_Name"
                  id="subcategory_Name"
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Select Brand"
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
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="short shortDescription"
                  id="shortDescription"
                  name="shortDescription"
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Enter Price"
                  id="Price"
                  name="price"
                />
                <label className="block mt-4 mb-2 text-white">Email</label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-purple-200"
                  maxLength={5}
                  max={5}
                  min={0}
                  type="text"
                  placeholder="user email"
                  id="email"
                  name="userEmail"
                />
              </div>
              {/* Right side */}
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="image">
                  Image
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Enter Image URL"
                  id="image"
                  name="image"
                />
                <label
                  className="block mb-2 mt-4 dark:text-white"
                  htmlFor="type"
                >
                  Customization
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Enter type"
                  id="type"
                  name="customization"
                />

                <label className="block mt-4 mb-2 text-white" htmlFor="rating">
                  Rating
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-purple-200"
                  maxLength={5}
                  max={5}
                  min={0}
                  type="number"
                  placeholder="Rating"
                  id="rating"
                  name="rating"
                />
                <label className="block mt-4 mb-2 text-white" htmlFor="rating">
                  Processing_time
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-purple-200"
                  maxLength={5}
                  max={5}
                  min={0}
                  type="number"
                  placeholder="processing time"
                  id="time"
                  name="processing_time"
                />

                <label className="block mt-4 mb-2 text-white">User Name</label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-purple-200"
                  maxLength={5}
                  max={5}
                  min={0}
                  type="text"
                  placeholder="User Name"
                  id="user"
                  name="userName"
                />
                <label className="block mt-4 mb-2 text-white">
                  stockStatus
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-purple-200"
                  maxLength={5}
                  max={5}
                  min={0}
                  type="number"
                  placeholder="stockStatus"
                  id="status"
                  name="stockStatus"
                />
              </div>
            </div>

            <input
              className="px-4 w-full py-2 mt-4 rounded hover:bg-purple-800  bg-purple-500 duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Add Craft"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraft;
