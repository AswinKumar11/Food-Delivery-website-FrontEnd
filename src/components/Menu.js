import React from "react";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";
import useMenuList from "../utils/useMenuList";
import { CAROUSEL_URL } from "../utils/constants";

const Menu = () => {
  const { resId } = useParams();
  const { menuList, resDetails } = useMenuList(resId);
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
            return (
              <div className="caurosel" key={i}>
                {caurosel.map((e2) => {
                  return <img src={CAROUSEL_URL + e2?.creativeId} key={e2.bannerId} />;
                })}
              </div>
            );
          } 
          else if (typeof menuData !== "undefined" && menuData !== "") {
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
