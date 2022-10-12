import React from "react";
import { Layout } from "antd";

const { Footer: AntdFooter } = Layout;

export default function Footer() {
  return (
    <AntdFooter style={{ backgroundColor: "white", border: "1px solid red" }}>
      Footer
    </AntdFooter>
  );
}
