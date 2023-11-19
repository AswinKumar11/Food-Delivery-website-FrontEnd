import { RESTAURANT_DATA } from "../utils/mockData";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

export const Body = () => {
  const [resData, setresData] = useState([]);
  const [filteredResData, setFilteredResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setresData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

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
      {resData.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredResData.map((resData) => (
            <Card resData={resData.info} key={resData?.info?.id} />
          ))}
        </div>
      )}
    </div>
  );
};
