import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./preview-collection.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="preview-collection">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((i, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
