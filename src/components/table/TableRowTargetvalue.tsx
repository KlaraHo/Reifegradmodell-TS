import { Form, InputNumber } from "antd";
import React from "react";
import { ITableColumn } from "./Table";

export function TableRowTargetvalue(props: {
  columns: ITableColumn[];
  row: number;
  rowTitle: string;
  tableID: string;
  reset: number;
}) {
  //reset does not work
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (form) {
      form.resetFields();
    }
  }, [form, props.reset]);

  return (
    <Form
      form={form}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${2 + props.columns.length + 1}, 1fr)`,
        justifyItems: "center",
        columnGap: 16
      }}
      name="targetValues"
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
        {props.rowTitle}
      </span>
      <div />
      {props.columns.map((column, index) => {
        return (
          <Form.Item
            key={index}
            name={props.tableID + "_targetValue_" + column.name}
            rules={[{ required: false, type: "regexp", message: "TODO" }]}
          >
            <InputNumber key={props.tableID + "_" + index} size="small" min="0" max="1" step="0.01" precision={2} />
          </Form.Item>
        );
      })}
    </Form>
  );
}
