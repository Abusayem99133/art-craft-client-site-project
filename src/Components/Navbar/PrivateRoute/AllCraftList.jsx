import PropTypes from "prop-types";
const AllCraftList = ({ craft }) => {
  //   console.log(craft);
  const {
    image,
    item_name,
    sub_Name,
    shortDescription,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
    _id,
  } = craft;
  // console.log(item.item_name);
  return (
    <tr>
      <th>1</th>
      <td className="">{item_name}</td>
      <td></td>
      <td>Littel, Schaden and Vandervort</td>
      <td>Canada</td>
      <td>12/16/2020</td>
      <td>Blue</td>
    </tr>
  );
};
AllCraftList.propTypes = {
  craft: PropTypes.node,
};
export default AllCraftList;
