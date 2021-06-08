import React from "react";

import "../../App.css";

const KnowqualityIntro = () => {
  return (
    <React.Fragment>
      <section id="knowquality_intro">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <h1>Wissensqualitätsindikatoren</h1>
            </div>
            <div className="col-1">
              <p>
                Bitte geben Sie die Wissensqualitätsindikatoren gemäß Ihrer
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

export default KnowqualityIntro;
