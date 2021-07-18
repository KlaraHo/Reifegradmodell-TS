import { Button, Form, Divider, Card, Popconfirm, message } from "antd";
import React from "react";
import { TableRow } from "./TableRow";
import { TableRowTargetvalue } from "./TableRowTargetvalue";
import { TableRowAggregation } from "./TableRowAggregation";
import { CSV } from "../CSV";
import Chart from "react-apexcharts";
import { WarningOutlined, BorderOutlined } from "@ant-design/icons";

export interface ITableColumn {
  name: string;
  weight: number;
}

export interface tableLegend {
  shortcut: string;
  name: string;
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
  tableLegend: tableLegend[];
}) {
  const initialSums: number[] = [];
  for (let i = 0; i < props.columns.length; i++) {
    initialSums.push(0);
  }

  const initialSumsRows: number[] = [];
  for (let i = 0; i < props.rowsCount; i++) {
    initialSumsRows.push(0);
  }

  const initialRowDescriptions: string[] = [];
  for (let i = 0; i < props.rowsCount; i++) {
    initialRowDescriptions.push(`${props.sourceInputPlaceholder} ${i + 1}`);
  }

  const [sums, setSums] = React.useState<number[]>(initialSums);
  const [rowSums, setRowSums] = React.useState<number[]>(initialSumsRows);
  const [rowDescriptions, setRowDescription] = React.useState<string[]>(initialRowDescriptions);
  const [reset, setReset] = React.useState<number>(0);
  const [targetValues, setTargetValues] = React.useState<number[]>([]);

  // Calculate Metrics: DQ, IQ, KQ
  const calculateMetric = () => {
    let total = 0;

    sums.forEach((sum, index) => {
      const weightedSum = props.columns[index].weight * sum;

      total += weightedSum;
    });

    return total.toFixed(2);
  };



  // Metric Chart Categories
  let categoriesMetricChart = props.columns.map((a) => a.name);

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
        <span
          style={{
            fontWeight: "bold",
            textDecoration: "underline",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: " 100%"
          }}
        >
          {props.sourceTitle}
        </span>
        <span
          style={{
            fontWeight: "bold",
            textDecoration: "underline",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: " 100%"
          }}
        >
          An/Aus
        </span>
        {props.columns.map((column, index) => {
          return (
            <span
              style={{ fontWeight: "bold", overflow: "hidden", textOverflow: "ellipsis", width: " 100%" }}
              key={index}
            >
              {column.name}
            </span>
          );
        })}

        <span
          style={{
            fontWeight: "bold",
            textDecoration: "underline",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: " 100%"
          }}
        >
          Aggregation
        </span>
      </div>

      <Form.Provider
        onFormChange={(name, info) => {
          if (name === "targetValues") {
            const targetValuesForm = info.forms.targetValues;
            const targetValues: number[] = [];

            props.columns.forEach((column, index) => {
              const formTargetValue = targetValuesForm.getFieldValue(props.tableID + "_targetValue_" + column.name);
              if (formTargetValue !== undefined) {
                targetValues[index] = formTargetValue;
              } else {
                targetValues[index] = 0;
              }
            });

            setTargetValues(targetValues);
          } else {
            const sums: number[] = [];

            for (let i = 0; i < props.columns.length; i++) {
              sums[i] = 0;
            }

            // Calculate Aggregation Columns
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

            // Calculate Row Aggregation for Chart
            const newRowSums = [];
            const newRowDescriptions = [];

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            for (const [formName, form] of Object.entries(info.forms)) {
              if (formName !== "targetValues") {
                let rowColumn = 0;
                let rowColumnWeights = 0;

                if (form.getFieldValue("active")) {
                  props.columns.forEach((column, index) => {
                    const formColumnValue = form.getFieldValue(column.name);

                    if (Number.isFinite(formColumnValue)) {
                      if (formColumnValue <= 0.5) {
                        rowColumn += formColumnValue * 1.3;
                        rowColumnWeights += 1.3;
                      } else {
                        rowColumn += formColumnValue;
                        rowColumnWeights += 1;
                      }
                      rowSums[index] = rowColumn / rowColumnWeights;
                    }
                  });

                  newRowDescriptions.push(form.getFieldValue("description"));

                  if (rowColumnWeights) {
                    newRowSums.push(rowColumn / rowColumnWeights);
                  } else {
                    newRowSums.push(0);
                  }
                }
              }
            }

            setRowSums(newRowSums);
            setRowDescription(newRowDescriptions);
          }
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
          reset={reset}
        />

        <div style={{ display: "flex", justifyContent: "flex-end", marginRight: 12 }}>
          <Popconfirm
            icon={<WarningOutlined style={{ color: "red" }} />}
            title="Wollen Sie die Werte dieses Abschnitts wirklich zurücksetzen?"
            okText="OK"
            cancelText="Abbrechen"
            onConfirm={() => {
              setReset(reset + 1);
              for (let i = 0; i < props.columns.length; i++) {
                sums[i] = 0;
              }
              message.success("Daten wurden erfolgreich zurückgesetzt!");
            }}
          >
            <Button type="text" danger style={{ marginRight: 16, marginTop: 24 }}>
              Zurücksetzen
            </Button>
          </Popconfirm>
        </div>

        <div style={{ textAlign: "center", marginTop: 4 }}>
          {props.tableLegend.map((term, index) => {
            return (
              <span style={{ fontSize: 10, overflow: "hidden", textOverflow: "ellipsis", width: " 100%" }} key={index}>
                {term.shortcut + "..." + term.name}
              </span>
            );
          })}
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
                categories: categoriesMetricChart,
                labels: {
                  show: true,
                  style: {
                    colors: ["#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000"],
                    fontSize: "12px"
                  }
                }
              },
              yaxis: {
                forceNiceScale: true,
                min: 0,
                max: 1,
                labels: {
                  maxWidth: 1,
                  style: {
                    colors: ["#000"]
                  },
                  formatter: function (val, index) {
                    return val.toFixed(2);
                  }
                }
              },
              legend: {
                markers: {
                  fillColors: ["#ff8e03", "#0a9bf0"]
                }
              },
              stroke: {
                show: true,
                colors: ["#ff8e03", "#0a9bf0"]
              },
              fill: {
                colors: ["#ff8e03", "#0a9bf0"],
                opacity: 0.1
              },
              markers: {
                size: 4,
                colors: ["#ff8e03", "#0a9bf0"],
                hover: {
                  size: 6
                }
              },
              plotOptions: {
                radar: {
                  size: 140,
                  polygons: {
                    strokeColors: "#333",
                    connectorColors: "#333"
                  }
                }
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
              { name: `${props.resultInitials} Sollwerte`, data: targetValues }
            ]}
            type="radar"
            width="700"
          />

          <Card style={{ width: 300, margin: "auto" }} title={props.resultTitle}>
            <span style={{ margin: 0 }}>
              {props.resultInitials} = {calculateMetric()}
            </span>
            <span style={{ marginLeft: 8 }}><BorderOutlined style= {{color: "red" }} /></span>
          </Card>

          <Chart
            // Source Chart
            options={{
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: rowDescriptions,
                labels: {
                  show: true,
                  style: {
                    colors: [
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000"
                    ],
                    fontSize: "12px"
                  }
                }
              },
              yaxis: {
                forceNiceScale: true,
                min: 0,
                max: 1,
                labels: {
                  maxWidth: 1,
                  style: {
                    colors: ["#000"]
                  },
                  formatter: function (val, index) {
                    return val.toFixed(2);
                  }
                }
              },
              legend: {
                showForSingleSeries: true,
                markers: {
                  fillColors: ["#4EEE94"]
                }
              },
              stroke: {
                show: true,
                colors: ["#4EEE94"]
              },
              fill: {
                colors: ["#4EEE94"],
                opacity: 0.1
              },
              markers: {
                size: 4,
                colors: ["#4EEE94"],
                hover: {
                  size: 6
                }
              },
              plotOptions: {
                radar: {
                  size: 140,
                  polygons: {
                    strokeColors: "#333",
                    connectorColors: "#333"
                  }
                }
              },
              title: {
                text: `${props.sourceTitle} Diagramm`
              }
            }}
            series={[
              {
                name: `${props.resultInitials} Quellen`,
                data: rowSums
              }
            ]}
            type="radar"
            width="700"
          />
        </div>
      </Form.Provider>
    </div>
  );
}
