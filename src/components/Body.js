// import { Link } from "react-router-dom";
// import { RESTAURANT_DATA } from "../utils/mockData";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { useState } from "react";
import useResDetails from "../utils/useResDetails";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { resData, filteredResData } = useResDetails();
  const isOnline = useOnlineStatus(true);
  // if (resData.length === 0){
  //   return <Shimmer />;
  // }
  return (
    <div className="body">
      <div className="m-2 l-2">
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
      <div className="filter">
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
      </div>
      {typeof resData !== "undefined" && resData.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="m-2 p-2 flex flex-wrap">
          {filteredResData.map((resData) => (
            // <Link key={resData?.info?.id} to={resData?.info?.id}>
            <Card resData={resData.info} key={resData?.info?.id} />
            // </Link>
          ))}
        </div>
      )}
    </div>
  );
};
