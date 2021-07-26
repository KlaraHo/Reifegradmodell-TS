import { Button, Form, Card } from "antd";
import React from "react";
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

      <Form.Provider>
        <div style={{ marginTop: 24 }}>
          <TableMQPerspective
            perspective={"Maschinenperspektive"}
            tableID={props.tableID}
            kpiRowCount={2}
            defaultValueName={["Ratio ungeplante Stillstandzeit", "Overall Equipment Effectiveness"]}
            defaultValueTarget={[20, 85]}
            piRowCount={3}
          />

          <TableMQPerspective
            perspective={"Prozessperspektive"}
            tableID={props.tableID}
            kpiRowCount={3}
            defaultValueName={[
              "Ratio Instandhaltungsaufträge ungeplant",
              "Erfüllungsgrad ungeplanter Instandhaltungsaufträge",
              "Erfüllungsgrad geplanter Instandhaltungsaufträge"
            ]}
            defaultValueTarget={[10, 75, 90]}
            piRowCount={3}
          />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="text" danger style={{ marginRight: 16 }}>
              Zurücksetzen
            </Button>
          </div>
        </div>
      </Form.Provider>

      <Card style={{ width: 300, margin: "auto" }} title={props.resultTitle}>
        <span style={{ margin: 0 }}>{props.resultInitials} = Platzhalter</span>
      </Card>
    </div>
  );
}
