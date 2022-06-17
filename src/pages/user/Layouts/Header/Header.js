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
    <nav className="navbar navbar-expand-lg navbar-light bg-light containerr d-flex  align-items-center flex-row">
      <a className="navbar-brand col-1 d-flex align-items-center logo justify-content-start" href="#"> Logo</a>
      <form className="form-inline col-7 pr-0 pl-0 mr-0 d-flex justify-content-center align-items-center justify-content-center">
        <input className="form-control col-7 mr-1 searchInput" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success  d-flex justify-content-center align-items-center  Btton" type="submit"><SearchIcon /></button>
      </form>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse align-self-end" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active ">
            <a className="nav-link " href="#">Trang chủ <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item  ">
            <a className="nav-link " href="#">Về chúng tôi</a>
          </li>
          <li className="nav-item " >
            <a className="nav-link " href="#">Đăng nhập/Đăng ký</a>
          </li>
        </ul>

      </div>
      
    </nav>
  );
};

export default Header;
