import { Divider, Form } from "antd";
import { truncate } from "fs";
import React, { Props } from "react";
import { TableMQRow } from "./TableMQRow";

export interface tableLegend {
  shortcut: string;
  name: string;
}

export function TableMQPerspective(props: {
  perspective: string;
  tableID: string;
  kpiRowCount: number;
  defaultValueName: string[];
  defaultValueTarget: number[];
  piRowCount: number;
  tableLegend: tableLegend[];
  // onPerspectiveChange(value: number): void;
}) {
  const [sum, setSum] = React.useState<number>(0);
  const [sumKpi, setSumKpi] = React.useState<number>(0);
  const [sumPi, setSumPi] = React.useState<number>(0);

  return (
    <>
      <Form.Provider
        onFormChange={(name, info) => {
          let total = 0;
          let totalWeights = 0;

          let totalKpi = 0;
          let totalWeightsKpi = 0;

          let totalPi = 0;
          let totalWeightsPi = 0;

          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          for (const [_formName, form] of Object.entries(info.forms)) {
            if (form.getFieldValue("active")) {
              if (Number.isFinite(form.getFieldValue("actual_value"))) {
                // hier muss noch die richtige Bedingung rein
                if (props.kpiRowCount <= props.kpiRowCount) {
                  const actualValue = form.getFieldValue("actual_value") || 0;
                  const targetValue = form.getFieldValue("target_value");

                  let qi =
                    !Number.isFinite(targetValue) || targetValue === 0 ? 1 : ((actualValue / targetValue) as number);

                  if (qi <= 0.5) {
                    totalKpi += qi * 1.3;
                    totalWeightsKpi += 1.3;
                  } else {
                    totalKpi += qi;
                    totalWeightsKpi += 1;
                  }

                  console.log("KPI", totalKpi, totalWeightsKpi);

                  if (totalWeightsKpi) {
                    setSumKpi(totalKpi / totalWeightsKpi);
                  }
                }
                // hier muss noch die richtige Bedingung rein
                else if (props.kpiRowCount > props.kpiRowCount) {
                  const actualValue = form.getFieldValue("actual_value") || 0;
                  const targetValue = form.getFieldValue("target_value");

                  let qi =
                    !Number.isFinite(targetValue) || targetValue === 0 ? 1 : ((actualValue / targetValue) as number);

                  if (qi <= 0.5) {
                    totalPi += qi * 1.3;
                    totalWeightsPi += 1.3;
                  } else {
                    totalPi += qi;
                    totalWeightsPi += 1;
                  }

                  if (totalWeightsPi) {
                    setSumPi(totalPi / totalWeightsPi);
                  }
                }
              }
            }
          }

          // if (totalWeightsKpi || totalWeightsPi) {
          setSum(sumKpi * 0.66 + sumPi * 0.33);
          // }

          // props.onPerspectiveChange(sum)
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
          <div style={{ textAlign: "center", marginTop: 4 }}>
            {props.tableLegend.map((term, index) => {
              return (
                <span
                  style={{ fontSize: 10, overflow: "hidden", textOverflow: "ellipsis", width: " 100%" }}
                  key={index}
                >
                  {term.shortcut + "..." + term.name + ", "}
                </span>
              );
            })}
          </div>
          <Divider />
        </div>
      </Form.Provider>
    </>
  );
}
