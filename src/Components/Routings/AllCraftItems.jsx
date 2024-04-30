// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";

import { Helmet } from "react-helmet-async";
import { NavLink, useLoaderData } from "react-router-dom";

const AllCraftItems = () => {
  const item = useLoaderData();
  console.log(item);
  // const { user } = useContext(AuthContext);
  // const [item, setItem] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/artCraft`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setItem(data);
  //     });
  // }, [user]);

  return (
    <div>
      <Helmet>
        <title>AllCraft_page</title>
      </Helmet>
      <div className=" overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Subcategory</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Customization</th>
              <th>Stock Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {item?.map((craft, index) => (
              <tr key={index}>
                <td>{`${index + 1}`}</td>
                <td>{craft.item_name}</td>
                <td>{craft.sub_Name}</td>
                <td>{craft.price}</td>
                <td>{craft.rating}</td>
                <td>{craft.customization}</td>
                <td>{craft.stockStatus}</td>
                {/* <td>{craft._id}</td> */}
                {
                  <NavLink to={`/details/${craft?._id}`}>
                    <button className="btn bg-purple-400 font-bold">
                      View Details
                    </button>
                  </NavLink>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCraftItems;
