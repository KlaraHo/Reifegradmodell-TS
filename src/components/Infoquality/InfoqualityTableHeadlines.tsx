import React from "react";

import "../../App.css";

const InfoqualityTableHeadlines = () => {
  return (
    <React.Fragment>
      <div className="row table_headlines">
        <div className="col-12">
          <h1>Datenquellen</h1>
        </div>
        <div className="col-12">
          <h1>An/Aus</h1>
        </div>
        <div className="col-12">
          <h1>Korrektheit</h1>
        </div>
        <div className="col-12">
          <h1>Validität</h1>
        </div>
        <div className="col-12">
          <h1>Erklärbarkeit</h1>
        </div>
        <div className="col-12">
          <h1>Aktualität</h1>
        </div>
        <div className="col-12">
          <h1>Prägnanz</h1>
        </div>
        <div className="col-12">
          <h1>Vollständigkeit</h1>
        </div>
        <div className="col-12">
          <h1>Pünktlichkeit</h1>
        </div>
        <div className="col-12">
          <h1>Zweckmäßigkeit</h1>
        </div>
        <div className="col-12">
          <h1>Informationsfluss</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InfoqualityTableHeadlines;
