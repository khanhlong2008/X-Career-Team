import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Image from "./img/bac_code.png";

import { Commonfc } from "../../../Ultis/Commonfunction";
//css
import "./login.css";
import { useDispatch } from "react-redux";

import { adminLogin } from "../../../Redux/Reducer/Account";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { Request_User } from "../../../API/api";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
const LoginAdmin = () => {
  const pathname = window.location.pathname;

  let history = useHistory();

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const dispatch = useDispatch();
  const info_Admin = useSelector((state) => state["account"]["Admin"]);

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);

    axios.post(Request_User.login, values, { headers: {} }).then((response) => {
      console.log(response);
      if (response) {
        dispatch(adminLogin(response.data));

        let changeurl = "/admin/dashboard";
        history.push(changeurl);

        let cookie = Cookies.get("refreshToken");

        console.log(cookie);
      }
    });
  };

  return (
    <div
      className="form-login"
      style={{ backgroundImage: "url(" + Image + ")" }}

    
    >
      <Redirect
        to={info_Admin["isLogin"] == true ? "/admin/dashboard" : "/admin"}
      ></Redirect>
      <div className="">
        <h1>welcome to page admin</h1>
        <div className="box-form">
          <Form form={form} name="horizontal_login" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              className="form-input"
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              className="form-input"
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item shouldUpdate className="form-button">
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !form.isFieldsTouched(true) ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  Log in
                  <ArrowRightOutlined className="icon" />
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
