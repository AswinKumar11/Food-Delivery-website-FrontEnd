import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";
import { CAROUSEL_URL } from "../utils/constants";

const Menu = (props) => {
  const [menuList, setMenuList] = useState([]);
  const [resDetails, setResDetails] = useState([]);
  useEffect(() => {
    menu();
  }, []);
  const { resId } = useParams();
  const menu = async () => {
    const data = await fetch(MENU_URL + resId);
    let json = await data.json();
    setMenuList(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    setResDetails(json.data.cards[0]);
    //check here
    console.log(json);
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
  };
  if (Array.isArray(menuList) && menuList.length == 0) return <Shimmer />;
  return (
    <>
      <div className="res-details">
        <div className="res-locality">
          <h4>{resDetails?.card?.card?.info?.name}</h4>
          <p>{resDetails?.card?.card?.info?.cuisines.join(",")}</p>
          <p>{resDetails?.card?.card?.info?.areaName}</p>
        </div>
        <div className="res-rating">
          <p>{resDetails?.card?.card?.info?.avgRating.toString()}</p>
          <hr></hr>
          <p>{resDetails?.card?.card?.info?.totalRatingsString}</p>
        </div>
      </div>
      <div className="menu-page">
        {menuList.map((e, i) => {
          const menuData = e?.card?.card?.itemCards;
          const caurosel = e?.card?.card?.carousel;
          if (typeof caurosel !== "undefined" && caurosel !== "") {
            console.log("aswin", caurosel);
            return <div className="caurosel">{
              caurosel.map((e2,i)=>{
                return <img src={CAROUSEL_URL+e2?.creativeId} key={i}/>
              })
              }
            </div>;
            // return (caurosel.map((e2)=>{
            //   return (
            //     <div className="caurosel">
            //       <img src={CAROUSEL_URL+e2?.creativeId} />
            //     </div>
            //   );
            // }));
          } else if (typeof menuData !== "undefined" && menuData !== "") {
            let title = e?.card?.card?.title;
            return (
              <Accordion
                key={i}
                content={menuData.map((e1) => {
                  const cardData = e1.card.info;
                  return <MenuCard key={cardData.id} cardData={cardData} />;
                })}
                title={title}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default Menu;
