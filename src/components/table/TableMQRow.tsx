import { Form, Checkbox, Input, InputNumber } from "antd";
import React from "react";

export function TableMQRow(props: {
  row: number;
  isKpiRow?: boolean;
  step: string;
  defaultValueName?: string;
  defaultValueTarget?: number;
  tableID: string;
  perspective: string;
}) {
  const [form] = Form.useForm();
  const [active, setActive] = React.useState<boolean>(true);
  const [fulfilment, setFulfilment] = React.useState<number>(0);

  return (
    <Form
      form={form}
      name={props.tableID + "_" + props.perspective + "_" + props.row}
      style={{ gridRow: `${props.row}`, gridColumn: 2 }}
      onValuesChange={(_, values) => {
        // if (values.active) {
        let actualValue = form.getFieldValue("actual_value");
        let targetValue = form.getFieldValue("target_value");

        console.log(actualValue);

        setFulfilment((actualValue / targetValue) * 100);
        // }
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6,  1fr)",
          justifyContent: "center",
          columnGap: 16
        }}
      >
        <Form.Item name="active">
          <Checkbox
            style={{ marginTop: 4 }}
            checked={active}
            onChange={(event) => {
              setActive(event.target.checked);
            }}
          />
        </Form.Item>
        <span>{props.step}</span>
        <Form.Item name="description">
          <Input disabled={active ? props.isKpiRow : !active} defaultValue={props.defaultValueName} />
        </Form.Item>
        <Form.Item name="actual_value">
          <InputNumber
            disabled={!active}
            key={props.tableID + "_" + props.perspective + "_" + props.row + "_actualValue"}
            size="small"
            min="0"
            max="100"
            step="1"
          />
        </Form.Item>
        <Form.Item name="target_value">
          <Input
            disabled={active ? props.isKpiRow : !active}
            defaultValue={props.defaultValueTarget}
            key={props.tableID + "_" + props.perspective + "_" + props.row + "_targetValue"}
          />
        </Form.Item>
        <Form.Item>
          <div key={props.tableID + "_fulfilment_" + props.row} style={{ color: active ? "#000" : "#ccc" }}>
            {fulfilment.toFixed(0)}
          </div>
        </Form.Item>
      </div>
    </Form>
  );
}
