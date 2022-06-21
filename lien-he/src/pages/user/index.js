import React from "react";

import Header from "./Layouts/Header/Header";

const User = ({ children }) => {
  //render

  return (
    <section className="Userpage">
      <Header></Header>

      <main>{children}</main>
    </section>
  );
};

export default User;
