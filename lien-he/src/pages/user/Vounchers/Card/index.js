// trang vouonchers

import "./CardItem.css";
import "antd/dist/antd.css";
import { Button, Space, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
const CardItem = (props) => {
  const { data } = props;
  return (
    <div>
      <Link to={`vouchers/${data["slug"]}`}>
        <div className="site-card-wrapper">
          <Row style={{ maxHeight: "450px" }}>
            <img className="card-img" src={data["img_url"]} alt="/" />
            <div className="card-price-container">
              <Space
                direction="vertical"
                size="large"
                style={{ display: "flex" }}
              >
                <Card
                  title={`${data["title"]}`}
                  size="small"
                  bordered={false}
                ></Card>
              </Space>
              <div className="card-price">
                <Button type="primary" className="btn-color">
                  Xem thông tin...
                </Button>
              </div>
            </div>
          </Row>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
