import { Button, Form, Divider, Card, Popconfirm, message } from "antd";
import React from "react";
import { TableRow } from "./TableRow";
import { TableRowTargetvalue } from "./TableRowTargetvalue";
import { TableRowAggregation } from "./TableRowAggregation";
import { CSV } from "../CSV";

export interface ITableColumn {
  name: string;
  weight: number;
}

export function Table(props: {
  title: string;
  sourceTitle: string;
  sourceInputPlaceholder: string;
  description: React.ReactNode;
  backgroundColor: string;
  columns: ITableColumn[];
  resultTitle: string;
  resultInitials: string;
  rowsCount: number;
  tableID: string;
}) {
  const initialSums = [];
  for (let i = 0; i < props.columns.length; i++) {
    initialSums.push(0);
  }

  const [sums, setSums] = React.useState<number[]>(initialSums);
  const [reset, setReset] = React.useState<number>(0);

  // Calculate DQ, IQ, KQ
  // Quality Indictor weights definition
  const ko_dq = 0.18;
  const sk_dq = 0.16;
  const ve_dq = 0.14;
  const vo_dq = 0.13;
  const gr_dq = 0.09;
  const va_dq = 0.09;
  const pr_dq = 0.08;
  const pue_dq = 0.07;
  const zu_dq = 0.06;
  const ei_dq = 0.02;

  const ko_iq = 0.2;
  const vo_iq = 0.15;
  const ak_iq = 0.14;
  const va_iq = 0.14;
  const pue_iq = 0.12;
  const er_iq = 0.09;
  const zw_iq = 0.07;
  const in_iq = 0.06;
  const pg_iq = 0.02;

  const en_kq = 0.31;
  const le_kq = 0.31;
  const zw_kq = 0.21;
  const bn_kq = 0.18;

  const calculateDQ = () => {
    let total = 0;

    props.columns.forEach((column, index) => {
      sums.forEach((sum) => {
        total += column.weight * sum;
      });
    });

    return total;
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
              {column.name}
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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            for (const [_formName, form] of Object.entries(info.forms)) {
              if (form.getFieldValue("active")) {
                const formColumnValue = form.getFieldValue(column.name);

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
        }}
      >
        {Array.from({ length: props.rowsCount }, (x, i) => i).map((row) => {
          return (
            <TableRow
              columns={props.columns}
              row={row}
              sourceInputPlaceholder={props.sourceInputPlaceholder}
              tableID={props.tableID}
              reset={reset}
            />
          );
        })}

        <Divider />

        <TableRowAggregation values={sums.map((i) => i.toFixed(2))} tableID={props.tableID} />
        <TableRowTargetvalue columns={props.columns} row={props.rowsCount + 1} rowTitle={"Sollwert"} />

        <div style={{ justifyContent: "center", marginTop: 16 }}>
          <Card style={{ width: 300, margin: "auto" }} title={props.resultTitle}>
            <p style={{ margin: 0 }}>
              {props.resultInitials} {calculateDQ()}
            </p>
          </Card>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Popconfirm
            title="Sicher?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              setReset(reset + 1);
              for (let i = 0; i < props.columns.length; i++) {
                sums[i] = 0;
              }
              message.success("Daten gelöscht! Yeiy");
            }}
          >
            <Button type="text" danger style={{ marginRight: 16 }}>
              Zurücksetzen
            </Button>
          </Popconfirm>
          {/* <Button type="primary" htmlType="submit" style={{ marginRight: 16 }}>
            Berechnen
          </Button> */}
          <Button type="primary">Grafik</Button>
        </div>
      </Form.Provider>
    </div>
  );
}
