import React from "react";

import "../../App.css";

const DataqualityIntro = () => {
  return (
    <React.Fragment>
      <section id="dataquality_intro">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <h1>Datenqualitätsindikatoren</h1>
            </div>
            <div className="col-1">
              <p>
                Bitte geben Sie die Datenqualitätsindikatoren gemäß Ihrer
                Auswertung ein.
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

export default DataqualityIntro;
