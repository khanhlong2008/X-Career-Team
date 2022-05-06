import "./detail.css";
import { Row, Col, Image, Rate, Checkbox, Button } from "antd";

const Detail = () => {
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  return (
    <div className="detail-container">
      <Row>
        <Col span={12} style={{ overflow: "hidden" }}>
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
        </Col>
        <Col span={12}>
          <h2 style={{ fontSize: 30, marginTop: 20, fontFamily: "cursive" }}>
            Áo Nữ Cao Cấp
          </h2>
          <span>
            <Rate allowHalf defaultValue={2.5} />
            <p>9999 view</p>
          </span>
          <div className="prict_class">
            <span>
              Giá cũ
              <p>1.000.000</p>
            </span>
            <span>
              Giá Hiện Tại
              <h2>3.000.000</h2>
            </span>
            <p className="hang_chinh-gan">Hàng 100% Chính Hãng </p>
          </div>
          <div className="div_color">
            <p>Màu Sắt</p>
            <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
              <Row>
                <Col span={8}>
                  <Checkbox value="A">XANH</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="B">Đỏ</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">Tím</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">Vàng</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
          <div className="div_btn">
            <Button type="primary" block style={{ width: "50%", margin: 10 }}>
              Thêm Vào giỏ Hàng
            </Button>
            <Button type="red-7" block style={{ width: "50%", margin: 10 }}>
              Mua Ngay
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Detail;
