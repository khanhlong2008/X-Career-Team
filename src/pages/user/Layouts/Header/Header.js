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
    <nav className="navbar navbar-expand-lg navbar-light bg-light container d-flex mb-3  align-items-center flex-row">
      <a className="navbar-brand col-1 d-flex  align-items-center align-self-start logo" href="#"> Logo</a>
      <form className="form-inline col-7 d-flex justify-content-center align-items-center align-self-center">
        <input className="form-control  col-9 mr-1" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0 col-2 d-flex justify-content-center align-items-center " type="submit"><SearchIcon /></button>
      </form>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse align-self-end ml-3" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active ">
            <a className="nav-link ml-4" href="#">Trang chủ <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item  ">
            <a className="nav-link ml-4" href="#">Về chúng tôi</a>
          </li>
          <li className="nav-item " >
            <a className="nav-link ml-4" href="#">Đăng nhập/Đăng ký</a>
          </li>
        </ul>

      </div>
      
    </nav>
  );
};

export default Header;
