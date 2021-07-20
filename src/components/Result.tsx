import React from "react";
import { Button, Card } from "antd";

const Result = (props: { maturityLevel: number }) => {
  return (
    <React.Fragment>
      <section style={{ marginTop: 40, textAlign: "center", backgroundColor: "#e6f5ff", padding: 40 }}>
        <div className="row">
          <div>
            <h1 style={{ fontSize: "2rem", textTransform: "uppercase", textDecoration: "underline" }}>Ergebnis</h1>
          </div>
          <div>
            <p>Hier wird der berechnete Reifegrad gemäß Ihrer Angaben aufgeführt.</p>
          </div>
          <div style={{ marginTop: 40 }}>
            <Card title="Ihr momentaner Reifegrad" style={{ width: 300, margin: "auto" }}>
              <p>%</p>
              <p>=</p>
              <p>Reifegrad</p>
              <p>{props.maturityLevel}</p>
            </Card>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Result;
