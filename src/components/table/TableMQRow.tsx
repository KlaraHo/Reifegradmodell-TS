import { Checkbox, Form, Input, Divider } from "antd";
import React from "react";

export function TableMQRow(props: { step: string; indicator: string }) {
  const [active, setActive] = React.useState<boolean>(true);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
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
      <span>{props.step}</span>
      <Input />
      <Input />
      <Input />
      <span></span>
    </div>
  );
}
