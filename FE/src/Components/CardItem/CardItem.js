import "./CardItem.css";
import "antd/dist/antd.css";

import { Button, Space, Card, Image, Col, Row } from "antd";
const CardItem = () => {
  return (
    <div>
      <h1 className="card-item"> COMBO TRỌN GÓI, TỐI ĐA LỢI ÍCH </h1>

      <div className="site-card-wrapper">
        <Row>
          <Col span={12}>
            <Image src="https://assets.digilink.vn/uploads/2021/11/HANG-SAY-CV-1-scaled.jpg" />
            <div className="card-price-container">
              <Space
                direction="vertical"
                size="large"
                style={{ display: "flex" }}
              >
                <Card
                  title="Vé tháng hăng say công việc"
                  size="small"
                  bordered={false}
                >
                  <p>● Thẻ bay 0đ các chặng nội địa của Bamboo</p>
                  <p>● Thẻ định danh dành cho 1 người</p>
                  <p>● Bay các ngày trong tuần</p>
                </Card>
              </Space>
              <div className="card-price">
                <h2>1,650,000₫ - 4,500,000₫</h2>
                <Button type="primary" className="btn-color">
                  Mua ngay
                </Button>
              </div>
            </div>
          </Col>

          <Col span={12}>
            <Image src="https://assets.digilink.vn/uploads/2021/11/HANG-SAY-CV-1-scaled.jpg" />
            <div className="card-price-container">
              <Space
                direction="vertical"
                size="large"
                style={{ display: "flex" }}
              >
                <Card
                  title="Vé tháng hăng say công việc"
                  size="small"
                  bordered={false}
                >
                  <p>● Thẻ bay 0đ các chặng nội địa của Bamboo</p>
                  <p>● Thẻ định danh dành cho 1 người</p>
                  <p>● Bay các ngày trong tuần</p>
                </Card>
              </Space>
              <div className="card-price">
                <h2>1,650,000₫ - 4,500,000₫</h2>
                <Button type="primary" className="btn-color">
                  Mua ngay
                </Button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <Image src="https://assets.digilink.vn/uploads/2021/11/HANG-SAY-CV-1-scaled.jpg" />
            <div className="card-price-container">
              <Space
                direction="vertical"
                size="large"
                style={{ display: "flex" }}
              >
                <Card
                  title="Vé tháng hăng say công việc"
                  size="small"
                  bordered={false}
                >
                  <p>● Thẻ bay 0đ các chặng nội địa của Bamboo</p>
                  <p>● Thẻ định danh dành cho 1 người</p>
                  <p>● Bay các ngày trong tuần</p>
                </Card>
              </Space>
              <div className="card-price">
                <h2>1,650,000₫ - 4,500,000₫</h2>
                <Button type="primary" className="btn-color">
                  Mua ngay
                </Button>
              </div>
            </div>
          </Col>

          <Col span={12}>
            <Image src="https://assets.digilink.vn/uploads/2021/11/HANG-SAY-CV-1-scaled.jpg" />
            <div className="card-price-container">
              <Space
                direction="vertical"
                size="large"
                style={{ display: "flex" }}
              >
                <Card
                  title="Vé tháng hăng say công việc"
                  size="small"
                  bordered={false}
                >
                  <p>● Thẻ bay 0đ các chặng nội địa của Bamboo</p>
                  <p>● Thẻ định danh dành cho 1 người</p>
                  <p>● Bay các ngày trong tuần</p>
                </Card>
              </Space>
              <div className="card-price">
                <h2>1,650,000₫ - 4,500,000₫</h2>
                <Button type="primary" className="btn-color">
                  Mua ngay
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CardItem;
