import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Radio, Tabs } from "antd";
import { Request_Admin } from "../../../API/api";
import axios from "axios";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Image, Input } from "antd";
import { Select, InputNumber } from "antd";
import "./Addnew.css";
import { Commonfc } from "../../../Ultis/Commonfunction";

const { TabPane } = Tabs;

const Addproduct = (prop) => {
  const { Option } = Select;

  const [tab, setTab] = useState(0);
  const [data, setData] = useState(null); //for update

  ///// common state
  const [image, setImage] = useState();

  const [locations, setLocations] = useState([]); //location choose

  const [categorys, setCategorys] = useState(null); //filter tabs

  const [title, setTitle] = useState("");
  //////

  //solution state
  const [price, setPrice] = useState(0);

  const [monthoptions, setMonthoptions] = useState(0);

  let Monthy = [];

  //if prop not null is will fill to update
  useEffect(() => {
    if (prop.data != undefined) setData(data);

    axios.get(Request_Admin.getcategory).then((res) => {
      if (res.status == 200) {
        setCategorys(res.data);
      }
    });
  }, []);

  useEffect(() => {
    for (let i = 0; i < monthoptions; i++) {
      Monthy.push({ title: "", value: "" });
    }
  }, [monthoptions]);

  //function
  //Common onChange

  //for monthy voucher
  const onChangePackage = (indx, type, e) => {
    if (type == "title") Monthy[indx].title = e.target.value;

    if (type == "value") Monthy[indx].value = e.target.value;
  };

  const onClickAdd = () => {
    //Excute categorys

    const categoryssend = [];

    categoryssend.push(categorys[tab]._id);

    //Excute priceoptions
    let priceoptions = {};

    if (categorys[tab].key == "CV") priceoptions.price = price;
    if (categorys[tab].key == "HK") {
      priceoptions.package = [...Monthy];
    }

    const submititem = {
      key: `${categorys[tab].key}`,
      title: title,
      img_url: "haha",
      categorys: categoryssend,
      price_options: priceoptions,
    };

    console.log(location);

    console.log(Monthy);

    console.log(priceoptions);

    console.log(submititem);
  };

  const onChangePrice = (value) => {
    setPrice(value);
  };

  const onChangeMonthoptions = (value) => {
    setMonthoptions(value);
  };

  const Displayoptions = () => {
    if (tab == 0) {
      return (
        <Grid style={{ width: "100%" }}>
          <Grid>
            <h5>Price</h5>
            <InputNumber
              style={{ width: "100%" }}
              onChange={onChangePrice}
              defaultValue={0}
              addonAfter="VND"
            />
          </Grid>
          <Grid></Grid>
        </Grid>
      );
    }

    if (tab == 1) {
      {
      }
      return (
        <Grid style={{ width: "100%" }}>
          <h5>Monthly package</h5>

          <Select
            onChange={onChangeMonthoptions}
            style={{ width: "100%" }}
            placeholder="How many options"
          >
            {Array.from(Array(12).keys()).map((num) => {
              return <Option key={num} value={num + 1}></Option>;
            })}
          </Select>

          <Grid>
            {monthoptions > 0
              ? Array.from(Array(monthoptions).keys()).map((num, indx) => {
                  return (
                    <Grid
                      key={num}
                      style={{ width: "100%", marginTop: "15px" }}
                      className=" flex sp-bot"
                    >
                      <Grid
                        container
                        style={{ width: "100%" }}
                        className="flex"
                      >
                        <Grid className="flex jus-start" item={true} md={5}>
                          <input
                            defaultValue={1}
                            onChange={(e) => onChangePackage(indx, "title", e)}
                            placeholder="Monthy"
                          ></input>
                        </Grid>
                        <Grid className="flex jus-center" item={true} md={6}>
                          <input
                            defaultValue={0}
                            onChange={(e) => onChangePackage(indx, "value", e)}
                            placeholder="Value"
                          ></input>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })
              : null}
          </Grid>
        </Grid>
      );
    }
  };

  const onChangeTabs = (key) => {
    setTab(key);
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);

      console.log(e.target.files[0]);
    }
  };

  //render

  return (
    <Grid container className="Box-container">
      <Grid className="Add-voucher" item={true}>
        <Tabs defaultActiveKey="1" onChange={onChangeTabs}>
          {categorys != undefined
            ? categorys.map((item, key) => {
                if (item.key.includes("Lo") == false) {
                  return (
                    <TabPane
                      style={{
                        width: "100%",

                        borderLeft: "none",
                        borderBottom: "none",
                      }}
                      tab={item.title}
                      key={`${key}`}
                    >
                      <Grid
                        style={{ width: "100%", flexDirection: "column" }}
                        className="flex  Tab-content "
                        container
                        spacing={2}
                      >
                        <Grid
                          style={{ flexDirection: "column" }}
                          item={true}
                          md={10}
                          className="flex"
                        >
                          <Grid className="sp-bot">Demo image</Grid>
                          <Image
                            style={{ width: "100%" }}
                            className="sp-bot"
                            src={
                              image != undefined
                                ? URL.createObjectURL(image)
                                : "error"
                            }
                            height={400}
                          ></Image>
                          <Grid className="sp-bot">
                            {" "}
                            <input
                              onChange={(e) => imageChange(e)}
                              type="file"
                              accept="image/*"
                              id="contained-button-file"
                            />
                          </Grid>
                        </Grid>

                        <Grid item={true} md={10}>
                          <h5>Locations</h5>
                          <Select
                            mode="multiple"
                            placeholder="Inserted are removed"
                            value={locations}
                            onChange={setLocations}
                            style={{
                              width: "100%",
                            }}
                          >
                            {categorys.map((item, indx) => {
                              if (item.key.includes("Lo") == true)
                                return (
                                  <Select.Option
                                    key={item.key}
                                    value={item.key}
                                  >
                                    {item.title}
                                  </Select.Option>
                                );
                            })}
                          </Select>
                        </Grid>
                        <Grid item={true} md={10}>
                          <h5>Title</h5>
                          <Input
                            onChange={(e) => {
                              Commonfc.handlValue(e.target.value, setTitle);
                            }}
                          ></Input>
                        </Grid>

                        <Grid item={true} md={10} className="Price-options">
                          {" "}
                          {Displayoptions(tab)}
                        </Grid>
                        <Grid>
                          <button onClick={onClickAdd}>Add voucher</button>
                        </Grid>
                      </Grid>
                    </TabPane>
                  );
                }
              })
            : null}
        </Tabs>
      </Grid>
      <Grid className="Add-Category" item={true}></Grid>
    </Grid>
  );
};

export default Addproduct;
