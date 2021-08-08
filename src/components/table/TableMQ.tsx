import { Form, Card } from "antd";
import React from "react";
import { CSV } from "../CSV";
import { TableMQPerspective } from "./TableMQPerspective";
import { StarFilled } from "@ant-design/icons";

export function TableMQ(props: {
  title: string;
  description: React.ReactNode;
  backgroundColor: string;
  columns: string[];
  resultTitle: string;
  resultInitials: string;
  maturityWeight: number;
  tableID: string;
  onQualityLevelChange(value: number): void;
}) {
  const [aggregationPerspective1, setAggregationPerspective1] = React.useState<number>(0);
  const [aggregationPerspective2, setAggregationPerspective2] = React.useState<number>(0);
  const [aggregationPerspective3, setAggregationPerspective3] = React.useState<number>(0);
  const [aggregationPerspective4, setAggregationPerspective4] = React.useState<number>(0);
  const [mqMetric, setMqMetric] = React.useState<number>(0);

  const colorIcon = () => {
    let mqMetric = 0;
    let iconColor = "#FFFFFF";

    mqMetric =
      (aggregationPerspective1 + aggregationPerspective2 + aggregationPerspective3 + aggregationPerspective4) / 4;
    if (mqMetric <= 0.5) {
      return (iconColor = "#FF0000");
    } else if (0.51 < mqMetric && mqMetric <= 0.66) {
      return (iconColor = "#ff8e03");
    } else if (0.67 < mqMetric && mqMetric <= 0.82) {
      return (iconColor = "#FFE000");
    } else if (0.83 < mqMetric && mqMetric <= 1.03) {
      return (iconColor = "#4EEE94");
    } else {
      return iconColor;
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: props.backgroundColor,
        padding: 40,
        marginTop: 40
      }}
    >
      <h1 style={{ textTransform: "uppercase" }}>{props.title}</h1>
      <p>{props.description}</p>
      <CSV />

      <Form.Provider
        onFormChange={(name, info) => {
          let mqMetric =
            (aggregationPerspective1 + aggregationPerspective2 + aggregationPerspective3 + aggregationPerspective4) / 4;
          setMqMetric(mqMetric);



          props.onQualityLevelChange(mqMetric * props.maturityWeight);

        }}
      >
        <div style={{ marginTop: 24 }}>
          <TableMQPerspective
            perspective={"Maschinenperspektive"}
            tableID={props.tableID}
            columns={props.columns}
            kpiRowCount={2}
            defaultValueName={["Rss,ugep", "OEE", "PI Name 1", "PI Name 2", "PI Name 3"]}
            defaultValueTarget={[20, 85]}
            piRowCount={3}
            defaultValuePIName={"PI Name"}
            tableLegend={[
              { shortcut: "Rss,ugep", name: "Ratio ungeplante Stillstandzeit" },
              { shortcut: "OEE", name: "Overall Equipment Effectiveness" }
            ]}
            onAggregationChange={(value) => {
              setAggregationPerspective1(value);
            }}
            onReset={(value) => {
              setMqMetric(0)
            }}
          />

          {/* <TableMQPerspective
            perspective={"Prozessperspektive"}
            tableID={props.tableID}
            columns={props.columns}
            kpiRowCount={3}
            defaultValueName={["Riha,ugep", "EGiha,ugep", "EGiha,gep", "PI Name 1", "PI Name 2", "PI Name 3"]}
            defaultValueTarget={[10, 75, 90]}
            piRowCount={3}
            defaultValuePIName={"PI Name"}
            tableLegend={[
              { shortcut: "Riha,ugep", name: "Ratio Instandhaltungsaufträge ungeplant" },
              { shortcut: "EGiha,ugep", name: "Erfüllungsgrad ungeplanter Instandhaltungsaufträge" },
              { shortcut: "EGiha,gep", name: "Erfüllungsgrad geplanter Instandhaltungsaufträge" }
            ]}
            onAggregationChange={(value) => {
              setAggregationPerspective2(value);
            }}
          />
          <TableMQPerspective
            perspective={"Kostenperspektive"}
            tableID={props.tableID}
            columns={props.columns}
            kpiRowCount={2}
            defaultValueName={["Rihk,ugep", "Rihk,personal", "PI Name 1", "PI Name 2", "PI Name 3"]}
            defaultValueTarget={[15, 10]}
            piRowCount={3}
            defaultValuePIName={"PI Name"}
            tableLegend={[
              { shortcut: "Rihk,ugep", name: "Ratio Instandhaltungskosten ungeplant" },
              { shortcut: "Rihk,personal", name: "Instandhaltungspersonalksoten-Ratio" }
            ]}
            onAggregationChange={(value) => {
              setAggregationPerspective3(value);
            }}
          />
          <TableMQPerspective
            perspective={"Ressourcenperspektive"}
            tableID={props.tableID}
            columns={props.columns}
            kpiRowCount={1}
            defaultValueName={["PS,ugep", "PI Name 1", "PI Name 2", "PI Name 3"]}
            defaultValueTarget={[15]}
            piRowCount={3}
            defaultValuePIName={"PI Name"}
            tableLegend={[{ shortcut: "PS,ugep", name: "geleistete Personenstunden der ungeplanten Instandhaltung" }]}
            onAggregationChange={(value) => {
              setAggregationPerspective4(value);
            }}
          /> */}
        </div>
      </Form.Provider>

      <Card style={{ width: 300, margin: "auto" }} title={props.resultTitle}>
        <span style={{ margin: 0 }}>
          {props.resultInitials} = {mqMetric.toFixed(2)}
        </span>
        <span style={{ marginLeft: 8 }}>
          <StarFilled style={{ color: colorIcon() }} />
        </span>
      </Card>
    </div>
  );
}
