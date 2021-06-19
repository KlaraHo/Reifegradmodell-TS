import React from "react";
import { Button } from "antd";

const Result = () => {
  return (
    <React.Fragment>
      <section style={{ marginTop: 40, textAlign: "center" }}>
  
          <div className="row">
            <div>
              <h1 style={{ fontSize: "2rem", textTransform: "uppercase", textDecoration: "underline" }}>Ergebnis</h1>
            </div>
            <div>
              <p>Hier wird der berechnete Reifegrad gemäß Ihrer Angaben aufgeführt.</p>
            </div>
            <div style={{ fontWeight: "bold" }}>Ergebnisfeld</div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
              <Button type="primary" style={{ marginRight: 16 }}>
                Berechnen
              </Button>
            </div>
          </div>
      </section>
    </React.Fragment>
  );
};

export default Result;
