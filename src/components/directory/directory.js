import React, { useState } from "react";
import "./directory.scss";
import DirectoryMock from "./directory.mock";
import MenuItem from "../menu-item/menu-item";

const Directory = () => {
  const [sections, setSections] = useState(DirectoryMock);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => {
        return <MenuItem key={id} {...sectionProps} />;
      })}
    </div>
  );
};

export default Directory;
