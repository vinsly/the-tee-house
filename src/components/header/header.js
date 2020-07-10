import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartPopup from "../cart-popup/cart-popup";

const Header = ({ currentUser, cartHidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              console.log("clic");
              auth.signOut();
            }}
          >
            LOGOUT
          </div>
        ) : (
          <Link className="option" to="/login">
            LOGIN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartHidden ? null : <CartPopup />}
    </div>
  );
};

const mapToStateToProp = ({ user, cart }) => ({
  currentUser: user.currentUser,
  cartHidden: cart.hidden,
});

export default connect(mapToStateToProp)(Header);
