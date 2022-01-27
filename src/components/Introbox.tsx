import React from "react";

import Logo from "./img/TU-Wien-Logo.png";

import "../App.css";

const Introbox = () => {
  return (
    <>
      <section style={{ textAlign: "center" }}>
        <div className="container">
          <div className="row">
            <img
              style={{ float: "left", width: 200, height: "auto", marginTop: "1rem" }}
              src={Logo}
              alt="TU Wien Logo"
            />
          </div>

          <div className="row">
            <h1 style={{ fontSize: "4rem", textTransform: "uppercase", marginBottom: 0 }}>Reifegradmodell</h1>
            <h2 style={{ marginTop: 8 }}>der Instandhaltung</h2>
          </div>
          <div className="row">
            <p style={{ marginTop: 24 }}>
              Mit diesem Tool ist es möglich den unternehmenseigenen Reifegrad der Instandhaltung zu berechnen.
              <br />
              Es werden vier Faktoren: Datenqualität D<sub>Q</sub>, Informationsqualität I<sub>Q</sub>, Wissensqualität
              K<sub>Q</sub> und Instandhaltungsqualität M<sub>Q</sub> zur Berechnung herangezogen. <br />
              Visuell unterstützt werden die Ergebnisse mit interaktiven Diagrammen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introbox;
