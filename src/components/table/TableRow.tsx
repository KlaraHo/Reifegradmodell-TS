import { Checkbox, Form, Input, InputNumber } from "antd";
import React from "react";
import { ITableColumn } from "./Table";

export function TableRow(props: {
  columns: ITableColumn[];
  row: number;
  tableID: string;
  sourceInputPlaceholder: string;
  reset: number;
  onActiveChange?(active: boolean): void;
}) {
  const [form] = Form.useForm();
  const [active, setActive] = React.useState<boolean>(true);
  const [sum, setSum] = React.useState<number>(0);

  React.useEffect(() => {
    if (form) {
      form.resetFields();
    }
    setSum(0);
    setActive(true);
  }, [form, props.reset]);

<<<<<<< HEAD
=======
  function handleFieldValuesChange(values: any) {
    console.error("onValuesChange");
    let total = 0;
    let totalWeights = 0;

    if (values.active) {
      // eslint-disable-next-line
      for (const [_key, value] of Object.entries(values)) {
        if (Number.isFinite(value)) {
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

      if (totalWeights) {
        setSum(total / totalWeights);
      }
    }
  }

  React.useEffect(() => {
    if (form) {
      form.resetFields();
      const defaultValues: any = {};
      props.columns.forEach((column, index) => {
        defaultValues[column.name] = props.initialValues?.values[index];
      });

      form.setFieldsValue(defaultValues);
      form.validateFields();
      // handleFieldValuesChange(form.getFieldsValue());
      form.submit();
    }
    setActive(true);
  }, [props.initialValues, form, props.columns]);

>>>>>>> parent of 3d0253d (install papaparse, delete csv component, comment out upload stuff)
  return (
    <Form
      form={form}
      name={props.tableID + "_" + props.row.toString()}
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

        if (values.active) {
          // eslint-disable-next-line
          for (const [_key, value] of Object.entries(values)) {
            if (Number.isFinite(value)) {
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

          if (totalWeights) {
            setSum(total / totalWeights);
          }
        }
      }}
      initialValues={{
        active: true,
        description: `${props.sourceInputPlaceholder} ${props.row + 1}`
      }}
    >
      <Form.Item name="description">
        <Input style={{ marginTop: 6 }} />
      </Form.Item>

      <Form.Item name="active" valuePropName="checked">
        <Checkbox
          style={{ marginTop: 6 }}
          checked={active}
          onChange={(event) => {
            setActive(event.target.checked);
            if (props.onActiveChange) {
              props.onActiveChange(event.target.checked);
            }
          }}
        />
      </Form.Item>

      {props.columns.map((column, index) => {
        return (
          <Form.Item
            key={index}
            name={column.name}
            rules={[{ required: false, message: "Zahl zwischen 0 & 1 mit 2 Dezimalstellen" }]}
          >
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
      <div key={props.tableID + "_"} style={{ height: "24px", marginTop: 4, color: active ? "#000" : "#ccc" }}>
        {sum.toFixed(2)}
      </div>
    </Form>
  );
}
