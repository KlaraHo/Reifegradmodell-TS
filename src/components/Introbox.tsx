import React from "react";

import Logo from "./img/TU-Wien-Logo.png";

import "../App.css";

const Introbox = () => {
  return (
    <React.Fragment>
      <section id="intro_box">
        <div className="container">
          <div className="row">
            <img src={Logo} alt="TU Wien Logo" />
          </div>

          <div className="row">
            <h1>Reifegradmodell</h1>
            <h2>der Instandhaltung</h2>
          </div>
          <div className="row">
            <p>
              Hier ist ein Infotext zum Reifegradmodell.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rerum itaque, maiores ut nesciunt
              perferendis at dolorem laudantium nostrum reprehenderit, harum amet corrupti sequi ab enim quae autem illo
              alias.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Introbox;
