import { Checkbox, Form } from "antd";
import React from "react";

export function TableRowAggregation(props: { columns: string[]; row: number }) {
  const [active, setActive] = React.useState<boolean>(true);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${2 + props.columns.length + 1}, 1fr)`,
        justifyItems: "center",
        columnGap: 16,
        rowGap: 16
      }}
    >
      <span style={{ fontWeight: "bold", textDecoration: "underline", marginTop: 6}}>Aggregation</span>
      <Checkbox
        style={{ marginTop: 6, color: "#004d80" }}
        checked={active}
        onChange={(event) => {
          setActive(event.target.checked);
        }}
      />
      {props.columns.map((column, index) => {
        return (
          <Form.Item name={column.toLowerCase() + "_" + props.row} rules={[{ required: false, message: "TODO" }]}>
            <div style={{height: "24px", width: 40, border: "1px solid #004d80"}} key={index}/>
          </Form.Item>
        );
      })}
    </div>
  );
}