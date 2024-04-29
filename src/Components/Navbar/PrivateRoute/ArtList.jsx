import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

import { IoLogoUsd } from "react-icons/io5";
import { Link } from "react-router-dom";
const ArtList = () => {
  const { user } = useContext(AuthContext);
  // const [control, setControl] = useState(false);
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/artCraft/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setItems(data);
  //     });
  // }, [user, control]);
  // const handleDelete = (id) => {
  // fetch(`http://localhost:5000/craftDelete/${id}`, {
  //   method: "DELETE",
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (data.deleteCount > 0) {
  //       setControl(!control);
  //     }
  //   });
  const [myCraft, setMyCraft] = useState([]);
  const [deleteItem, setDeleteItem] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/artCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCraft(data);
      });
  }, [user, deleteItem]);
  console.log(myCraft);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/craftDelete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setDeleteItem(true);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className=" mt-6 gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {myCraft?.map((item, index) => (
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
              <Link to={`/update/${item._id}`}>
                <button className="btn bg-purple-700 hover:bg-purple-600">
                  Update
                </button>
              </Link>
              <button
                onClick={() => handleDelete(item._id)}
                className="btn bg-purple-700 hover:bg-purple-600"
              >
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
