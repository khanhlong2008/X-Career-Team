
import React from "react";
import Footer from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";

const User = ({ children }) => {
  //render

  return (
    <section className="Userpage">
      <Header></Header>

      <main>{children}</main>
      <Footer></Footer>
    </section>
  );
};

export default User;
