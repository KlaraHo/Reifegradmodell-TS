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

      <Form
        initialValues={{}}
        onFinish={(values) => {
          console.error(values);
          // TODO: Sum up values, etc.
        }}
        style={{ marginTop: 24 }}
      >
        <TableMQPerspective
          perspective={["Maschinenperspektive", "Prozessperspektive", "Kostenperspektive", "Ressourcenperspektive"]}
          tableID={props.tableID}
        />


        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="text" danger style={{ marginRight: 16 }}>
            Zurücksetzen
          </Button>
        </div>
      </Form>

      <Card style={{ width: 300, margin: "auto" }} title={props.resultTitle}>
        <span style={{ margin: 0 }}>{props.resultInitials} = Platzhalter</span>
      </Card>
    </div>
  );
}
