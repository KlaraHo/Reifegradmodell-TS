import { Form, Checkbox, Input, InputNumber } from "antd";
import React from "react";

export function TableMQRow(props: {
  gridRow: string;
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
      name={props.tableID + "_" + props.perspective + "_" + props.gridRow}
      style={{ gridRow: `${props.gridRow}`, gridColumn: 2 }}
      onValuesChange={(_, values) => {
        let actualValue = form.getFieldValue("actual_value");
        let targetValue = form.getFieldValue("target_value");

        setFulfilment((actualValue / targetValue) * 100);
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
        <Form.Item>
          <Checkbox
            style={{ marginTop: 4 }}
            checked={active}
            onChange={(event) => {
              setActive(event.target.checked);
            }}
          />
        </Form.Item>
        <span>{props.step}</span>
        <Form.Item>
          <Input name="description" disabled={props.isKpiRow} defaultValue={props.defaultValueName} />
        </Form.Item>
        <Form.Item>
          <InputNumber
            name="actual_value"
            disabled={!active}
            key={props.tableID + "_" + props.perspective + "_" + props.gridRow + "_actualValue"}
            size="small"
            min="0"
            max="100"
            step="1"
          />
        </Form.Item>
        <Form.Item>
          <Input
            name="target_value"
            disabled={props.isKpiRow}
            defaultValue={props.defaultValueTarget}
            key={props.tableID + "_" + props.perspective + "_" + props.gridRow + "_targetValue"}
          />
        </Form.Item>
        <Form.Item>
          <span>{fulfilment}</span>
        </Form.Item>
      </div>
    </Form>
  );
}
