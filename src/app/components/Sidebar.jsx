import React from "react";
import "./Sidebar.scss";

const Sidebar = ({ open, width, height, children }) => {
  return (
    <div
      className="side-bar"
      style={{
        width: !open ? 0 : width,
        height,
      }}
    >
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
};

export default Sidebar;