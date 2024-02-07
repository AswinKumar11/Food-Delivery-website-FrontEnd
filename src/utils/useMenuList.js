import { MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const useMenuList = (resId) => {
  const [menuList, setMenuList] = useState([]);
  const [resDetails, setResDetails] = useState([]);
  useEffect(() => {
    menu();
  }, []);
  const menu = async () => {
    const data = await fetch(MENU_URL + resId);
    let json = await data.json();
    setMenuList(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    setResDetails(json.data.cards[0]);
  };

  return {menuList, resDetails};
};

export default useMenuList;
