import { Checkbox, Input } from "antd";
import React from "react";

export function TableMQRowKPI(props: { indicatorTitle: string; targetValue: string; gridRow: string }) {
  const [active, setActive] = React.useState<boolean>(true);

  return (
    <div style={{ gridColumn: 2, gridRow: `${props.gridRow}` }}>
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
        <span>KPI</span>
        <span>{props.indicatorTitle}</span>
        <Input />
        <span>{props.targetValue}</span>
        <span style={{ border: "1px solid black", width: 80, height: 20 }}></span>
      </div>
    </div>
  );
}
