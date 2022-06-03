import React, { useState } from "react";
import "./CheckOut.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../../../Components/SearchBar/SearchBar";
import Header from "../Layouts/Header/Header";
import testData from "./testData.json";
const CheckOut = (productInfo) => {
  const [total, setTotal] = useState();
  let temp = 0;
  testData.forEach((data) => {
    temp += Number(data.price);
  });

  return (
    <div className="maincontainer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Giỏ hàng của bạn</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              {testData.map((data) => {
                return (
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">{data.productName}</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">{data.price}</span>
                  </li>
                );
              })}
              <li className="list-group-item d-flex justify-content-between">
                <span>Thành tiền</span>
                <strong>{temp}</strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button type="button" className="btn btn-secondary">
                    Thanh toán
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      )
    </div>
  );
};

export default CheckOut;
