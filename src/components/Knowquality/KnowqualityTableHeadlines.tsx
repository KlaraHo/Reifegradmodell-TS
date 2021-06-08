import React from "react";

import "../../App.css";

const KnowqualityTableHeadlines = () => {
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
          <h1>EnKQ,k</h1>
        </div>
        <div className="col-12">
          <h1>LeKQ,k</h1>
        </div>
        <div className="col-12">
          <h1>ZwKQ,l</h1>
        </div>
        <div className="col-12">
          <h1>BnKQ,k</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default KnowqualityTableHeadlines;
