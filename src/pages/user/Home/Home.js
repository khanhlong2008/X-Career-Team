import React, { useEffect, useState, Suspense } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Contacts from "../Contacts";

import { BrowserRouter as Router, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";

import Cart from "../../../Components/Cart/Cart.js";

import { clientLogin } from "../../../Redux/Reducer/Account";
import { Commonfc } from "../../../Ultis/Commonfunction";
import { addItem, removeItem } from "../../../Redux/Reducer/Cart";
import Grid from "@mui/material/Grid";
import Banner from "../../../Components/Banner/Banner";
import CardItem from "../Vounchers/Card/index";
import axios from "axios";
import "./Home.css";
import { Request_User } from "../../../API/api";
const Home = () => {
  //define using
  const dispatch = useDispatch();
  const state = useSelector((state) => (state = state));

  console.log(state);

  //local state

  const [topvoucher, Settopvoucher] = useState([]);

  const mobiles1 = useMediaQuery("(max-width:320px)");

  const mobiles2 = useMediaQuery("(max-width:600px)");

  const GridXs = {
    opt1: 6,
    opt2: 10,
    opt3: 12,
  };

  //Mount

  useEffect(() => {
    axios
      .get(Request_User.topvoucher)
      .then((res) => {
        if (res.status == 200) {
          Settopvoucher(res["data"]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //init value
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  //init state

  //Effect

  //mount

  return (
    <div>
      <section className="Slider">
        <Banner></Banner>
      </section>
      <section className="Main-menu"></section>
      <section className="Vouchers-box">
        <Grid container className=" Box-container flex jus-center  ">
          {topvoucher ? (
            topvoucher.map((main, indx) => {
              return (
                <Grid
                  item={true}
                  xs={12}
                  className=" flex   jus-center"
                  key={indx}
                >
                  <Suspense fallback={<Spin indicator={antIcon} />}>
                    <Grid item={true} xs={8}>
                      <h4 style={{ textAlign: "center" }}>{main["title"]}</h4>
                      <Grid className="" container>
                        {main["items"].map((item, indx) => {
                          return (
                            <Grid
                              xs={
                                mobiles1 == true || mobiles2 == true
                                  ? GridXs.opt2
                                  : GridXs.opt1
                              }
                              item={true}
                              key={indx}
                            >
                              {" "}
                              <CardItem
                                x
                                key={indx}
                                data={item}
                              ></CardItem>{" "}
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                  </Suspense>
                </Grid>
              );
            })
          ) : (
            <Spin indicator={antIcon} />
          )}
        </Grid>
      </section>
    </div>
  );
};

export default Home;
