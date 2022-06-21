import React, { useState } from "react";

const Admin = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  //render

  return (
    <div className="Adminpage">
      <main>{children}</main>
    </div>
  );
};

export default Admin;
