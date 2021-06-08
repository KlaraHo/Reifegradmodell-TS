import React from "react";

import "../../App.css";

const MaintenancequalityTableHeadlines = () => {
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
          <h1>KPI</h1>
        </div>
        <div className="col-12">
          <h1>PI</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MaintenancequalityTableHeadlines;
