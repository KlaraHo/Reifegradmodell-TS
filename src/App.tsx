import React from "react";

import Introbox from "./components/Introbox";
import Result from "./components/Result";

import "./App.css";
import { Table } from "./components/table/Table";
import { TableMQ } from "./components/table/TableMQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Introbox />
      <Table
        title="Datenqualitätsindikatoren"
        sourceTitle="Datenquellen"
        sourceInputPlaceholder="Datenquelle"
        description={
          <>
            Bitte geben Sie die Datenqualitätsindikatoren gemäß Ihrer Auswertung ein.
            <br /> Es werden Zahlen mit zwei Nachkommastellen zwischen Null und Eins akzeptiert.
          </>
        }
        backgroundColor="#e6f5ff"
        columns={[
          { name: "Korrektheit", weight: 0.18 },
          { name: "Validität", weight: 0.09 },
          { name: "Provenienz", weight: 0.08 },
          { name: "Vollständigkeit", weight: 0.13 },
          { name: "Verfügbarkeit", weight: 0.14 },
          { name: "Granularität", weight: 0.09 },
          { name: "Einzigartigkeit", weight: 0.02 },
          { name: "System-Konsistenz", weight: 0.16 },
          { name: "Zugänglichkeit", weight: 0.06 },
          { name: "Pünktlichkeit", weight: 0.07 }
        ]}
        resultTitle="Ergebnis Datenqualität:"
        resultInitials="DQ"
        rowsCount={15}
        tableID="dq"
      />

      <Table
        title="Informationsqualitätsindikatoren"
        sourceTitle="Informationsquellen"
        sourceInputPlaceholder="Informationsquelle"
        description={
          <>
            Bitte geben Sie die Informationsqualitätsindikatoren gemäß Ihrer Auswertung ein.
            <br /> Es werden Zahlen mit zwei Nachkommastellen zwischen Null und Eins akzeptiert.
          </>
        }
        backgroundColor="#cceeff"
        columns={[
          { name: "Korrektheit", weight: 0.2 },
          { name: "Validität", weight: 0.14 },
          { name: "Erklärbarkeit", weight: 0.09 },
          { name: "Aktualität", weight: 0.14 },
          { name: "Prägnanz", weight: 0.02 },
          { name: "Vollständigkeit", weight: 0.15 },
          { name: "Pünktlichkeit", weight: 0.12 },
          { name: "Zweckmäßigkeit", weight: 0.07 },
          { name: "Informationsfluss", weight: 0.06 }
        ]}
        resultTitle="Ergebnis Informationsqualität:"
        resultInitials="IQ"
        rowsCount={15}
        tableID="iq"
      />

      <Table
        title="Wissensqualitätsindikatoren"
        sourceTitle="Wissensquellen"
        sourceInputPlaceholder="Wissensquelle"
        description={
          <>
            Bitte geben Sie die Wissensqualitätsindikatoren gemäß Ihrer Auswertung ein.
            <br /> Es werden Zahlen mit zwei Nachkommastellen zwischen Null und Eins akzeptiert.
          </>
        }
        backgroundColor="#e6f5ff"
        columns={[
          { name: "Bildungsniveau eines Mitarbeiters", weight: 0.18 },
          { name: "Erfahrungsniveau eines Mitarbeiters", weight: 0.31 },
          { name: "Leistungsniveau eines Mitarbeiters", weight: 0.31 },
          { name: "Zweckmäßigkeit eines IT-Systems zur Wissensbereitstellung", weight: 0.21 }
        ]}
        resultTitle="Ergebnis Wissensqualität:"
        resultInitials="KQ"
        rowsCount={4}
        tableID="kq"
      />

      <TableMQ
        title="Instandhaltungsqualitätsindikatoren"
        description={
          <>
            Bitte geben Sie die Instandhaltungsqualitätsindikatoren gemäß Ihrer Auswertung ein.
            <br /> Es werden Zahlen mit zwei Nachkommastellen zwischen Null und Eins akzeptiert.
          </>
        }
        backgroundColor="#e6f5ff"
        columns={[
          "Perspektive",
          "An/Aus",
          "Stufe",
          "Kennzahl",
          "Ist, [%]",
          "Soll, [%]",
          "Erfüllungsgrad",
          "Aggregation"
        ]}
        resultTitle="Ergebnis Instandhaltungsqualität:"
        resultInitials="MQ"
      />

      <Result />
      <Footer />
    </>
  );
}

export default App;
