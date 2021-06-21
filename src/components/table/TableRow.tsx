import { Checkbox, Form, Input, InputNumber } from "antd";
import React from "react";

export function TableRow(props: {
  columns: string[];
  row: number;
  sourceInputPlaceholder: string;
  onActiveChange(active: boolean): void;
}) {
  const [active, setActive] = React.useState<boolean>(true);
  const [sum, setSum] = React.useState<number>(0);

  return (
    <Form
      name={props.row.toString()}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${2 + props.columns.length + 1}, 1fr)`,
        justifyItems: "center",
        columnGap: 16,
        rowGap: 16
      }}
      onValuesChange={(_, values) => {
        let total = 0;
        let totalWeights = 0;

        for (const [key, value] of Object.entries(values)) {
          if (Number.isInteger(value)) {
            let qi = value as number;

            if (qi <= 0.5) {
              total += qi * 1.3;
              totalWeights += 1.3;
            } else {
              total += qi;
              totalWeights += 1;
            }
          }
        }

        setSum(total / totalWeights);
      }}
      initialValues={{
        active: true
      }}
    >
      <Input placeholder={props.sourceInputPlaceholder} style={{ marginTop: 6 }} />
      <Form.Item name="active" rules={[{ required: false }]} valuePropName="checked">
        <Checkbox
          style={{ marginTop: 6 }}
          checked={active}
          onChange={(event) => {
            setActive(event.target.checked);
            props.onActiveChange(event.target.checked);
          }}
        />
      </Form.Item>

      {props.columns.map((column, index) => {
        return (
          <Form.Item
            name={column}
            rules={[{ required: false, type: "regexp", message: "Zahl zwischen 0 & 1 mit 2 Dezimalstellen" }]}
          >
            <InputNumber disabled={!active} key={index} size="small" />
          </Form.Item>
        );
      })}

      <div style={{ height: "24px", width: 40, border: "1px solid #004d80", marginTop: 4 }}>{sum}</div>
    </Form>
  );
}

// regexp: ^(?:0*(?:\.\d+)?|1(\.0*)?)$
