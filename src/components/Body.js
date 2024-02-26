// import { Link } from "react-router-dom";
// import { RESTAURANT_DATA } from "../utils/mockData";
import Card, { promotedRes } from "./Card";
import Shimmer from "./Shimmer";
import { useState } from "react";
import useResDetails from "../utils/useResDetails";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Body = () => {
  // const [searchText, setSearchText] = useState("");
  const { resData, filteredResData, imageGridHeader, imageGridData, topRestaurants, topRestaurantsGridHeader } =
    useResDetails();
  const isOnline = useOnlineStatus();
  // console.log(isOnline);
  const PromotedRestaurant = promotedRes(Card);
  // if (resData.length === 0){
  //   return <Shimmer />;
  // }
  return (
    <div className="m-auto w-10/12">
      <div className="border-b-2 border-gray-300 mb-2 pb-2">
        <h1 className="m-2 p-2  text-2xl font-extrabold">{imageGridHeader}</h1>
        <div className=" bg-white overflow-auto mt-5 flex flex-nowrap">
          {imageGridData.map((e) => {
            const url = e.entityId;
            const pattern = /collection_id=(\d+)/;
            const match = url.match(pattern);
            const collectionId = match?.[1];
            return (
              <Link to={"/specificFood/" + collectionId} key={e.id}>
                <div className="m-2 p-2 w-36">
                  <img
                    className="m-2 p-2 w-36"
                    src={CDN_URL + e.imageId}
                    key={e.id}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="border-b-2 border-gray-300 mb-2 pb-2">
        <h1 className="m-2 p-2  text-2xl font-extrabold">{topRestaurantsGridHeader}</h1>
        <div className=" bg-white overflow-auto mt-5 flex flex-nowrap">
        {topRestaurants.map(
            (resData) =>
              typeof resData?.info?.aggregatedDiscountInfoV3 !== "undefined" &&
              typeof resData?.info?.aggregatedDiscountInfoV3?.header !==
                "undefined" ? (
                <PromotedRestaurant
                  resData={resData.info}
                  key={resData?.info?.id}
                />
              ) : (
                <Card resData={resData.info} key={resData?.info?.id} />
              )
          )}
        </div>
      </div>
      {/* <div className="">
        <input
          className="m-2 l-2 border-solid border-[2px] border-black rounded-lg"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="m-2 l-2 border-solid border-[1px] border-gray-400 rounded-lg bg-gray-300 hover:bg-gray-500"
          onClick={() => {
            const filteredRes = resData.filter((e) =>
              e.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResData(filteredRes);
          }}
        >
          {" "}
          Search{" "}
        </button>
      </div>
      <div className="">
        <button
          onClick={() => {
            const filteredRes = resData.filter(
              (ele) => Number(ele?.info?.avgRating) > 4
            );
            setresData(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div> */}
      {typeof resData !== "undefined" && resData.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="p-2 flex flex-wrap justify-between">
          {filteredResData.map(
            (resData) =>
              typeof resData?.info?.aggregatedDiscountInfoV3 !== "undefined" &&
              typeof resData?.info?.aggregatedDiscountInfoV3?.header !==
                "undefined" ? (
                <PromotedRestaurant
                  resData={resData.info}
                  key={resData?.info?.id}
                />
              ) : (
                <Card resData={resData.info} key={resData?.info?.id} />
              )
          )}
        </div>
      )}
    </div>
  );
};
