import React from "react";
import { connect } from "react-redux";
import {} from "../../redux/cart/cart.actions";
import "./checkout.scss";

const Checkout = ({ cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
    </div>
  );
};

const MapsStateToProps = ({ cart }) => {
  return {
    cartItems: cart.cartItems,
  };
};

export default connect(MapsStateToProps)(Checkout);
