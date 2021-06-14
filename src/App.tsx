import React from "react";

import Introbox from "./components/Introbox";
import CSV from "./components/CSV";
import Dataquality from "./components/Dataquality/Dataquality";
import Infoquality from "./components/Infoquality/Infoquality";
import Knowquality from "./components/Knowquality/Knowquality";
import Maintenancequality from "./components/Maintenancequality/Maintenancequality";
import Result from "./components/Result";

import "./App.css";
import { Table } from "./components/table/Table";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Introbox />
      <CSV />
      <Table
        title="Datenqualitätsindikatoren"
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
      />

      {/* <Table
        title="Informationsqualitätsindikatoren"
        description={
          <>
            Bitte geben Sie die Informationsqualitätsindikatoren gemäß Ihrer Auswertung ein.
            <br /> Es werden Zahlen mit zwei Nachkommastellen zwischen Null und Eins akzeptiert.
          </>
        }
        backgroundColor="#e6f5ff"
      />

      <Table
        title="Datenqualitätsindikatoren"
        description={
          <>
            Bitte geben Sie die Datenqualitätsindikatoren gemäß Ihrer Auswertung ein.
            <br /> Es werden Zahlen mit zwei Nachkommastellen zwischen Null und Eins akzeptiert.
          </>
        }
        backgroundColor="#e6f5ff"
      /> */}
      {/* <Table />
      <Table /> */}
      <Dataquality />
      <Infoquality />
      <Knowquality />
      <Maintenancequality />
      <Result />
      <Footer />
    </>
  );
}

export default App;
