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
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Thông tin thanh toán</h4>
            <form className="needs-validation" novalidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="firstName">Họ</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="lastName">Tên</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="mb-3">
                <label for="address">Địa chỉ</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="mb-3">
                <label for="address2">
                  Địa chỉ 2 <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label for="state">Thành phố</label>
                  <select
                    className="custom-select d-block w-100 h-75"
                    id="state"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>Hồ chí minh</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
              </div>

              <h4 className="mb-3">Phương thức thanh toán</h4>

              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" for="paypal">
                    Paypal
                  </label>
                </div>
              </div>
              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="button"
              >
                Thanh toán
              </button>
            </form>
          </div>
        </div>
      </div>
      )
    </div>
  );
};

export default CheckOut;
