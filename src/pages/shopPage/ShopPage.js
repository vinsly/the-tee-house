import React, { useState } from "react";
import ShopData from "./shopPage.mock";
import PreviewCollection from "../../components/preview-collection/preview-collection";

const ShopPage = () => {
  const [collections, setCollections] = useState(ShopData);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopPage;
