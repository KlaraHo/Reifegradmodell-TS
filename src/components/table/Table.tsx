import { Button, Form } from "antd";
import React from "react";
import { TableRow } from "./TableRow";

export function Table(props: {
  title: string;
  description: React.ReactNode;
  backgroundColor: string;
  columns: string[];
}) {
  return (
    <div style={{ textAlign: "center", background: props.backgroundColor, padding: 40, marginTop: 40 }}>
      <h1 style={{ textTransform: "uppercase" }}>{props.title}</h1>
      <p>{props.description}</p>
      <div
        style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: `repeat(${2 + props.columns.length}, 1fr)`,
          justifyItems: "center",
          columnGap: 16,
          rowGap: 4
        }}
      >
        <span style={{ fontWeight: "bold" }}>Datenquellen</span>
        <span style={{ fontWeight: "bold" }}>An/Aus</span>
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
        <TableRow columns={props.columns} row={1} />
        <TableRow columns={props.columns} row={2} />
        <TableRow columns={props.columns} row={3} />
        <TableRow columns={props.columns} row={4} />
        <div style={{ marginTop: 40, display: "flex", justifyContent: "flex-end" }}>
          <Button type="text" danger style={{ marginRight: 16 }}>
            Zurücksetzen
          </Button>
          <Button type="primary" htmlType="submit" style={{ marginRight: 16 }}>
            Aggregation
          </Button>
          <Button type="primary">Grafik</Button>
        </div>
      </Form>
    </div>
  );
}
