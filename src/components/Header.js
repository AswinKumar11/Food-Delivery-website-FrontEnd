import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default Header = () => {

  const cartItems = useSelector((store)=>store.cart.items);
    return (
      <div className="flex justify-between shadow-lg">
       <a href="/"><img
          className="w-36"
          src= {LOGO_URL}
          alt="my image"
        /></a>
        <div className="flex items-center text-lg">
          <ul className="m-2 p-2"> <Link to="/" className="link-style">Home</Link></ul>
          <ul className="m-2 p-2"><Link to="/about" className="link-style">About Us</Link></ul>
          <ul className="m-2 p-2">Contact</ul>
          <ul className="m-2 p-2"><Link to="/cart">Cart - {cartItems.length}</Link></ul>
        </div>
      </div>
    );
  };