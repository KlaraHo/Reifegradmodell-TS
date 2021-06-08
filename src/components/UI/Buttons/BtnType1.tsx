import React from "react";

const BtnType1 = (props) => {
  return (
    <button className="btn_type_1" type={props.type || "button"}>
      {props.children}
    </button>
  );
};

export default BtnType1;
