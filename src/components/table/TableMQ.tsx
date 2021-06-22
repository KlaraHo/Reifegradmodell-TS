import { Button, Form } from "antd";
import Grid from "antd/lib/card/Grid";
import React from "react";
import { TableMQRow } from "./TableMQRow";
import { CSV } from "../CSV";

export function TableMQ(props: {
  title: string;
  description: React.ReactNode;
  backgroundColor: string;
  columns: string[];
  resultTitle: string;
  resultInitials: string;
}) {
  return (
    <div
      style={{
        textAlign: "center",
        background: props.backgroundColor,
        padding: 40,
        marginTop: 40,
        backgroundColor: "#cceeff"
      }}
    >
      <h1 style={{ textTransform: "uppercase" }}>{props.title}</h1>
      <p>{props.description}</p>
      <CSV />
      {/* Überschriften */}
      <div
        style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: `repeat(${props.columns.length}, 1fr)`,
          justifyItems: "center",
          columnGap: 16,
          rowGap: 4
        }}
      >
        {props.columns.map((column, index) => {
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
        {/* <TableRowsGroup name="Maschinenpersadsafgoire">
          <TableRow columns={props.columns} row={1} sourceInputPlaceholder={props.sourceInputPlaceholder} />
          <TableRow columns={props.columns} row={1} sourceInputPlaceholder={props.sourceInputPlaceholder} />
          <TableRow columns={props.columns} row={1} sourceInputPlaceholder={props.sourceInputPlaceholder} />
        </TableRowsGroup> */}
        {/* Tabelle
        Wie kann ich Maschinenperspektive über mehrere Zeilen bauen?
        Wie kann ich die Rows, weil sie nicht immer gleich sind, dynamisch bauen?
        Macht es hier überhaupt Sinn? */}

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="text" danger style={{ marginRight: 16 }}>
            Zurücksetzen
          </Button>
          <Button type="primary" htmlType="submit" style={{ marginRight: 16 }}>
            Berechnen
          </Button>
          <Button type="primary">Grafik</Button>
        </div>
      </Form>
    </div>
  );
}
