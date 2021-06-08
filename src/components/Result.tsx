import React from "react";

const Result = () => {
  return (
    <React.Fragment>
      <section id="result_box">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <h1>Ergebnis</h1>
            </div>
            <div className="col-1">
              <p>
                Hier wird der berechnete Reifegrad gemäß Ihrer Angaben
                aufgeführt.
              </p>
            </div>
            <div id="result"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Result;
