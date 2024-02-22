import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useState } from "react";

const MenuCard = ({ cardData }) => {
  const { name, description, defaultPrice, imageId, price } = cardData;
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const addToCart = (cardData) => {
    dispatch(addItem(cardData));
  };
  const removeCart = (cardData) => {
    dispatch(removeItem(cardData));
  };
  return (
    <div className="m-5 p-5 flex rounded-lg border-solid border-gray-50 bg-gray-50 hover:bg-gray-200 justify-between">
      <div className="items-center w-9/12">
        <ul className="font-semibold text-lg">{name}</ul>
        <ul className="font-extralight text-s mr-3">{description}</ul>
        <ul>Rs - {defaultPrice / 100 || price / 100}</ul>
      </div>
      <div className="m-2 p-2 w-3/12 relative">
        {count == 0 ? (
          <button
            className="mx-3 px-3 border-green-500 border-2 rounded-lg bg-gray-100 hover:bg-gray-300 absolute bottom-3"
            onClick={() => {
              setCount(count + 1);
              addToCart(cardData);
            }}
          >
            Add
          </button>
        ) : (
          <div className="mx-2 px-2 flex flex-nowrap items-center absolute bg-white border-2 border-green-200 bottom-3 rounded-lg">
            <button
              className=" pr-1"
              onClick={() => {
                removeCart(cardData);
                setCount(count - 1);
              }}
            >
              -
            </button>
            <span className="px-1 cursor-pointer">{count}</span>
            <button
              className="pl-1"
              onClick={() => {
                setCount((prevCount)=> prevCount+1);
                addToCart(cardData);
              }}
            >
              +
            </button>
          </div>
        )}
        <img className="rounded-lg" src={CDN_URL + imageId}></img>
      </div>
    </div>
  );
};

export default MenuCard;
