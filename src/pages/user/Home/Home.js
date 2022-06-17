import React, { useEffect, useState, Suspense } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Contacts from "../Contacts";

import { BrowserRouter as Router, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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

  // const mobiles1 = useMediaQuery("(max-width:320px)");

  // const mobiles2 = useMediaQuery("(max-width:600px)");

  // const GridXs = {
  //   opt1: 6,
  //   opt2: 10,
  //   opt3: 12,
  // };

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
        {/* <Grid container className=" Box-container flex jus-center  " >
          {topvoucher ? (
            topvoucher.map((main, indx) => {
              return (
                <Grid
                  item={true}
                  className=" flex   jus-center"
                  key={indx}
                >
                  <Suspense fallback={<Spin indicator={antIcon} />}>
                    <Grid item={true} >
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
        
        
        
        
        
        */}


        {
          topvoucher ? (
            topvoucher.map((main, indx) => {
              return (
                <div>
                  <div className="productSection d-flex justify-content-center flex-column" key={indx}>
                    {console.log(main)}
                    <div className="productTitle">
                      {main["title"]}
                    </div>
                    <div className="products">
                      {main["items"].map((item, indx) => {
                        return (
                          <div className="card col-md-5 col-sm-12" >
                            <img className="card-img-top" src={item.img_url} alt="Card image cap" />
                            <div className="card-body">
                              <h5 className="card-title">{item.title}</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <CardItem

                                key={indx}
                                data={item}

                              ></CardItem>{" "}
                              {console.log(item)}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }
            )) : (
            <div className="spinner-border text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
      </section>
    </div>
  );
};

export default Home;
