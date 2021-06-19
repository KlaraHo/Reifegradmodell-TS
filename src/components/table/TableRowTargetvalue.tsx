import { Checkbox, Form, Input } from "antd";
import React from "react";

export function TableRowTargetvalue(props: { columns: string[]; row: number, rowTitle: string }) {
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
      <span style={{ fontWeight: "bold", textDecoration: "underline"}}>{props.rowTitle}</span>
      <Checkbox
        style={{ marginTop: 4 }}
        checked={active}
        onChange={(event) => {
          setActive(event.target.checked);
        }}
      />
      {props.columns.map((column, index) => {
        return (
          <Form.Item name={column.toLowerCase() + "_" + props.row} rules={[{ required: false, message: "TODO" }]}>
            <Input disabled={!active} key={index} />
          </Form.Item>
        );
      })}
    </div>
  );
}
