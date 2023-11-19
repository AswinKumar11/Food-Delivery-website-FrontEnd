import { LOGO_URL } from "../utils/constants";

export default Header = () => {
    return (
      <div className="header-comp">
       <a href="/"><img
          className="logo"
          src= {LOGO_URL}
          alt="my image"
        /></a>
        <div className="nav-bar">
          <ul>Home</ul>
          <ul>About Us</ul>
          <ul>Contact</ul>
          <ul>Cart</ul>
        </div>
      </div>
    );
  };