import React, { useState } from "react";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";
import useMenuList from "../utils/useMenuList";
import { CAROUSEL_URL } from "../utils/constants";

const Menu = () => {
  const { resId } = useParams();
  const [img, setImage] = useState(0);
  const { menuList, resDetails } = useMenuList(resId);
  // console.log(resDetails);
  if (Array.isArray(menuList) && menuList.length == 0) return <Shimmer />;
  return (
    <>
      <div className="w-8/12 m-auto p-2 flex flex-nowrap justify-between border-solid border-2 bg-gray-100">
        <div className="res-locality">
          <h4 className="font-extrabold">
            {resDetails?.card?.card?.info?.name}
          </h4>
          <p>{resDetails?.card?.card?.info?.cuisines.join(",")}</p>
          <p>{resDetails?.card?.card?.info?.costForTwoMessage +' | '+resDetails?.card?.card?.info?.sla?.slaString }</p>
          <p className="font-thin text-sm">{resDetails?.card?.card?.info?.areaName}</p>
          <p className="font-thin text-xs">{resDetails?.card?.card?.info?.feeDetails?.message}</p>
        </div>
        <div className="res-rating border-2 border-gray-200 justify-center rounded-lg">
          <p className="m-1 p-1 align-middle justify-center">{resDetails?.card?.card?.info?.avgRating.toString() + "⭐️"}</p>
          <hr className="mx-2"></hr>
          <p className="m-1 p-1">{resDetails?.card?.card?.info?.totalRatingsString}</p>
        </div>
      </div>
      <div className="w-8/12 m-auto ">
        {menuList.map((e, i) => {
          const menuData = e?.card?.card?.itemCards;
          const caurosel = e?.card?.card?.carousel;
          if (typeof caurosel !== "undefined" && caurosel !== "") {
            {
              console.log(img);
            }
            return (
              <div
                className="p-2 flex flex-nowrap w-[40%] m-auto items-center"
                key={i}
              >
                <span
                  className=""
                  onClick={() => {
                    if (img > 0) setImage(img - 1);
                  }}
                >
                  ◀
                </span>
                {/* {caurosel.map((e2) => {
                  return <img src={CAROUSEL_URL + e2?.creativeId} key={e2.bannerId} />;
                })} */}
                <img
                  src={CAROUSEL_URL + caurosel[img]?.creativeId}
                  key={caurosel[img].bannerId}
                />
                <span
                  className=""
                  onClick={() => {
                    if (img < caurosel.length - 1) setImage(img + 1);
                  }}
                >
                  ▶️
                </span>
              </div>
            );
          } else if (typeof menuData !== "undefined" && menuData !== "") {
            let title = e?.card?.card?.title;
            return (
              <Accordion
                key={i}
                content={menuData.map((e1) => {
                  e1.card.info.quantity = 0;
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
