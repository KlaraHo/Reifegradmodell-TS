import React from "react";

import '../../App.css';

const MaintenancequalityIntro = () => {
  return (
    <React.Fragment>
      <section id="maintenancequality_intro">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <h1>Instandhaltungsqualitätsindikatoren</h1>
            </div>
            <div className="col-1">
              <p>
                Bitte geben Sie die Instandhaltungsqualitätsindikatoren gemäß
                Ihrer Auswertung ein.
                <br /> Es werden Zahlen mit zwei Nachkommastellen zwischen Null
                und Eins akzeptiert.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MaintenancequalityIntro;
