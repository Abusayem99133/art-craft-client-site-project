const Categorys = ({ category }) => {
  const { image, sub_name, item_name } = category;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item_name}</h2>

          <div className="card-actions justify-center">
            <button className="btn ">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorys;
