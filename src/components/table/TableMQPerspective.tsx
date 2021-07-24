import React from "react";
import { Divider, Form, Card } from "antd";
import { TableMQRow } from "./TableMQRow";

export function TableMQPerspective(props: { perspective: string[]; tableID: string }) {
  return (
    <>
      <Form
        style={{
          // display: "grid",
          gridTemplateColumns: "repeat (20%, 1fr, 20%)",
          justifyContent: "center",
          rowGap: 4,
          marginBottom: 24,
          marginLeft: 4,
          marginRight: 4
        }}
      >
        {/* Maschinenperspektive */}
        <div
          style={{
            marginBottom: 4,
            fontWeight: "bold",
            textDecoration: "underline"
          }}
        >
          {props.perspective[0]}
        </div>

        <div>
          <TableMQRow
            gridRow="1"
            isKpiRow
            step="KPI"
            defaultValueName="Ratio ungeplante Stillstandzeit"
            defaultValueTarget={20}
            tableID={props.tableID}
            perspective={props.perspective[0]}
          />
          <TableMQRow
            gridRow="2"
            isKpiRow
            step="KPI"
            defaultValueName="Overall Equipment Effectiveness"
            defaultValueTarget={85}
            tableID={props.tableID}
            perspective={props.perspective[0]}
          />
          <TableMQRow
            gridRow="3"
            isKpiRow={false}
            step="PI"
            tableID={props.tableID}
            perspective={props.perspective[0]}
          />
          <TableMQRow
            gridRow="4"
            isKpiRow={false}
            step="PI"
            tableID={props.tableID}
            perspective={props.perspective[0]}
          />
          <TableMQRow
            gridRow="5"
            isKpiRow={false}
            step="PI"
            tableID={props.tableID}
            perspective={props.perspective[0]}
          />
        </div>
        <div style={{ marginTop: 20 }}>Aggregation:</div>
        <Divider />

        {/* Prozessperspektive */}
        <div
          style={{
            marginBottom: 4,
            fontWeight: "bold",
            textDecoration: "underline"
          }}
        >
          {props.perspective[1]}
        </div>

        <div>
          <TableMQRow
            gridRow="1"
            isKpiRow
            step="KPI"
            defaultValueName="Ratio Instandhaltungsaufträge ungeplant"
            defaultValueTarget={10}
            tableID={props.tableID}
            perspective={props.perspective[1]}
          />
          <TableMQRow
            gridRow="2"
            isKpiRow
            step="KPI"
            defaultValueName="Erfüllungsgrad ungeplanter Instandhaltungsaufträge"
            defaultValueTarget={75}
            tableID={props.tableID}
            perspective={props.perspective[1]}
          />
          <TableMQRow
            gridRow="2"
            isKpiRow
            step="KPI"
            defaultValueName="Erfüllungsgrad geplanter Instandhaltungsaufträge"
            defaultValueTarget={90}
            tableID={props.tableID}
            perspective={props.perspective[1]}
          />
          <TableMQRow
            gridRow="3"
            isKpiRow={false}
            step="PI"
            tableID={props.tableID}
            perspective={props.perspective[1]}
          />
          <TableMQRow
            gridRow="4"
            isKpiRow={false}
            step="PI"
            tableID={props.tableID}
            perspective={props.perspective[1]}
          />
          <TableMQRow
            gridRow="5"
            isKpiRow={false}
            step="PI"
            tableID={props.tableID}
            perspective={props.perspective[1]}
          />
        </div>
        <div style={{ marginTop: 20 }}>Aggregation:</div>
        <Divider />

        {/* Kostenperspektive */}
        <div
          style={{
            marginBottom: 4,
            fontWeight: "bold",
            textDecoration: "underline"
          }}
        >
          {props.perspective[2]}
        </div>

        <div>
          <TableMQRow
            gridRow="1"
            isKpiRow
            step="KPI"
            defaultValueName="Ratio ungeplante Instandhaltungskosten"
            defaultValueTarget={15}
            tableID={props.tableID}
            perspective={props.perspective[2]}
          />
          <TableMQRow
            gridRow="2"
            isKpiRow
            step="KPI"
            defaultValueName="Instandhaltungskosten-Ratio"
            defaultValueTarget={10}
            tableID={props.tableID}
            perspective={props.perspective[2]}
          />
          <TableMQRow
            gridRow="3"
            isKpiRow={false}
            step="PI"
            tableID={props.tableID}
            perspective={props.perspective[2]}
          />
          <TableMQRow
            gridRow="4"
            isKpiRow={false}
            step="PI"
            tableID={props.tableID}
            perspective={props.perspective[2]}
          />
          <TableMQRow
            gridRow="5"
            isKpiRow={false}
            step="PI"
            tableID={props.tableID}
            perspective={props.perspective[2]}
          />
        </div>
        <div style={{ marginTop: 20 }}>Aggregation:</div>
        <Divider />

        {/* Resssourcenperspektive */}
        <div
          style={{
            marginBottom: 4,
            fontWeight: "bold",
            textDecoration: "underline"
          }}
        >
          {props.perspective[3]}
        </div>

        <div>
          <TableMQRow
            gridRow="1"
            isKpiRow
            step="KPI"
            defaultValueName="Geleistete Personenstunden Ratio"
            defaultValueTarget={15}
            tableID={props.tableID}
            perspective={props.perspective[3]}
          />
          <TableMQRow
            gridRow="3"
            isKpiRow={false}
            step="PI"
            tableID={props.tableID}
            perspective={props.perspective[3]}
          />
          <TableMQRow
            gridRow="4"
            isKpiRow={false}
            step="PI"
            tableID={props.tableID}
            perspective={props.perspective[3]}
          />
          <TableMQRow
            gridRow="5"
            isKpiRow={false}
            step="PI"
            tableID={props.tableID}
            perspective={props.perspective[3]}
          />
        </div>
        <div style={{ marginTop: 20 }}>Aggregation:</div>
        <Divider />
      </Form>
    </>
  );
}
