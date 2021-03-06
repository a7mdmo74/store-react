import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { ButtonContainer } from "../global/Button";
import { NavWrapper } from "./Navbar";
const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-5">
      {/*
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ms-5">
          <Link to="/" className="nav-link">
            products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ms-auto">
        <ButtonContainer>
          <span className="me-2">
            <i className="fas fa-cart-plus" />
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

export default Navbar;
