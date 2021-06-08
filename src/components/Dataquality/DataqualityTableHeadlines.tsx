import React from "react";

import "../../App.css";

const DataqualityTableHeadlines = () => {
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
          <h1>Provenienz</h1>
        </div>
        <div className="col-12">
          <h1>Vollständigkeit</h1>
        </div>
        <div className="col-12">
          <h1>Verfügbarkeit</h1>
        </div>
        <div className="col-12">
          <h1>Granularität</h1>
        </div>
        <div className="col-12">
          <h1>Einzigartigkeit</h1>
        </div>
        <div className="col-12">
          <h1>System-Konsistenz</h1>
        </div>
        <div className="col-12">
          <h1>Zugänglichkeit</h1>
        </div>
        <div className="col-12">
          <h1>Pünktlichkeit</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DataqualityTableHeadlines;
