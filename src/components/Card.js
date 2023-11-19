import { CDN_URL } from "../utils/constants";


export default Card = (props) => {
    const { name, cuisines, costForTwoString, cloudinaryImageId, avgRating } =
      props?.resData;
    return (
      <div className="card">
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
      </div>
    );
  };