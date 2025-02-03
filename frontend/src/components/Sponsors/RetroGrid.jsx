import React from "react";
import "./RetroGrid.css";

function RetroGridBackground({ children }) {
  return (
    <div className="carnival-grid-wrapper">
      <div className="carnival-grid-overlay"></div>
      {children && <div className="content">{children}</div>}
    </div>
  );
}

export default RetroGridBackground;
