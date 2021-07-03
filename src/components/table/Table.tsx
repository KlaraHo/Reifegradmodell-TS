import { Button, Form, Divider, Card, Popconfirm, message } from "antd";
import React from "react";
import { TableRow } from "./TableRow";
import { TableRowTargetvalue } from "./TableRowTargetvalue";
import { TableRowAggregation } from "./TableRowAggregation";
import { CSV } from "../CSV";
import Chart from "react-apexcharts";
import { WarningOutlined } from "@ant-design/icons";

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

  // Calculate Metrics: DQ, IQ, KQ
  const calculateMetric = () => {
    let total = 0;

    // console.log(sums); -> sums are fine here
    // sums are multiplied 4x right now -> we only need one

    props.columns.forEach((column, index) => {
      sums.forEach((sum) => {
        total += column.weight * sum;
        console.log(total);
      });

      // this also does not work

      // for (let i = 0; i < 1; i++) {
      //   total += column.weight[] * sums[i]
      //   console.log(total);
      // }
    });

    return total.toFixed(2);
  };

  // Metric Chart Categories
  let categoriesMetricChart = props.columns.map((a) => a.name);
  console.log(categoriesMetricChart);

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

          // Stuff for KPI Chart
          

          // Stuff for source Chart
          let sources: string[] = [];

          for (let i = 0; i < props.rowsCount; i++) {
            // code goes here, fill array with description (placeholder Field)
          }

          //   for (let j = 0; j < props.rowsCount; j++) {
          //   for (const [_formName, form] of Object.entries(info.forms)) {
          //     if (form.getFieldValue("active")) {
          //       const sourceName = form.getFieldValue(description) // placeholder Field from Row

          //       if (sourceName === undefined) {

          //       }
          //     }
          //   }
          // }


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
        <TableRowTargetvalue
          columns={props.columns}
          row={props.rowsCount + 1}
          rowTitle={"Sollwert"}
          tableID={props.tableID}
        />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Popconfirm
            icon={<WarningOutlined style={{ color: "red" }} />}
            title="Wollen Sie die Werte dieser Tabelle wirklich zurücksetzen?"
            okText="OK"
            cancelText="Abbrechen"
            onConfirm={() => {
              setReset(reset + 1);
              for (let i = 0; i < props.columns.length; i++) {
                sums[i] = 0;
              }
              message.success("Tabelle wurde erfolgreich zurückgesetzt!");
            }}
          >
            <Button type="text" danger style={{ marginRight: 16, marginTop: 24 }}>
              Zurücksetzen
            </Button>
          </Popconfirm>
        </div>

        <Divider />

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 40 }}>
          <Chart
            // Metric Chart
            options={{
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: categoriesMetricChart
              },
              yaxis: {
                forceNiceScale: true,
              },
              title: {
                text: `${props.resultInitials} Indikatoren Diagramm`
              }
            }}
            series={[
              {
                name: `${props.resultInitials} Indikatoren`,
                data: sums
              },
              { name: `${props.resultInitials} Sollwerte`, data: sums }
            ]}
            type="radar"
            width="800"
          />

          <Card style={{ width: 300, margin: "auto" }} title={props.resultTitle}>
            <p style={{ margin: 0 }}>
              {props.resultInitials} = {calculateMetric()}
            </p>
          </Card>

          <Chart
            // Source Chart
            options={{
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
              },
              title: {
                text: `${props.sourceTitle} Diagramm`
              }
            }}
            series={[
              {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
              }
            ]}
            type="radar"
            width="800"
          />
        </div>
      </Form.Provider>
    </div>
  );
}
