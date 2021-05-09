import React from "react";
import Header from "./../components/Header";
const MainLayout = (props) => {
  return (
    <div className="background">
      <Header />
      <div className="background">{props.children}</div>
    </div>
  );
};

export default MainLayout;
