import { CDN_URL } from "../utils/constants";

const MenuCard = ({ cardData }) => {
  const { name, description, defaultPrice, imageId, price } = cardData;
  return (
    <div className="menu-card">
      <div>
        <img className = 'food-image'src={CDN_URL + imageId}></img>
      </div>
      <div>
        <ul>{name}</ul>
        <ul>{description}</ul>
        <ul>Rs - {defaultPrice / 100 || price/100}</ul>
      </div>
    </div>
  );
};

export default MenuCard;
