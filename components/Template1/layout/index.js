import React from "react";
import Navigtation from "../Navigation";
import Footer from "../Footer";
const index = ({ children }) => {
  return (
    <>
      <Navigtation />
      {children}
      <Footer />
    </>
  );
};

export default index;
