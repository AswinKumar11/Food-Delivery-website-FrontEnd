import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartQuantity = useSelector((store) => store.cart.cartQuantity);
  const dispatch = useDispatch();
  const addToCart = (cartItems) => {
    dispatch(addItem(cartItems));
  };
  const removeCart = (cartItems) => {
    dispatch(removeItem(cartItems));
  };
  const [totalCost, setTotalCost] = useState(0);
  const [itemTotal, setItemTotal] = useState(0);
  const [gstCost, setGstCost] = useState(0);
  useEffect(() => {
    let total = 0;
    cartItems.map((e) => (total += e.cost));
    setItemTotal(total);
    setGstCost((total * 18) / 100);
    setTotalCost((itemTotal + gstCost).toFixed(2));
  }, [cartItems, itemTotal, gstCost]);

    // console.log(cartItems);
  if(cartQuantity == 0){
    return(
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="font-extrabold text-4xl">Your Cart Is Empty 😔</h1>
      </div>
    ) 
  }
  return (
    <div className="m-2 mr-4 w-5/12 p-2 float-end bg-white shadow-lg">
      {cartItems.map((cardData) => {
        return (
          <div
            className="m-2 p-2 relative flex flex-nowrap items-center"
            key={cardData.id}
          >
            <p className="w-6/12 font-thin">{cardData.name}</p>
            <div className="mx-2 px-2 flex flex-nowrap items-center bg-white border-2 border-green-200 bottom-3 rounded-lg">
              <button
                className=" pr-1"
                onClick={() => {
                  removeCart(cardData);
                }}
              >
                -
              </button>
              <span className="px-1 cursor-pointer">{cardData.quantity}</span>
              <button
                className="pl-1"
                onClick={() => {
                  addToCart({cardData});
                }}
              >
                +
              </button>
            </div>
            <p className="w-4/12 pl-8">Rs - {cardData.cost}</p>
          </div>
        );
      })}
      <div>
        <h2 className="m-2 p-2 font-bold">Bill Details</h2>
        <div className="m-2 p-2 flex flex-nowrap justify-between">
          <h3 className="font-extralight">Item Total</h3>
          <h3 className="w-4/12">Rs - {itemTotal}</h3>
        </div>
        <div className="m-2 p-2 flex flex-nowrap justify-between">
          <h3 className="font-extralight">GST and Restaurant Charges</h3>
          <h3 className="w-4/12">Rs - {gstCost}</h3>
        </div>
        <div className="m-2 p-2 flex flex-nowrap justify-between border-t-2 border-black">
          <h3 className="font-bold">To Pay</h3>
          <h3 className="w-4/12">Rs - {totalCost}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
