import React from 'react'
import { Typography } from "antd";
const { Title } = Typography;
function BoxTask({ children }) {
  return (
    <div
      style={{
        width: "100%",
        color: "black",
        padding: 16,
        backgroundColor: "#f8faf7",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <Title
        level={4}
        style={{
          textAlign: "left",
          margin: 0,
        }}
      >
        Completed Task
      </Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default BoxTask