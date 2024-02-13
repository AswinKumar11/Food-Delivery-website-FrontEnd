import { CDN_URL } from "../utils/constants";

const MenuCard = ({ cardData }) => {
  const { name, description, defaultPrice, imageId, price } = cardData;
  return (
    <div className="m-5 p-5 flex rounded-lg border-solid border-gray-50 bg-gray-50 hover:bg-gray-200 items-center">
      <div className="m-2 p-2">
        <img className = "w-48 rounded-lg" src={CDN_URL + imageId}></img>
      </div>
      <div className="items-center">
        <ul className="font-semibold">{name}</ul>
        <ul>{description}</ul>
        <ul>Rs - {defaultPrice / 100 || price/100}</ul>
      </div>
    </div>
  );
};

export default MenuCard;
