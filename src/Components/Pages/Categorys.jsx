import PropTypes from "prop-types";
const Categorys = ({ category }) => {
  const { image, sub_name } = category;
  return (
    <div className=" flex justify-center p-2 md:ml-0 lg:ml-0 items-center">
      <div className="card w-full bg-base-100 p-0 shadow-xl image-full ">
        <figure>
          <img src={image} alt="Craft" />
        </figure>
        <div className="card-body  flex justify-center items-center max-auto">
          <h2 className="card-title text-4xl font-display ">{sub_name}</h2>
        </div>
      </div>
    </div>
  );
};
Categorys.propTypes = {
  category: PropTypes.node,
};
export default Categorys;
