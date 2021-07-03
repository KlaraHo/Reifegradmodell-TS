import { Checkbox, Form, Input } from "antd";
import React from "react";
import { ITableColumn } from "./Table";

export function TableRowTargetvalue(props: { columns: ITableColumn[]; row: number, rowTitle: string, tableID: string }) {
  const [active, setActive] = React.useState<boolean>(true);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${2 + props.columns.length + 1}, 1fr)`,
        justifyItems: "center",
        columnGap: 16,
      }}
    >
      <span style={{ fontWeight: "bold", textDecoration: "underline", marginTop: 6}}>{props.rowTitle}</span>
      <Checkbox
        style={{ marginTop: 6 }}
        checked={active}
        onChange={(event) => {
          setActive(event.target.checked);
        }}
      />
      {props.columns.map((column, index) => {
        return (
          <Form.Item name={ props.tableID + "_" + column.name.toLowerCase() + "_" + props.row} rules={[{ required: false, type: "regexp", message: "TODO" }]}>
            <Input disabled={!active} key={props.tableID + "_" + index} />
          </Form.Item>
        );
      })}
    </div>
  );
}
