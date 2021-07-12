import { Checkbox, Form, InputNumber } from "antd";
import React from "react";
import { ITableColumn } from "./Table";

export function TableRowTargetvalue(props: {
  columns: ITableColumn[];
  row: number;
  rowTitle: string;
  tableID: string;
}) {
  const [active, setActive] = React.useState<boolean>(true);

  return (
    <Form
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${2 + props.columns.length + 1}, 1fr)`,
        justifyItems: "center",
        columnGap: 16
      }}
      name="targetValues"
    >
      <span style={{ fontWeight: "bold", textDecoration: "underline", marginTop: 6 }}>{props.rowTitle}</span>
      <Checkbox
        style={{ marginTop: 6 }}
        checked={active}
        onChange={(event) => {
          setActive(event.target.checked);
        }}
      />
      {props.columns.map((column, index) => {
        return (
          <Form.Item
            name={props.tableID + "_targetValue_" + column.name}
            rules={[{ required: false, type: "regexp", message: "TODO" }]}
          >
            {/* oder hier trotzdem column.name für name? */}
            <InputNumber
              disabled={!active}
              key={props.tableID + "_" + index}
              size="small"
              min="0"
              max="1"
              step="0.01"
              precision={2}
            />
          </Form.Item>
        );
      })}
    </Form>
  );
}
