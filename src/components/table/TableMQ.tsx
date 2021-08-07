import { Button, Form, Card } from "antd";
import React, { Props } from "react";
import { CSV } from "../CSV";
import { TableMQPerspective } from "./TableMQPerspective";

export function TableMQ(props: {
  title: string;
  description: React.ReactNode;
  backgroundColor: string;
  columns: string[];
  resultTitle: string;
  resultInitials: string;
  maturityWeight: number;
  tableID: string;
}) {
  const [aggregationPerspective1, setAggregationPerspective1] = React.useState<number>(0);
  const [aggregationPerspective2, setAggregationPerspective2] = React.useState<number>(0);
  const [aggregationPerspective3, setAggregationPerspective3] = React.useState<number>(0);
  const [aggregationPerspective4, setAggregationPerspective4] = React.useState<number>(0);
  const [mqMetric, setMqMetric] = React.useState<number>(0);

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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${props.columns.length}, 1fr)`,
          justifyItems: "center",
          columnGap: 16,
          marginTop: 40
        }}
      >
        {props.columns.map((column, index) => {
          return (
            <span
              style={{ textDecoration: "underline", fontWeight: "bold", marginLeft: 5, marginRight: 5 }}
              key={index}
            >
              {column}
            </span>
          );
        })}
      </div>

      <Form.Provider
        onFormChange={(name, info) => {
          let mqMetric =
            (aggregationPerspective1 + aggregationPerspective2 + aggregationPerspective3 + aggregationPerspective4) / 4;
          setMqMetric(mqMetric);
        }}
      >
        <div style={{ marginTop: 24 }}>
          <TableMQPerspective
            perspective={"Maschinenperspektive"}
            tableID={props.tableID}
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
          />

          <TableMQPerspective
            perspective={"Prozessperspektive"}
            tableID={props.tableID}
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
            kpiRowCount={1}
            defaultValueName={["PS,ugep", "PI Name 1", "PI Name 2", "PI Name 3"]}
            defaultValueTarget={[15]}
            piRowCount={3}
            defaultValuePIName={"PI Name"}
            tableLegend={[{ shortcut: "PS,ugep", name: "geleistete Personenstunden der ungeplanten Instandhaltung" }]}
            onAggregationChange={(value) => {
              setAggregationPerspective4(value);
            }}
          />
        </div>
      </Form.Provider>

      <Card style={{ width: 300, margin: "auto" }} title={props.resultTitle}>
        <span style={{ margin: 0 }}>
          {props.resultInitials} = {mqMetric.toFixed(2)}
        </span>
      </Card>
    </div>
  );
}
