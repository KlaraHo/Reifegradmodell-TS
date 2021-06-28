import React from "react";
import { TableMQRowKPI } from "./TableMQRowKPI";
import { TableMQRowPI } from "./TableMQRowPI";

export function TableMQPerspective(props: any) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "20% 1fr 20%",
          gridTemplateRows: 5,
          justifyContent: "center",
          columnGap: 16,
          rowGap: 4
        }}
      >
        <div style={{ border: "1px solid black", gridColumn: 1, gridRow: "1/6" }}>Maschinenperspektive</div>
        <TableMQRowKPI indicatorTitle="Ratio ungeplante Sillstandzeit" targetValue="20%" gridRow="1" />
        <TableMQRowKPI indicatorTitle="Overall Equipment Efectiveness" targetValue="85%" gridRow="2" />
        <TableMQRowPI gridRow="3" />
        <TableMQRowPI gridRow="4" />
        <TableMQRowPI gridRow="5" />
        <div style={{ border: "1px solid black", gridColumn: 8, gridRow: "1/6" }}>Platzhalter Aggregation</div>
      </div>

      {/* Hier kommen die weiteren Perspektiven rein, wie oben nur mit anderen Inhalten */}
    </>
  );
}
