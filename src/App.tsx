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
          "Korrektheit",
          "Validität",
          "Provenienz",
          "Vollständigkeit",
          "Verfügbarkeit",
          "Granularität",
          "Einzigartigkeit",
          "System-Konsistenz",
          "Zugänglichkeit",
          "Pünktlichkeit"
        ]}
        resultTitle="Ergebnis Datenqualität:"
        resultInitials="DQ ="
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
          "Korrektheit",
          "Validität",
          "Erklärbarkeit",
          "Aktualität",
          "Prägnanz",
          "Vollständigkeit",
          "Pünktlichkeit",
          "Zweckmäßigkeit",
          "Informationsfluss"
        ]}
        resultTitle="Ergebnis Informationsqualität:"
        resultInitials="IQ ="
        rowsCount={10}
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
          "Bildungsniveau eines Mitarbeiters",
          "Erfahrungsniveau eines Mitarbeiters",
          "Leistungsnieveau eines Mitarbeiters",
          "Zweckmäßigkeit eines IT-Systems zur Wissensbereitstellung"
        ]}
        resultTitle="Ergebnis Wissensqualität:"
        resultInitials="KQ ="
        rowsCount={10}
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
        resultInitials="MQ ="
      />

      <Result />
      <Footer />
    </>
  );
}

export default App;
