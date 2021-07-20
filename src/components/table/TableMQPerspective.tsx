import React from "react";
import { TableMQRowPI } from "./TableMQRowPI";

export function TableMQPerspective(props: any) {
  return (
    <>
      <div
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
        <TableMQRowPI gridRow="1" isKpiRow />
        <TableMQRowPI gridRow="2" />
        <TableMQRowPI gridRow="3" />
        <TableMQRowPI gridRow="4" />
        <TableMQRowPI gridRow="5" />
        <div style={{ border: "1px solid black", gridColumn: 8, gridRow: "1/6" }}>Platzhalter Aggregation</div>
      </div>

      {/* Hier kommen die weiteren Perspektiven rein, wie oben nur mit anderen Inhalten */}
    </>
  );
}
