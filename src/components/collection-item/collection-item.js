import React from "react";
import { connect } from "react-redux";
import "./collection-item.scss";
import CustomButton from "../custom-button/custom-button";
import { addToCart } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProp = (dispatch) => ({
  addItem: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProp)(CollectionItem);
