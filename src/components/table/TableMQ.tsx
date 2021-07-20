import { Button, Form } from "antd";
import React from "react";
import { CSV } from "../CSV";
import { TableMQPerspective } from "./TableMQPerspective";

export function TableMQ(props: {
  title: string;
  description: React.ReactNode;
  backgroundColor: string;
  outerColumns: string[];
  innerColumns: string[];
  resultTitle: string;
  resultInitials: string;
  maturityWeight: number;
  tableID: string
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
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: `repeat(${props.outerColumns.length}, 1fr)`,
          justifyItems: "center",
          columnGap: 16
        }}
      >
        {props.outerColumns.map((column, index) => {
          return (
            <span style={{ fontWeight: "bold" }} key={index}>
              {column}
            </span>
          );
        })}
      </div>
      <div
        style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: `repeat(${props.innerColumns.length}, 1fr)`,
          justifyItems: "center",
          columnGap: 16
        }}
      >
        {props.innerColumns.map((column, index) => {
          return (
            <span style={{ fontWeight: "bold" }} key={index}>
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
        <TableMQPerspective />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="text" danger style={{ marginRight: 16 }}>
            Zurücksetzen
          </Button>
        </div>
      </Form>
    </div>
  );
}
