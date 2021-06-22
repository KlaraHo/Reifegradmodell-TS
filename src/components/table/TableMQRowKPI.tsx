import { Checkbox, Form, Input, Divider } from "antd";
import React from "react";

export function TableMQRowPI(props: { indicatorTitle: string }) {
  const [active, setActive] = React.useState<boolean>(true);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        justifyContent: "center",
        columnGap: 16,
        rowGap: 4
      }}
    >
      <Checkbox
        style={{ marginTop: 4 }}
        checked={active}
        onChange={(event) => {
          setActive(event.target.checked);
        }}
      />
      <span>KPI</span>
      <span>{props.indicatorTitle}</span>
      <Input />
      <Input />
      <span></span>
    </div>
  );
}