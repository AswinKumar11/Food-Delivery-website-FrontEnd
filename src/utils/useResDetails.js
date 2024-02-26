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
    // fetchUpdate();
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
  async function fetchUpdate(){
    const payload = {
      lat: 12.9715987,
      lng: 77.5945627,
      nextOffset: "COVCELQ4KICQu62p+4SgMjCnEzgC",
      widgetOffset: {
        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_PB_Theme: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
        inlineFacetFilter: "",
        restaurantCountWidget: "",
      },
      filters: {},
      seoParams: {
        seoUrl: "https://www.swiggy.com/",
        pageType: "FOOD_HOMEPAGE",
        apiName: "FoodHomePage",
      },
      page_type: "DESKTOP_WEB_LISTING",
      _csrf: "3XGIIhtQEpu2-55vsqS7yq90vaDVhqIxk9ixGa-0",
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer':'https://www.swiggy.com/',
        'origin':'https://www.swiggy.com'
      },
      body: JSON.stringify(payload)
    }
    const data2 = await fetch("https://www.swiggy.com/dapi/restaurants/list/update",options);
    const json2 = await data2.json();
    console.log(json2);
  }
  return { resData, filteredResData, imageGridData, imageGridHeader, topRestaurantsGridHeader, topRestaurants };
};
export default useResDetails;
