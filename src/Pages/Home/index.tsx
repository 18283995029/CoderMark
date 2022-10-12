import React from "react";
import {  Layout,  Col,  Row } from "antd";
import "./index.less";
import Header from "./components/Header";
import Sider from "./components/Sider";
import Content from "./components/Content";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <Layout className="layout">
      <Header />
      <br />
      <Row justify="center">
        <Col span={18}>
          <Row>
            <Col span={4}>
              <Layout>
                <Sider></Sider>
              </Layout>
            </Col>
            <Col span={1}></Col>
            <Col span={18}>
              <Layout>
                <Content></Content>
              </Layout>
            </Col>
            <Col span={1}></Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Footer></Footer>
    </Layout>
  );
};
export default Home;