import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button";
import "./cart-popup.scss";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartPopup = ({ cartItems, history }) => {
  return (
    <div className="cart-popup">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => history.push("/checkout")}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};
export default withRouter(connect(mapStateToProps)(CartPopup));
