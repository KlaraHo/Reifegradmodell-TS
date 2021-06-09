import React from "react";

import "../App.css";

import DownloadIcon from "./assets/download.png";
import UploadIcon from "./assets/upload.png";

const CSV = () => {
  return (
    <React.Fragment>
      <section id="csv">
        <div className="row">
          <div className="col-8">
            <span>.csv</span>
            <button className="btn_type_3">
              <img className="csv_img_btn" src={UploadIcon} alt="CSV Upload" />
            </button>
            <button className="btn_type_3">
              <img className="csv_img_btn" src={DownloadIcon} alt="CSV Download" />
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CSV;
