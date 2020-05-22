import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-popup.scss";

const CartPopup = () => {
  return (
    <div className="cart-popup">
      <div className="cart-items">
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

export default CartPopup;
