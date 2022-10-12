import React from "react";
import { Layout, Menu, Col, Row } from "antd";
import { Html5Outlined, ConsoleSqlOutlined } from "@ant-design/icons";
const { Header: AntdHeader, Content, Footer, Sider } = Layout;

export default function Header() {
  return (
    <AntdHeader style={{ backgroundColor: "white" }}>
      <Row justify="center">
        <Col span={18}>
          <Row>
            <Col span={4} className="logo">
              LOGO
            </Col>
            <Col span={18} className="menu">
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                items={[
                  {
                    key: 1,
                    label: `前端`,
                    icon: <Html5Outlined />,
                  },
                  {
                    key: 2,
                    label: `后端`,
                    theme: "dark",
                    icon: <ConsoleSqlOutlined />,
                  },
                ]}
              ></Menu>
            </Col>
            <Col span={2}>勘误</Col>
          </Row>
        </Col>
      </Row>
    </AntdHeader>
  );
}
