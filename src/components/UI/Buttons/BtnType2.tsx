import React from "react";

const BtnType2 = (props: any) => {
  return (
    <button className="btn_type_2" type={props.type || "button"}>
      {props.children}
    </button>
  );
};

export default BtnType2;
