const Categorys = ({ category }) => {
  const { image, item_name } = category;
  return (
    <div className=" flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl image-full ">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body flex justify-center items-center max-auto">
          <h2 className="card-title text-4xl font-display ">{item_name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Categorys;
