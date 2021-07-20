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
          rowGap: 4,
          marginBottom: 24,
          marginLeft: 4,
          marginRight: 4
        }}
      >
        <div
          style={{
            border: "1px solid black",
            gridColumn: 1,
            gridRow: "1/6",
            padding: 8
          }}
        >
          Maschinenperspektive
        </div>
        <TableMQRow
          gridRow="1"
          isKpiRow
          step="KPI"
          defaultValueName="Ratio ungeplante Stillstandzeit"
          defaultValueTarget={20}
          tableID={props.tableID}
        />
        <TableMQRow
          gridRow="2"
          isKpiRow
          step="KPI"
          defaultValueName="Overall Equipment Effectivenesss"
          defaultValueTarget={85}
          tableID={props.tableID}
        />
        <TableMQRow gridRow="3" isKpiRow={false} step="PI" tableID={props.tableID}/>
        <TableMQRow gridRow="4" isKpiRow={false} step="PI" tableID={props.tableID}/>
        <TableMQRow gridRow="5" isKpiRow={false} step="PI" tableID={props.tableID}/>
        <div style={{ border: "1px solid black", gridColumn: 8, gridRow: "1/6", padding: 8 }}>
          Platzhalter Aggregation
        </div>
      </Form>

      {/* Hier kommen die weiteren Perspektiven rein, wie oben nur mit anderen Inhalten */}
    </>
  );
}
