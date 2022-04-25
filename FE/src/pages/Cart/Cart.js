import { Table, InputNumber, Button, Space } from "antd";
import { useState } from "react";
import "./Cart.css";
const Cart = (_, index) => {
  const [keyboard, setKeyboard] = useState(true);
  if (index === 100) {
    return { colSpan: 0 };
  }

  const columns = [
    {
      title: "ẢNH",
      dataIndex: "img",
    },
    {
      title: "Tên Sản Phẩm",
      dataIndex: "title",
      onCell: Cart,
    },
    {
      title: "Số Lượng & Đơn Giá",
      colSpan: 2,
      dataIndex: "quantity",
    },
    {
      title: "Phone",
      colSpan: 0,
      dataIndex: "price_quantity",
      onCell: Cart,
    },
    {
      title: "Tổng Tiền",
      dataIndex: "price",
      onCell: Cart,
    },
    {
      dataIndex: "xoa",
      onCell: Cart,
    },
  ];

  const onChange = (value) => {
    console.log("changed", value);
  };

  const data = [
    {
      key: "1",
      img: (
        <img
          src="https://cf.shopee.vn/file/7430bfe0dd08f0f7d045b562d1b87abc"
          alt=""
          className="img_cart"
        />
      ),
      title: "Áo Nữ sex si",
      quantity: (
        <Space>
          <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
        </Space>
      ),
      price_quantity: "5.000.000",
      price: "5.000.000",
      xoa: (
        <Button type="primary" danger>
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Giỏ Hàng</h1>
      <Table columns={columns} dataSource={data} bordered />
      <div className="mua_hang">
        <Button type="primary">Mua Sản Phẩm</Button>
      </div>
    </div>
  );
};
export default Cart;
