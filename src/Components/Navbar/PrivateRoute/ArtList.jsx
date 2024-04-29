import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const ArtList = () => {
  const { user } = useContext(AuthContext);

  const handleAddCraft = (event) => {
    console.log(user);
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const item_name = form.get("item_name");
    const image = form.get("image");

    const price = form.get("price");
    const customization = form.get("customization");
    const rating = form.get("rating");

    const stockStatus = form.get("stockStatus");
    const addCraft = {
      image,
      item_name,

      price,
      rating,
      customization,

      stockStatus,
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

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  // const handleUpdate = (_id) => {
  //   console.log("hlw world");
  // };
  return (
    <div>
      <div className="">
        <div>
          <h1>hlw world</h1>
        </div>
        <div
          className=" pt-10
      hero min-h-screen  "
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
                  Update Art & Craft
                </span>
              </p>
            </div>
            {/* form */}
            <form onSubmit={handleAddCraft}>
              <div className="flex gap-8 ">
                <div className="flex-1">
                  <label className="block mb-2 dark:text-white">
                    Item Name
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                    type="text"
                    placeholder=" item Name"
                    id="name"
                    name="item_name"
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
                  <label className="block mt-4 mb-2 text-white">
                    stockStatus
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-purple-200"
                    type="text"
                    placeholder="stockStatus"
                    id="status"
                    name="stockStatus"
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

                  <select
                    name="customization"
                    className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                    type="text"
                  >
                    <option value="" selected>
                      Yes
                    </option>
                    <option value="" selected>
                      No
                    </option>
                  </select>
                  <label
                    className="block mt-4 mb-2 text-white"
                    htmlFor="rating"
                  >
                    Rating
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-purple-200"
                    type="number"
                    placeholder="Rating"
                    id="rating"
                    name="rating"
                  />
                </div>
              </div>

              <div className="flex justify-around">
                <Link
                // to={`/update/:${}`}
                >
                  <button
                    // onClick={() => handleUpdate(_id)}
                    className="px-4 w-full py-2 mt-4 rounded hover:bg-purple-800 bg-purple-500 duration-200 text-white cursor-pointer font-semibold"
                  >
                    Update
                  </button>
                </Link>
                <Link>
                  <button className="px-4 w-full py-2 mt-4 rounded hover:bg-purple-800 bg-purple-500 duration-200 text-white cursor-pointer font-semibold">
                    Delete
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtList;
