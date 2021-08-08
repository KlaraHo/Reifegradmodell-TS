import React from "react";

export function TableRowAggregation(props: { values: string[]; tableID: string }) {
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
      <span
        style={{
          fontWeight: "bold",
          textDecoration: "underline",
          marginTop: 6,
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: " 100%"
        }}
      >
        Aggregation
      </span>
      <div />
      {props.values.map((value, index) => {
        return (
          <div style={{ height: "24px" }} key={props.tableID + "_" + index}>
            {value}
          </div>
        );
      })}
    </div>
  );
}
