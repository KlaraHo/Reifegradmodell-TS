import { Checkbox } from "antd";
import React from "react";

export function TableRowAggregation(props: { values: string[] }) {
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
        style={{ marginTop: 6, color: "#004d80" }}
        checked={active}
        onChange={(event) => {
          setActive(event.target.checked);
        }}
      />
      {props.values.map((value, index) => {
        return (
          <div style={{ height: "24px", border: "1px solid #004d80" }} key={index}>
            {value}
          </div>
        );
      })}
    </div>
  );
}
