import React from "react";
import "./Header.css";
import SearchBar from "../../../../Components/SearchBar/SearchBar";
import TestData from "../../../../Components/SearchBar/TestData.json";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
const Header = () => {
  // if (window.performance) {
  //   if (performance.navigation.type == 1) {
  //     alert("This page is reloaded");
  //   }
  // }
  return (
    <div className="container">
      <div className="Logo"></div>
      <div className="SearchBar">
        <SearchBar // SearchBar nhận 2 tham số truyền vào
          placeholder="Bạn cần tìm gì?" // 1.placeholder : là tiêu đề của phần inputField của thanh searchbar
          data={TestData} // 2.data : Nhận một JSON dạng object hoặc mảng .... => gọi API như bình thường
        />
      </div>

      <div className="Cart">
        <ShoppingCartIcon color="action" sx={{ fontSize: "2rem" }} />
      </div>
    </div>
  );
};

export default Header;
