import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import "./cart-popup.scss";
import CartItem from "../cart-item/cart-item";

const CartPopup = ({ cartItems }) => {
  return (
    <div className="cart-popup">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};
export default connect(mapStateToProps)(CartPopup);
