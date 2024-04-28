import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import ArtListed from "./ArtListed";

const ArtList = () => {
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
        <ArtListed key={craft._id} craft={craft}></ArtListed>
      ))}
    </div>
  );
};

export default ArtList;
