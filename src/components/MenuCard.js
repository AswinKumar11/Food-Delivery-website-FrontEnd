import { CDN_URL } from "../utils/constants";

const MenuCard = ({ cardData }) => {
  const { name, description, defaultPrice, imageId, price } = cardData;
  return (
    <div className="m-5 p-5 flex rounded-lg border-solid border-gray-50 bg-gray-50 hover:bg-gray-200 justify-between">
      <div className="items-center w-9/12">
        <ul className="font-semibold text-lg">{name}</ul>
        <ul className="font-extralight text-s mr-3">{description}</ul>
        <ul>Rs - {defaultPrice / 100 || price/100}</ul>
      </div>
      <div className="m-2 p-2 w-3/12 relative">
        <button className="mx-2 px-2 border-green-500 border-2 rounded-lg bg-gray-100 hover:bg-gray-300 absolute bottom-3">Add</button>
        <img className = "rounded-lg" src={CDN_URL + imageId}></img>
      </div>
    </div>
  );
};

export default MenuCard;
