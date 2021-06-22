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
}) {
  const [form] = Form.useForm();
  const [deactivatedRowIds, setDeactivatedRowIds] = React.useState<number[]>([]);
  const [sums, setSums] = React.useState<number[]>([]);
  // Dynamisch Array mit 0 auffüllen? Aber wo? Vorm onChange passiert dann beim onChange nix mehr
  // iwo initial values angeben?
  const [reset, setReset] = React.useState<boolean>(false);

  const onReset = (props: any) => {
    setReset(true);
    form.resetFields(); // should go in every TableRow, but how?
    // TODO: Reset for Form in Form
  };

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

          let totalColumn = 0;
          let totalColumnWeights = 0;

          props.columns.forEach((column, index) => {
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
                  // Something still wrong with this: changing first column changes aggregation of 2nd column
                }
              }
            }
          });
          sums.map((i) => i.toFixed(2)); // How to show only 2 decimals in aggregation? toFixed also no option
          setSums(sums);
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

        <TableRowAggregation values={sums} />
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
          <Button type="primary" htmlType="submit" style={{ marginRight: 16 }}>
            Berechnen
          </Button>
          <Button type="primary">Grafik</Button>
        </div>
      </Form.Provider>
    </div>
  );
}
