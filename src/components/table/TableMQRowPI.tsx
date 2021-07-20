import { Checkbox, Input } from "antd";
import React from "react";

export function TableMQRowPI(props: { gridRow: string; isKpiRow?: boolean }) {
  const [active, setActive] = React.useState<boolean>(true);

  return (
    <div style={{ gridRow: `${props.gridRow}`, gridColumn: 2 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6,  1fr)",
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
        <Input disabled={props.isKpiRow} />
        <Input />
        <Input />
        <span style={{ border: "1px solid black", width: 80, height: 20 }}></span>
      </div>
    </div>
  );
}
