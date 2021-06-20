import React from "react";

import Logo from "./img/TU-Wien-Logo.png";

import "../App.css";

const Introbox = () => {
  return (
    <>
      <section style={{ textAlign: "center" }}>
        <div className="container">
          <div className="row">
            <img
              style={{ float: "left", width: 200, height: "auto", marginTop: "1rem" }}
              src={Logo}
              alt="TU Wien Logo"
            />
          </div>

          <div className="row">
            <h1 style={{ fontSize: "4rem", textTransform: "uppercase" }}>Reifegradmodell</h1>
            <h2 style={{ marginTop: "1rem" }}>der Instandhaltung</h2>
          </div>
          <div className="row">
            <p style={{ marginTop: "3rem" }}>
              Hier ist ein Infotext zum Reifegradmodell.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rerum itaque, maiores ut nesciunt
              perferendis at dolorem laudantium nostrum reprehenderit, harum amet corrupti sequi ab enim quae autem illo
              alias.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introbox;
