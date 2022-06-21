import "./Categorys.css";
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { Layout, Breadcrumb, Pagination, Card } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import CardItem from "../Vounchers/Card";

const { Content, Footer, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

const Categorys = () => {
  //mount data
  const [data, setData] = useState([]);

  const { type } = useParams();

  let search = "combovouchers";

  if (type === "dichvulienket") {
    search = "DVLK";
  }
  if (type === "dichvunghiduong") {
    search = "DVND";
  }
  if (type === "combovouchers") {
    search = "CV";
  }
  if (type === "dichvuhangkhong") {
    search = "DVHK";
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5001/category?key=${search}&page=1`)
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        }
      })
      .catch((res) => console.log(res));
  }, [search]);

  // reanderItems
  const renderItems = () => {
    if (data) {
      return data.map((item, index) => {
        return <CardItem data={item} key={index} />;
      });
    }
  };

  return (
    <div className="categorys-container">
      <Layout>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{
              padding: "24px 0",
            }}
          >
            <Sider
              className="site-layout-background"
              width={250}
              style={{ padding: "0 20px" }}
            >
              <div className="site-layout-Link">
                <Link to="combovouchers">Combo Voucher</Link>
                <Link to="dichvuhangkhong">Dịch Vụ Hàng Không</Link>
                <Link to="dichvunghiduong">Dịch Vụ Nghĩ Dưỡng</Link>
                <Link to="dichvulienket">Dịch Vụ Liên Kết</Link>
              </div>
            </Sider>
            <Content
              style={{
                padding: "0 24px",
                minHeight: 280,
              }}
            >
              <div className="site-layout">{renderItems()}</div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "right" }}>
          <Pagination defaultCurrent={1} total={data.totalpape} />
        </Footer>
      </Layout>
    </div>
  );
};

export default Categorys;
