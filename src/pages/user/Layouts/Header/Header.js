import React from "react";
import "./Header.css";
import SearchBar from "../../../../Components/SearchBar/SearchBar";
import TestData from "../../../../Components/SearchBar/TestData.json";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap"
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  if (window.performance) {
    if (performance.navigation.type == 1) {
      alert("This page is reloaded");
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container d-flex align-items-center mt-3">
      <a className="navbar-brand col-2 d-flex  align-items-center justify-content-center logo" href="#"> Logo</a>
      <form className="form-inline col-5 d-flex justify-content-center ">
        <input className="form-control  col-8 mr-1" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success col-3 d-flex justify-content-center align-items-center " type="submit"><SearchIcon /></button>
      </form>
      <div className="collapse navbar-collapse col-6 " id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <button className="nav-link Button" href="#">Trang chủ <span className="sr-only">(current)</span></button>
          </li>
          <li className="nav-item  ">
            <button className="nav-link Button" href="#">Về chúng tôi</button>
          </li>
          <li className="nav-item " >
            <button className="nav-link Button" href="#">Đăng nhập/Đăng ký</button>
          </li>

        </ul>

      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};

export default Header;
