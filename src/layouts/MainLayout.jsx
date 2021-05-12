import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/footer/Footer";

const MainLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="background">{props.children}</div>
      <Footer />
    </div>
    
  );
};

export default MainLayout;
