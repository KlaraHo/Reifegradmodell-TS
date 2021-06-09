import React from "react";
import { Button } from "antd";

const BtnType1 = (props: any) => {
  return (
    <Button className="btn_type_1" type={props.type || "button"}>
      {props.children}
    </Button>
  );
};

export default BtnType1;
