import { Checkbox } from "antd";
import React from "react";

export function TableRowAggregation(props: { values: string[], tableID: string }) {
  const [active, setActive] = React.useState<boolean>(true);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${2 + props.values.length + 1}, 1fr)`,
        justifyItems: "center",
        columnGap: 16,
        rowGap: 16
      }}
    >
      <span style={{ fontWeight: "bold", textDecoration: "underline", marginTop: 6 }}>Aggregation</span>
      <Checkbox
        style={{ marginTop: 6 }}
        checked={active}
        onChange={(event) => {
          setActive(event.target.checked);
        }}
      />
      {props.values.map((value, index) => {
        return (
          <div style={{ height: "24px" }} key={ props.tableID + "_" + index }>
            {value}
          </div>
        );
      })}
    </div>
  );
}
