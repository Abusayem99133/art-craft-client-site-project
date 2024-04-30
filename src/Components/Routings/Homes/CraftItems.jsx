import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const CraftItems = ({ craft }) => {
  console.log(craft);
  const { image, item_name, price, stockStatus, _id } = craft;
  return (
    <div>
      <div className=" card mt-2 bg-base-100 shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name:{item_name}</h2>
          <p>
            <span className="font-display font-bold">Status:</span>{" "}
            {stockStatus}
          </p>
          <div className="card-actions">
            <p>
              <span className="font-display font-bold">Price:</span> {price}
            </p>
          </div>
          {
            <NavLink to={`/details/${_id}`}>
              <button className="btn bg-purple-500 font-bold">
                View Details
              </button>
            </NavLink>
          }
        </div>
      </div>
    </div>
  );
};
CraftItems.propTypes = {
  craft: PropTypes.node,
};
export default CraftItems;
