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
              <div className="card-price">
                <Button type="primary" className="btn-color">
                  Xem thông tin...
                </Button>
              </div>
            </div>
      </Link>
    </div>
  );
};

export default CardItem;
