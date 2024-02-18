import { useEffect, useState } from "react";

const useResDetails = () => {
  const [resData, setresData] = useState([]);
  const [filteredResData, setFilteredResData] = useState([]);
  const [imageGridData, setImageGridData] = useState([]);
  const [imageGridHeader, setImageGridHeader] = useState([]);
  const [topRestaurantsGridHeader, setTopRestaurantsGridHeader] = useState([]);
  const [topRestaurants, setTopRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setresData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setTopRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setImageGridData(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    setImageGridHeader(json?.data?.cards[0]?.card?.card?.header?.title);
    setTopRestaurantsGridHeader(json?.data?.cards[1]?.card?.card?.header?.title);
    // console.log(json?.data);
  }
  return { resData, filteredResData, imageGridData, imageGridHeader, topRestaurantsGridHeader, topRestaurants };
};
export default useResDetails;
