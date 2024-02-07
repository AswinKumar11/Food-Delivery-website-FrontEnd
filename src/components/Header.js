import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default Header = () => {
    return (
      <div className="header-comp">
       <a href="/"><img
          className="logo"
          src= {LOGO_URL}
          alt="my image"
        /></a>
        <div className="nav-bar">
          <ul> <Link to="/" className="link-style">Home</Link></ul>
          <ul><Link to="/about" className="link-style">About Us</Link></ul>
          <ul>Contact</ul>
          <ul>Cart</ul>
        </div>
      </div>
    );
  };