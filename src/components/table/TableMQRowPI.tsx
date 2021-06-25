import { Checkbox, Form, Input, Divider } from "antd";
import React from "react";

export function TableMQRowPI(props: { gridRow: string }) {
  const [active, setActive] = React.useState<boolean>(true);

  return (
    <div style={{ gridRow: `${props.gridRow}`, gridColumn: 2 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6,  1fr)",
          gridTemplateRows: 1,
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
        <span>PI</span>
        <Input />
        <Input />
        <Input />
        <span style={{ border: "1px solid black", width: 80, height: 20 }}></span>
      </div>
    </div>
  );
}