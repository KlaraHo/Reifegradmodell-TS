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
            <br /> Es werden Zahlen mit zwei Nachkommastellen zwischen Null und Eins akzeptiert. <br /> Quellen können
            selbst benannt werden.
          </>
        }
        backgroundColor="#e6f5ff"
        columns={[
          { name: "Korrektheit", weight: 0.175925925925926 },
          { name: "Validität", weight: 0.087037037037037 },
          { name: "Provenienz", weight: 0.0796296296296296 },
          { name: "Vollständigkeit", weight: 0.133333333333333 },
          { name: "Verfügbarkeit", weight: 0.137037037037037 },
          { name: "Granularität", weight: 0.0925925925925926 },
          { name: "Einzigartigkeit", weight: 0.0166666666666667 },
          { name: "System-Konsistenz", weight: 0.155555555555556 },
          { name: "Zugänglichkeit", weight: 0.0555555555555556 },
          { name: "Pünktlichkeit", weight: 0.0666666666666667 }
        ]}
        resultTitle="Ergebnis Datenqualität:"
        resultInitials="DQ"
        rowsCount={15}
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
            <br /> Es werden Zahlen mit zwei Nachkommastellen zwischen Null und Eins akzeptiert. <br /> Quellen können
            selbst benannt werden.
          </>
        }
        backgroundColor="#dbf1ff"
        columns={[
          { name: "Korrektheit", weight: 0.203703703703704 },
          { name: "Validität", weight: 0.136574074074074 },
          { name: "Erklärbarkeit", weight: 0.0902777777777778 },
          { name: "Aktualität", weight: 0.141203703703704 },
          { name: "Prägnanz", weight: 0.0231481481481481 },
          { name: "Vollständigkeit", weight: 0.150462962962963 },
          { name: "Pünktlichkeit", weight: 0.12037037037037 },
          { name: "Zweckmäßigkeit", weight: 0.0694444444444444 },
          { name: "Informationsfluss", weight: 0.0648148148148148 }
        ]}
        resultTitle="Ergebnis Informationsqualität:"
        resultInitials="IQ"
        rowsCount={15}
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
            <br /> Es werden Zahlen mit zwei Nachkommastellen zwischen Null und Eins akzeptiert. <br /> Quellen können
            selbst benannt werden.
          </>
        }
        backgroundColor="#e6f5ff"
        columns={[
          { name: "BnKQ,k", weight: 0.180555555555556 },
          { name: "EnKQ,k", weight: 0.305555555555556 },
          { name: "LeKQ,k", weight: 0.305555555555556 },
          { name: "ZwKQ", weight: 0.208333333333333 }
        ]}
        resultTitle="Ergebnis Wissensqualität:"
        resultInitials="KQ"
        rowsCount={15}
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
            <br /> Für Prozentangaben werden ganze Zahlen zwischen Null und 100 akzeptiert.
            <br /> PI Kennzahlen können selbst benannt werden.
          </>
        }
        backgroundColor="#dbf1ff"
        columns={["An/Aus", "Stufe", "Kennzahl", "Ist, [%, €]", "Soll, [%, €]", "Erfüllungsgrad"]}
        resultTitle="Ergebnis Instandhaltungsqualität:"
        resultInitials="MQ"
        maturityWeight={0.13}
        tableID="mq"
        onQualityLevelChange={(value) => {
          setWeightedMetricMQ(value);
        }}
      />

      <Result maturityLevel={weightedMetricDQ + weightedMetricIQ + weightedMetricKQ + weightedMetricMQ} />
      <Footer />
    </>
  );
}

export default App;
