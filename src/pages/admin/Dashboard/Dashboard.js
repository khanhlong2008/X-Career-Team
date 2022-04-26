import React from "react";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "./dashboard.css";
import "../admin.main.css";

const { Header, Content, Sider } = Layout;

const items2 = [{ icon: UserOutlined, titleName: 'Bài Viết', child: [{ subKey: '1', sublabel: 'Chi tiết' }, { subKey: '2', sublabel: 'thu 2' }] }, { icon: UserOutlined, titleName: 'Sản Phẩm', child: [{ subKey: '1', sublabel: 'Chi tiết' }, { subKey: '2', sublabel: 'thu 2' }] }, { icon: LaptopOutlined, titleName: 'Liên Hệ', child: [{ subKey: '1', sublabel: 'Chi tiết' }, { subKey: '2', sublabel: 'thu 2' }] }, { icon: NotificationOutlined, titleName: 'Cài Đặt', child: [{ subKey: '1', sublabel: 'Chi tiết' }, { subKey: '2', sublabel: 'thu 2' }] }].map((data, index) => {
  const key = data.titleName;
  return {
    key: `sub${key}`,
    icon: React.createElement(data.icon),
    label: `${key}`,
    children: data.child.map((data, j) => {
      return {
        key: data.subKey,
        label: `${data.sublabel}`,
      };
    }),
  };
});

const Dashboard = () => {
  return (
    <Layout style={{
      minHeight: '100vh',
    }}>
      <Header className="header">
        <div className="logo">
          Team ProjectX
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
            theme="dark"
          />
        </Sider>
        <Layout
          style={{
            padding: '20px',
          }}
        >
          <Content
            theme="dark"
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;