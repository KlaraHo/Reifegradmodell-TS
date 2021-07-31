import { Divider, Form } from "antd";
import React, { Props } from "react";
import Chart from "react-apexcharts";
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
  defaultValuePIName: string;
  tableLegend: tableLegend[];
  // onPerspectiveChange(value: number): void;
}) {
  const initialMQRowDescriptions: string[] = [];
  for (let i = 0; i < props.kpiRowCount + props.piRowCount; i++) {
    initialMQRowDescriptions.push(`${props.defaultValueName} ${i + 1}`);
  }

  const initialFulfilment: number[] = [];
  for (let i = 0; i < props.kpiRowCount + props.piRowCount; i++) {
    initialFulfilment.push(0);
  }

  const [sum, setSum] = React.useState<number>(0);
  const [sumKpi, setSumKpi] = React.useState<number>(0);
  const [sumPi, setSumPi] = React.useState<number>(0);
  const [MQRowDescriptions, setMQRowDescriptions] = React.useState<string[]>(initialMQRowDescriptions);
  const [fulfilment, setFulfilment] = React.useState<number[]>(initialFulfilment);

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
                if (form.getFieldValue("step") === "KPI") {
                  const actualValueKPI = form.getFieldValue("actual_value") || 0;
                  const targetValueKPI = form.getFieldValue("target_value");

                  let qi =
                    !Number.isFinite(targetValueKPI) || targetValueKPI === 0
                      ? 1
                      : ((actualValueKPI / targetValueKPI) as number);

                  if (qi <= 0.5) {
                    totalKpi += qi * 1.3;
                    totalWeightsKpi += 1.3;
                  } else {
                    totalKpi += qi;
                    totalWeightsKpi += 1;
                  }

                  console.log("KPI", totalKpi, "Weights KPI", totalWeightsKpi);

                  if (totalWeightsKpi) {
                    setSumKpi(totalKpi / totalWeightsKpi);
                  }
                } else if (form.getFieldValue("step") === "PI") {
                  const actualValuePI = form.getFieldValue("actual_value") || 0;
                  const targetValuePI = form.getFieldValue("target_value");

                  let qi =
                    !Number.isFinite(targetValuePI) || targetValuePI === 0
                      ? 1
                      : ((actualValuePI / targetValuePI) as number);

                  if (qi <= 0.5) {
                    totalPi += qi * 1.3;
                    totalWeightsPi += 1.3;
                  } else {
                    totalPi += qi;
                    totalWeightsPi += 1;
                  }
                  console.log("PI", totalPi, totalWeightsPi);

                  if (totalWeightsPi) {
                    setSumPi(totalPi / totalWeightsPi);
                  }
                }
              }

              const newFulfilment: number[] = [];
              newFulfilment.push(form.getFieldValue("fulfilment"));
              console.log("Fulfilment", newFulfilment);
              setFulfilment(newFulfilment);

              // const newMQRowDescriptions = []; extra for schleife für desciption jeder row?
              // newMQRowDescriptions.push(form.getFieldValue("description"));
            }
          }

          setSum(sumKpi * 0.66 + sumPi * 0.33);
          // setMQRowDescriptions(newMQRowDescriptions);

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
          <div style={{ marginTop: 24 }}>
            <Chart
              // Perspective Chart
              options={{
                chart: {
                  id: "basic-bar"
                },
                xaxis: {
                  categories: MQRowDescriptions,
                  labels: {
                    show: true,
                    style: {
                      colors: ["#000", "#000", "#000", "#000", "#000", "#000"],
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
                    fillColors: ["#FFE000"]
                  }
                },
                stroke: {
                  show: true,
                  colors: ["#FFE000"]
                },
                fill: {
                  colors: ["#FFE000"],
                  opacity: 0.1
                },
                markers: {
                  size: 4,
                  colors: ["#FFE000"],
                  hover: {
                    size: 6
                  }
                },
                plotOptions: {
                  radar: {
                    size: 140,
                    polygons: {
                      strokeColors: "#9D9F9E",
                      connectorColors: "#9D9F9E"
                    }
                  }
                },
                title: {
                  text: `${props.perspective} Diagramm`
                }
              }}
              series={[
                {
                  name: `KPI & PI Quellen`,
                  data: fulfilment
                }
              ]}
              type="radar"
              width="700"
              // key={reset + "b"}
            />
          </div>
          <Divider />
        </div>
      </Form.Provider>
    </>
  );
}
