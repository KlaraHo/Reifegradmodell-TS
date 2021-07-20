import React from "react";
import { Card } from "antd";
import { StarFilled } from "@ant-design/icons";

const Result = (props: { maturityLevel: number }) => {
  const calculateMaturityStage = () => {
    let maturityStage = "nicht berechnet";
    if (props.maturityLevel <= 0.15) {
      return (maturityStage = "I");
    } else if (0.15 < props.maturityLevel && props.maturityLevel <= 0.55) {
      return (maturityStage = "II");
    } else if (0.56 < props.maturityLevel && props.maturityLevel <= 0.86) {
      return (maturityStage = "III");
    } else if (0.87 < props.maturityLevel && props.maturityLevel <= 1) {
      return (maturityStage = "IV");
    } else {
      return maturityStage;
    }
  };

  const colorIcon = () => {
    let iconColor = "#FFFFFF";
    if (props.maturityLevel <= 0.15) {
      return (iconColor = "#FF0000");
    } else if (0.15 < props.maturityLevel && props.maturityLevel <= 0.55) {
      return (iconColor = "#ff8e03");
    } else if (0.56 < props.maturityLevel && props.maturityLevel <= 0.86) {
      return (iconColor = "#FFE000");
    } else if (0.87 < props.maturityLevel && props.maturityLevel <= 1) {
      return (iconColor = "#4EEE94");
    } else {
      return iconColor;
    }
  };

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
              <p>{(props.maturityLevel * 100).toFixed(2)} %</p>
              <span style={{ fontStyle: "italic", fontWeight: "bold", fontSize: 16 }}>
                Reifegrad {calculateMaturityStage()}
              </span>
              <span style={{ marginLeft: 8 }}>
                <StarFilled style={{ color: colorIcon() }} />
              </span>
            </Card>
            <div style={{ fontSize: 10, overflow: "hidden", textOverflow: "ellipsis", width: " 100%", marginTop: 16 }}>
              RG I ... 0-15%, RG II ... 16-55%, RG III ... 56-86%, RG IV ... 87-100%
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Result;
