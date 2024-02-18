import React, { useState, useEffect } from "react";
import { SPECIFIC_FOOD } from "../utils/constants";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Shimmer from "./Shimmer";

const SpecificFood = () => {
  const { id } = useParams();
  const [specificFoodData, setSpecificFoodData] = useState("");
  const [specificFoodHeader, setSpecificFoodHeader] = useState("");
  let header;

  async function fetchSpecificFoodData(id) {
    const data = await fetch(
      SPECIFIC_FOOD +
        id.toString() +
        "&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    setSpecificFoodHeader(json?.data?.cards[0].card.card);
    let resData = json?.data?.cards.filter((e) => {
      return (
        e.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
    });
    setSpecificFoodData(resData);
  }

  useEffect(() => {
    fetchSpecificFoodData(id);
  }, []);
  let resData = specificFoodData;
  return (
    <div className="w-10/12 m-auto p-2">
      <h1 className="font-bold text-4xl text-gray-700">
        {specificFoodHeader.title}
      </h1>
      <h3 className="text-xl text-gray-300 pt-2">
        {specificFoodHeader.description}
      </h3>
      <h1 className="font-bold text-2xl text-gray-700 mt-4">
        {specificFoodHeader.count + " to explore"}
      </h1>
      <div className="flex flex-wrap pt-2">
        {typeof specificFoodData !== "undefined" &&
        specificFoodData !== "" &&
        specificFoodData.length > 0 ? (
          specificFoodData.map((e) => {
            return (
              <Card resData={e.card.card.info} key={e.card.card.info.id} />
            );
          })
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default SpecificFood;
