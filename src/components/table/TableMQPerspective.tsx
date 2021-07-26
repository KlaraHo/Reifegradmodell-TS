import { Divider, Form } from "antd";
import React from "react";
import { TableMQRow } from "./TableMQRow";

export function TableMQPerspective(props: {
  perspective: string;
  tableID: string;
  kpiRowCount: number;
  defaultValueName: string[];
  defaultValueTarget: number[];
  piRowCount: number;
}) {
  const [sum, setSum] = React.useState<number>(0);

  return (
    <>
      <Form.Provider
        onFormChange={(name, info) => {
          let total = 0;
          let totalWeights = 0;

          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          for (const [_formName, form] of Object.entries(info.forms)) {
            if (form.getFieldValue("active")) {
              if (Number.isFinite(form.getFieldValue("actual_value"))) {
                const actualValue = form.getFieldValue("actual_value") || 0;
                const targetValue = form.getFieldValue("target_value");

                // console.log(
                //   "values",
                //   actualValue,
                //   targetValue,
                //   form.getFieldValue("actual_value"),
                //   form.getFieldValue("target_value")
                // );

                let qi =
                  !Number.isFinite(targetValue) || targetValue === 0 ? 1 : ((actualValue / targetValue) as number);

                if (qi <= 0.5) {
                  total += qi * 1.3;
                  totalWeights += 1.3;
                } else {
                  total += qi;
                  totalWeights += 1;
                }
              }
            }
          }

          if (totalWeights) {
            setSum(total / totalWeights);
          }
        }}
      >
        <div
          style={{
            gridTemplateColumns: "repeat (20%, 1fr, 20%)",
            justifyContent: "center",
            rowGap: 4,
            marginBottom: 24,
            marginLeft: 4,
            marginRight: 4
          }}
        >
          <div
            style={{
              marginBottom: 4,
              fontWeight: "bold",
              textDecoration: "underline"
            }}
          >
            {props.perspective}
          </div>

          {Array.from({ length: props.kpiRowCount }, (x, i) => i).map((row, i) => {
            return (
              <TableMQRow
                key={row}
                row={row}
                isKpiRow={true}
                step="KPI"
                defaultValueName={props.defaultValueName[i]}
                defaultValueTarget={props.defaultValueTarget[i]}
                tableID={props.tableID}
                perspective={props.perspective}
              />
            );
          })}

          {Array.from({ length: props.piRowCount }, (x, i) => props.kpiRowCount + i).map((row) => {
            return (
              <TableMQRow
                key={row}
                row={row}
                isKpiRow={false}
                step="PI"
                tableID={props.tableID}
                perspective={props.perspective}
              />
            );
          })}

          <div style={{ marginTop: 20 }}>Aggregation: {(sum * 100).toFixed(0)} % </div>
          <div style={{ marginTop: 20 }}>Legende Platzhalter</div>
          <Divider />
        </div>
      </Form.Provider>
    </>
  );
}
