import { CDN_URL } from "../utils/constants";
import {Link} from "react-router-dom";


export default Card = (props) => {
    const { name, cuisines, costForTwoString, cloudinaryImageId, avgRating, id } =
      props?.resData;
    return (
      <div className="card">
        <Link to={id} className="link-style">
        <img
          className="card-img"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{costForTwoString}</h5>
        <h6>{avgRating} Starts</h6>
        </Link>
      </div>
    );
  };