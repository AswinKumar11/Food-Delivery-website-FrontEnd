import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default Card = (props) => {
  const { name, cuisines, costForTwoString, cloudinaryImageId, avgRating, id } =
    props?.resData;
  return (
    <div className="m-3 p-3 w-[250px] border-solid border-gray-100 shadow-xl bg-gray-50 rounded-lg hover:bg-gray-300">
      <Link to={id} className="link-style">
        <div className="h-[200px] w-[200px] object-cover">
          <img
            className="items-center mb-2 w-[100%] h-[100%] rounded-lg"
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
        <h3 className="font-bold">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{costForTwoString}</h5>
        <h6>{avgRating} ⭐️</h6>
      </Link>
    </div>
  );
};
