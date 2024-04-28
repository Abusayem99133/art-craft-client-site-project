import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AllCraftList from "../Navbar/PrivateRoute/AllCraftList";

const AllCraftItems = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/artCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);
  return (
    <div>
      <h1>hlw world</h1>
      <thead className="table table-xs">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>company</th>
          <th>location</th>
          <th>Last Login</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      {item?.map((craft) => (
        <AllCraftList key={craft._id} craft={craft}></AllCraftList>
      ))}
    </div>
  );
};

export default AllCraftItems;
