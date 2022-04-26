import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined,ArrowRightOutlined } from '@ant-design/icons';

//css
import "./login.css";


const LoginAdmin = () => {

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  return (
    <div className="form-login">
      <div className="">
        <h1>welcome to page admin</h1>
        <div className="box-form">
          <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
            
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
              className="form-input"
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
              className="form-input"
            >
              <Input
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item shouldUpdate className='form-button'>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !form.isFieldsTouched(true) ||
                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                  }
                >
                  Log in
                  <ArrowRightOutlined  className='icon'/>
                </Button>
              )}
            </Form.Item>

          </Form>
        </div>
      </div>
    </div>
  )
};

export default LoginAdmin;
