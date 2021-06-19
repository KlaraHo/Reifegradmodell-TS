import { Button, Form, Divider, Card } from "antd";
import React from "react";
import { TableRow } from "./TableRowSource";
import { TableRowTargetvalue } from "./TableRowTargetvalue";
import { TableRowAggregation } from "./TableRowAggregation";
import { CSV } from "../CSV";

export function Table(props: {
  title: string;
  sourceTitle: string;
  sourceInputPlaceholder: string;
  description: React.ReactNode;
  backgroundColor: string;
  columns: string[];
  resultTitle: string;
  resultInitials: string;
}) {
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
              {column}
            </span>
          );
        })}

        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>Aggregation</span>
      </div>
      <Form
        initialValues={{}}
        onFinish={(values) => {
          console.error(values);
          // TODO: Sum up values, etc.
        }}
        style={{ marginTop: 24 }}
      >
        <TableRow columns={props.columns} row={1} sourceInputPlaceholder={props.sourceInputPlaceholder}/>
        <TableRow columns={props.columns} row={2} sourceInputPlaceholder={props.sourceInputPlaceholder}/>
        <TableRow columns={props.columns} row={3} sourceInputPlaceholder={props.sourceInputPlaceholder}/>
        <TableRow columns={props.columns} row={4} sourceInputPlaceholder={props.sourceInputPlaceholder}/>
        <TableRow columns={props.columns} row={5} sourceInputPlaceholder={props.sourceInputPlaceholder}/>
        <TableRow columns={props.columns} row={6} sourceInputPlaceholder={props.sourceInputPlaceholder}/>
        <TableRow columns={props.columns} row={7} sourceInputPlaceholder={props.sourceInputPlaceholder}/>
        <TableRow columns={props.columns} row={8} sourceInputPlaceholder={props.sourceInputPlaceholder}/>
        <TableRow columns={props.columns} row={9} sourceInputPlaceholder={props.sourceInputPlaceholder}/>
        <TableRow columns={props.columns} row={10} sourceInputPlaceholder={props.sourceInputPlaceholder}/>
        <TableRow columns={props.columns} row={11} sourceInputPlaceholder={props.sourceInputPlaceholder}/>
        <TableRow columns={props.columns} row={12} sourceInputPlaceholder={props.sourceInputPlaceholder}/>
        <TableRow columns={props.columns} row={13} sourceInputPlaceholder={props.sourceInputPlaceholder}/>
        <TableRow columns={props.columns} row={14} sourceInputPlaceholder={props.sourceInputPlaceholder}/>
        <TableRow columns={props.columns} row={15} sourceInputPlaceholder={props.sourceInputPlaceholder}/>

        <Divider />

        <TableRowAggregation columns={props.columns} row={16} />
        <TableRowTargetvalue columns={props.columns} row={17} rowTitle={"Sollwert"} />

        <div style={{ justifyContent: "center", marginTop: 16 }}>
          <Card style={{ width: 300, margin: "auto" }} title={props.resultTitle}>
            <p style={{ margin: 0 }}>{props.resultInitials}</p>
          </Card>
        </div>

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
