import React from "react";
import { Form } from "antd";
import { TableMQRow } from "./TableMQRow";

export function TableMQPerspective(props: any) {
  return (
    <>
      <Form
        style={{
          display: "grid",
          gridTemplateColumns: "repeat (3, 1fr)",
          justifyContent: "center",
          columnGap: 16,
          rowGap: 4,
          marginBottom: 24
        }}
      >
        <div style={{ border: "1px solid black", gridColumn: 1, gridRow: "1/6" }}>Maschinenperspektive</div>
        <TableMQRow gridRow="1" isKpiRow step="KPI" defaultValue="Ratio ungeplante Stillstandzeit" />
        <TableMQRow gridRow="2" isKpiRow step="KPI" defaultValue="Overall Equipment Effectivenesss" />
        <TableMQRow gridRow="3" isKpiRow={false} step="PI" />
        <TableMQRow gridRow="4" isKpiRow={false} step="PI" />
        <TableMQRow gridRow="5" isKpiRow={false} step="PI" />
        <div style={{ border: "1px solid black", gridColumn: 8, gridRow: "1/6" }}>Platzhalter Aggregation</div>
      </Form>

      {/* Hier kommen die weiteren Perspektiven rein, wie oben nur mit anderen Inhalten */}
    </>
  );
}
