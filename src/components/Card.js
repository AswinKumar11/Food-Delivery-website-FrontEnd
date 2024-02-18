import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default Card = (props) => {
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating, id, sla } =
    props?.resData;
    // console.log(props?.resData);
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
        <h6>{avgRating} ⭐️ . {sla?.slaString}</h6>
        <h4 className="truncate ...">{cuisines.join(", ")}</h4>
        <h5>{costForTwo}</h5>
      </Link>
    </div>
  );
};

export const promotedRes = (Card)=>{
  return (props) => {
    const { header, subHeader} =
    props?.resData?.aggregatedDiscountInfoV3;
    return(
      <div className="relative inline-block">
        <label className="absolute m-3 p-3 text-white bg-black rounded-lg font-thin text-xs">{header+' '+subHeader}</label>
        <Card {...props}/>
      </div>
    );
  }
}
