import { Button } from "antd";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import React from "react";

import "../App.css";

export function CSV(props: any) {
  return (
    <>
      <div style={{ justifyContent: "flex-end", display: "flex", marginTop: 16 }}>
        <span style={{ textAlign: "center", marginRight: 20, marginTop: 10 }}>.csv</span>
        <Button type="primary" icon={<DownloadOutlined />} size={"large"} style={{ marginRight: 16 }} />
        <Button type="primary" icon={<UploadOutlined />} size={"large"} />
      </div>
    </>
  );
}
