import "./detail.css";
import { Row, Col, Image, Rate, Checkbox, Button } from "antd";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Request_User } from "../../../../API/api";
import { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Commonfc } from "../../../../Ultis/Commonfunction";
import { addItem } from "../../../../Redux/Reducer/Cart";
const { Option } = Select;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Detail = () => {
  let { slug } = useParams();

  //init value and state

  const [data, setData] = useState({});

  const [price, setPrice] = useState(0);

  const [color, setColor] = useState(0);

  const [room, setRoom] = useState(0);

  const [duration, setDuration] = useState(0);

  const dispatch = useDispatch();

  const cart = useSelector((state) => {console.log(state["cart"])});
  console.log(cart);
  useEffect(() => {
    //Send By Query ex ?slug=string  ,

    axios
      .get(`${Request_User.voucher}/${slug}`)
      .then((res) => {
        setData(res.data);

        // console.log(res.data);

        if (res.data["key"] == "CV") {
          setPrice(res.data["price_options"]["price"]);
        }
        if (res.data["key"] == "HK") {
          setPrice(res.data["price_options"]["package"][0]["1"]);
        }

        if (res.data["key"] == "ND" || res.data["key"] == "G") {
          let value = res.data["price_options"]["duration"][0].value;

          setDuration(value);
          setPrice(value);
        }
        if (res.data["key"] == "LK") {
          let getRoom = res.data["price_options"]?.room;
          let getCredit = res.data["price_options"]?.lineofcredit;

          if (getRoom != undefined) {
            setDuration(getRoom[0].value);
            setPrice(getRoom[0].value);
          }
          if (getCredit != undefined) {
            setDuration(getCredit[0].value);
            setPrice(getCredit[0].value);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChangepackage = (value) => {
    setPrice(value);
  };

  const onChangecolor = (value) => {
    setColor(value);

    setPrice(totalND(duration, value, room));
  };

  const onChangeduration = (value) => {
    setDuration(value);

    if (data["key"] == "ND") setPrice(totalND(value, color, room));
    else setPrice(value);
  };

  const onChangeRoom = (value) => {
    setRoom(value);
    setPrice(totalND(duration, color, value));
  };

  const totalND = (duration, color, room) => {
    let percentColor = color != 0 ? (color * duration) / 100 : 0;
    let percentRoom = room != 0 ? (room * duration) / 100 : 0;

    let result =
      parseInt(duration) + parseInt(percentColor) + parseInt(percentRoom);

    return result;
  };

  const addCart = () => 
  {
    let temp = {
      id : data["_id"],
      title: data["title"],
      img: data["img_url"],
      price: parseInt(price)
    };
    console.log(data);
    dispatch(addItem(temp))

  }

  return (
    <div className="detail-container">
      <Suspense fallback={<Spin indicator={antIcon} />}>
        <Grid container spacing={3} className="flex jus-center">
          <Grid item={true} xs={4} className="bdflex jus-center">
            <Image style={{ width: "100%" }} src={data["img_url"]} />
          </Grid>

          <Grid item={true} xs={7} className="voucher-info ">
            <h2 style={{ fontSize: 30, marginTop: 20 }}>{data["title"]}</h2>
            <Grid>
              {data["categorys"] != undefined
                ? data["categorys"].map((data, indx) => {
                    return (
                      <a key={indx} style={{ color: "blue" }}>
                        {data.title}
                      </a>
                    );
                  })
                : null}
            </Grid>

            <Grid style={{ margin: "20px 20px 20px 0" }}>
              {
                //Key G
                data["key"] == "G" ? (
                  <Grid container spacing={2} className="flex options">
                    <Grid item={true} xs={2}>
                      Thời hạn
                    </Grid>

                    <Grid item={true} xs={6}>
                      <Select
                        defaultValue={
                          data["price_options"]["duration"][0].value
                        }
                        style={{ width: "100%" }}
                        placeholder="Choose duration"
                        optionFilterProp="children"
                        onChange={onChangeduration}
                      >
                        {data["price_options"]["duration"].map(
                          (duration, indx) => {
                            return (
                              <Option key={indx} value={duration.value}>
                                {duration.title} Tháng
                              </Option>
                            );
                          },
                        )}
                      </Select>
                    </Grid>
                  </Grid>
                ) : null
              }

              {
                //Key HK

                data["key"] == "HK" ? (
                  <Grid container spacing={2} className="flex options">
                    <Grid item={true} xs={2}>
                      {" "}
                      Gói tháng
                    </Grid>

                    <Grid item={true} xs={6}>
                      <Select
                        defaultValue={
                          Commonfc.valuesofObj(
                            data["price_options"]["package"][0],
                          )[0]
                        }
                        style={{ width: "100%" }}
                        placeholder="Choose package"
                        optionFilterProp="children"
                        onChange={onChangepackage}
                      >
                        {data["price_options"]["package"].map(
                          (packages, indx) => {
                            return (
                              <Option
                                key={indx}
                                value={Commonfc.valuesofObj(packages)}
                              >
                                {Commonfc.keysofObj(packages)} Tháng
                              </Option>
                            );
                          },
                        )}
                      </Select>
                    </Grid>
                  </Grid>
                ) : null
              }
              {
                //Key ND

                data["key"] == "ND" ? (
                  <Grid container spacing={2} className=" flex  options">
                    <Grid item={true} className="flex" xs={10}>
                      <Grid item={true} xs={2}>
                        Màu sắc
                      </Grid>

                      <Grid item={true} xs={6}>
                        <Select
                          defaultValue={data["price_options"]["color"][0].value}
                          style={{ width: "100%" }}
                          placeholder="Choose color"
                          optionFilterProp="children"
                          onChange={onChangecolor}
                        >
                          {data["price_options"]["color"].map((color, indx) => {
                            return (
                              <Option key={indx} value={color.value}>
                                {color.title}
                              </Option>
                            );
                          })}
                        </Select>
                      </Grid>
                    </Grid>

                    <Grid item={true} className="flex" xs={10}>
                      <Grid item={true} xs={2}>
                        Thời hạn
                      </Grid>

                      <Grid item={true} xs={6}>
                        <Select
                          defaultValue={
                            data["price_options"]["duration"][0].value
                          }
                          style={{ width: "100%" }}
                          placeholder="Choose duration"
                          optionFilterProp="children"
                          onChange={onChangeduration}
                        >
                          {data["price_options"]["duration"].map(
                            (duration, indx) => {
                              return (
                                <Option key={indx} value={duration.value}>
                                  {duration.title} Tháng
                                </Option>
                              );
                            },
                          )}
                        </Select>
                      </Grid>
                    </Grid>

                    <Grid item={true} className="flex" xs={10}>
                      <Grid item={true} xs={2}>
                        Số phòng
                      </Grid>

                      <Grid item={true} xs={6}>
                        <Select
                          defaultValue={data["price_options"]["room"][0].value}
                          style={{ width: "100%" }}
                          placeholder="Choose duration"
                          optionFilterProp="children"
                          onChange={onChangeRoom}
                        >
                          {data["price_options"]["room"].map((room, indx) => {
                            return (
                              <Option key={indx} value={room.value}>
                                {room.title}
                              </Option>
                            );
                          })}
                        </Select>
                      </Grid>
                    </Grid>
                  </Grid>
                ) : null
              }
              {
                //Key LK

                data["key"] == "LK" ? (
                  <Grid container spacing={2} className=" flex  options">
                    {data["price_options"]?.lineofcredit != undefined ? (
                      <Grid item={true} className="flex" xs={10}>
                        <Grid item={true} xs={2}>
                          Hạn mức
                        </Grid>

                        <Grid item={true} xs={6}>
                          <Select
                            defaultValue={
                              data["price_options"]["lineofcredit"][0].value
                            }
                            style={{ width: "100%" }}
                            placeholder="Choose Credit"
                            optionFilterProp="children"
                            onChange={onChangeduration}
                          >
                            {data["price_options"]["lineofcredit"].map(
                              (lineofcredit, indx) => {
                                return (
                                  <Option key={indx} value={lineofcredit.value}>
                                    {lineofcredit.title}
                                  </Option>
                                );
                              },
                            )}
                          </Select>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid item={true} className="flex" xs={10}>
                        <Grid item={true} xs={2}>
                          Số phòng
                        </Grid>

                        <Grid item={true} xs={6}>
                          <Select
                            defaultValue={
                              data["price_options"]["room"][0].value
                            }
                            style={{ width: "100%" }}
                            placeholder="Choose Room"
                            optionFilterProp="children"
                            onChange={onChangeduration}
                          >
                            {data["price_options"]["room"].map(
                              (lineofcredit, indx) => {
                                return (
                                  <Option key={indx} value={lineofcredit.value}>
                                    {lineofcredit.title}
                                  </Option>
                                );
                              },
                            )}

                            {}
                          </Select>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                ) : null
              }
              {}
            </Grid>

            <Grid container spacing={2} className="flex col total">
              <Grid item={true} xs={12}>
                Total
              </Grid>
              <Grid item={true} xs={12}>
                {" "}
                {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
              </Grid>{" "}
            </Grid>

            <span>
              {/* <Rate allowHalf defaultValue={2.5} />
              <p>9999 view</p> */}
            </span>

            <div className="div_btn">
              <Button onClick = {() => {addCart()}} type="primary" block style={{ width: "50%", margin: 10 }}>
                Thêm Vào giỏ Hàng
              </Button>
              <Button type="red-7" block style={{ width: "50%", margin: 10 }}>
                Mua Ngay
              </Button>
            </div>
          </Grid>
        </Grid>
      </Suspense>
    </div>
  );
};

export default Detail;
