import { Form, Checkbox, Input, InputNumber } from "antd";
import React from "react";

export function calculateFulfilment(actualValue: number, targetValue: number): number {
  if (targetValue === 0) {
    return 0;
  } else if (actualValue <= targetValue) {
    return (actualValue / targetValue) * 100;
  } else if (targetValue < actualValue) {
    return (targetValue / actualValue) * 100;
  } else {
    console.error("Something went wrong!");
    return 0;
  }
}

export function TableMQRow(props: {
  row: number;
  isKpiRow: boolean;
  step: string;
  defaultValueName?: string;
  defaultValueTarget?: number;
  tableID: string;
  perspective: string;
  onActiveChange?(active: boolean): void;
}) {
  const [form] = Form.useForm();
  const [active, setActive] = React.useState<boolean>(true);
  const [fulfilment, setFulfilment] = React.useState<number>(0);

  let categoriesPerspectiveChart = [];

  return (
    <Form
      form={form}
      name={props.tableID + "_" + props.perspective + "_" + props.row}
      style={{ gridRow: `${props.row}`, gridColumn: 2 }}
      onValuesChange={(_, values) => {
        let actualValue: number = form.getFieldValue("actual_value") || 0;
        let targetValue: number = form.getFieldValue("target_value") || 0;

        // console.log("rowValues", actualValue, targetValue);

        setFulfilment(calculateFulfilment(actualValue, targetValue));
      }}
      initialValues={{
        active: true,
        step: props.step,
        description: props.defaultValueName,
        actual_value: "",
        target_value: props.defaultValueTarget || ""
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
        <Form.Item name="active" valuePropName="checked">
          <Checkbox
            style={{ marginTop: 4 }}
            checked={active}
            onChange={(event) => {
              setActive(event.target.checked);
              if (props.onActiveChange) {
                props.onActiveChange(event.target.checked);
              }
            }}
          />
        </Form.Item>

        <Form.Item name="step">
          <Input disabled />
        </Form.Item>

        <Form.Item name="description">
          <Input disabled={active ? props.isKpiRow : !active} />
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
          <InputNumber
            disabled={active ? props.isKpiRow : !active}
            key={props.tableID + "_" + props.perspective + "_" + props.row + "_targetValue"}
          />
        </Form.Item>
        <Form.Item name="fulfilment">
          <div key={props.tableID + "_fulfilment_" + props.row} style={{ color: active ? "#000" : "#ccc" }}>
            {fulfilment.toFixed(0)} %
          </div>
        </Form.Item>
      </div>
    </Form>
  );
}
