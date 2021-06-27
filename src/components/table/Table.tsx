import { Button, Form, Divider, Card } from "antd";
import React from "react";
import { TableRow } from "./TableRow";
import { TableRowTargetvalue } from "./TableRowTargetvalue";
import { TableRowAggregation } from "./TableRowAggregation";
import { CSV } from "../CSV";

export function Table(props: {
  title: string;
  sourceTitle: string;
  sourceInputPlaceholder: string;
  description: React.ReactNode;
  backgroundColor: string;
  columns: string[];
  resultTitle: string;
  resultInitials: string;
  rowsCount: number;
  tableID: string;
}) {
  const [form] = Form.useForm();
  const [deactivatedRowIds, setDeactivatedRowIds] = React.useState<number[]>([]);

  const initialSumsAsStrings = [];

  const initialSums = [];
  for (let i = 0; i < props.columns.length; i++) {
    initialSums.push(0);
    initialSumsAsStrings.push("0");
  }

  const [sums, setSums] = React.useState<number[]>(initialSums);
  const [sumsAsStrings, setSumsAsStrings] = React.useState<string[]>(initialSumsAsStrings);


  const [reset, setReset] = React.useState<boolean>(false);
  const onReset = (props: any) => {
    setReset(true);
    form.resetFields(); // should go in every TableRow, but how?
    // TODO: Reset for Form in Form
  };

  // Calculate DQ, IQ, KQ
  const weightsDQ = [0.18, 0.16, 0.14, 0.13, 0.09, 0.09, 0.08, 0.07, 0.06, 0.02];
  const weightsIQ = [0.20, 0.15, 0.14, 0.14, 0.12, 0.09, 0.07, 0.06, 0.02];
  const weightsKQ = [0.31, 0.31, 0.21, 0.18];

  const onBerechnen = (props: {title: string}) => {
    if (props.title === "Datenqualitätsindikatoren") {

    } else if (props.title === "Informationsqualitätsindikatoren") {

    } else if (props.title === "Wissensqualitätsindikatoren") {

    };
  }

  return (
    <div style={{ textAlign: "center", background: props.backgroundColor, padding: 40, marginTop: 40 }}>
      <h1 style={{ textTransform: "uppercase" }}>{props.title}</h1>
      <p>{props.description}</p>
      <CSV />
      <div
        style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: `repeat(${2 + props.columns.length + 1}, 1fr)`,
          justifyItems: "center",
          columnGap: 16,
          rowGap: 4
        }}
      >
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>{props.sourceTitle}</span>
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>An/Aus</span>
        {props.columns.map((column, index) => {
          return (
            <span style={{ fontWeight: "bold" }} key={index}>
              {column}
            </span>
          );
        })}

        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>Aggregation</span>
      </div>

      <Form.Provider
        onFormChange={(name, info) => {
          const sums: number[] = [];

          for (let i = 0; i < props.columns.length; i++) {
            sums[i] = 0;
          }

          props.columns.forEach((column, index) => {
            let totalColumn = 0;
            let totalColumnWeights = 0;
            for (const [formName, form] of Object.entries(info.forms)) {
              if (!deactivatedRowIds.includes(parseInt(formName))) {
                const formColumnValue = form.getFieldValue(column);

                if (formColumnValue !== undefined) {
                  if (formColumnValue <= 0.5) {
                    totalColumn += formColumnValue * 1.3;
                    totalColumnWeights += 1.3;
                  } else {
                    totalColumn += formColumnValue;
                    totalColumnWeights += 1;
                  }
                  sums[index] = totalColumn / totalColumnWeights;
                }
              }
            }
          });
          setSums(sums);

          const sumsAsStrings = sums.map((i) => i.toFixed(2));
          setSumsAsStrings(sumsAsStrings);
           // How to show only 2 decimals in aggregation? toFixed also no option
        }}
      >
        {Array.from({ length: props.rowsCount }, (x, i) => i).map((row) => {
          return (
            <TableRow
              columns={props.columns}
              row={row}
              sourceInputPlaceholder={props.sourceInputPlaceholder}
              onActiveChange={(active: any) => {
                if (active) {
                  setDeactivatedRowIds(deactivatedRowIds.filter((id) => id !== row));
                } else {
                  setDeactivatedRowIds(deactivatedRowIds.concat([row]));
                }
              }}
            />
          );
        })}

        <Divider />

        <TableRowAggregation values={sumsAsStrings} />
        <TableRowTargetvalue columns={props.columns} row={props.rowsCount + 1} rowTitle={"Sollwert"} />

        <div style={{ justifyContent: "center", marginTop: 16 }}>
          <Card style={{ width: 300, margin: "auto" }} title={props.resultTitle}>
            <p style={{ margin: 0 }}>{props.resultInitials}</p>
          </Card>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="text" danger style={{ marginRight: 16 }} onClick={onReset}>
            Zurücksetzen
          </Button>
          <Button type="primary" htmlType="submit" style={{ marginRight: 16 }} onClick={onBerechnen}>
            Berechnen
          </Button>
          <Button type="primary">Grafik</Button>
        </div>
      </Form.Provider>
    </div>
  );
}
