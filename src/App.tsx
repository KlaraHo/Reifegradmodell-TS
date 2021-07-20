import React from "react";

import Introbox from "./components/Introbox";
import Result from "./components/Result";

import "./App.css";
import { Table } from "./components/table/Table";
import { TableMQ } from "./components/table/TableMQ";
import Footer from "./components/Footer";

function App() {
  const [weightedMetricDQ, setWeightedMetricDQ] = React.useState<number>(0);
  const [weightedMetricIQ, setWeightedMetricIQ] = React.useState<number>(0);
  const [weightedMetricKQ, setWeightedMetricKQ] = React.useState<number>(0);
  const [weightedMetricMQ, setWeightedMetricMQ] = React.useState<number>(0);

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
        rowsCount={5}
        tableID="dq"
        tableLegend={[]}
        maturityWeight={0.36}
        onQualityLevelChange={(value) => {
          setWeightedMetricDQ(value);
        }}
      />

      <Table
        title="Informationsqualitätsindikatoren"
        sourceTitle="Informationsquellen"
        sourceInputPlaceholder="Infoquelle"
        description={
          <>
            Bitte geben Sie die Informationsqualitätsindikatoren gemäß Ihrer Auswertung ein.
            <br /> Es werden Zahlen mit zwei Nachkommastellen zwischen Null und Eins akzeptiert.
          </>
        }
        backgroundColor="#dbf1ff"
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
        rowsCount={5}
        tableID="iq"
        tableLegend={[]}
        maturityWeight={0.23}
        onQualityLevelChange={(value) => {
          setWeightedMetricIQ(value);
        }}
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
          { name: "BnKQ,k", weight: 0.18 },
          { name: "EnKQ,k", weight: 0.31 },
          { name: "LeKQ,k", weight: 0.31 },
          { name: "ZwKQ", weight: 0.21 }
        ]}
        resultTitle="Ergebnis Wissensqualität:"
        resultInitials="KQ"
        rowsCount={4}
        tableID="kq"
        tableLegend={[
          { shortcut: "BnKQ,k", name: "Bildungsniveau eines Mitarbeiters" },
          { shortcut: "EnKQ,k", name: "Erfahrungsniveau eines Mitarbeiters" },
          { shortcut: "LeKQ,k", name: "Leistungsniveau eines Mitarbeiters" },
          { shortcut: "ZwKQ", name: "Zweckmäßigkeit eines IT-Systems zur Wissensbereitstellung" }
        ]}
        maturityWeight={0.28}
        onQualityLevelChange={(value) => {
          setWeightedMetricKQ(value);
        }}
      />

      <TableMQ
        title="Instandhaltungsqualitätsindikatoren"
        description={
          <>
            Bitte geben Sie die Instandhaltungsqualitätsindikatoren gemäß Ihrer Auswertung ein.
            <br /> Es werden Zahlen mit zwei Nachkommastellen zwischen Null und Eins akzeptiert.
          </>
        }
        backgroundColor="#dbf1ff"
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
        maturityWeight={0.13}
        // hier noch Funktion für weighted einfügen
      />

      <Result maturityLevel={weightedMetricDQ + weightedMetricIQ + weightedMetricKQ + weightedMetricMQ} />
      <Footer />
    </>
  );
}

export default App;
