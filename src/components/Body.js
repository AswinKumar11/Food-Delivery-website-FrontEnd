// import { Link } from "react-router-dom";
// import { RESTAURANT_DATA } from "../utils/mockData";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { useState } from "react";
import useResDetails from "../utils/useResDetails";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {resData, filteredResData} = useResDetails();
  const isOnline = useOnlineStatus(true);
  // if (resData.length === 0){
  //   return <Shimmer />;
  // }
  return (
    <div className="body">
      <div className="search-Bar">
        <input
        value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const filteredRes = resData.filter((e) =>
              e.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResData(filteredRes);
          }}
        >
          Search
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
      {typeof resData !== 'undefined' && resData.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
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
