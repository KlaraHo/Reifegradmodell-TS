// dq = dataquality (Datenqualität)
// tv = target value (Sollwert)

import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import DataqualityTableHeadlines from "./DataqualityTableHeadlines";
import BtnType1 from "../UI/Buttons/BtnType1";
import BtnType2 from "../UI/Buttons/BtnType2";

import "../../App.css";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <label htmlFor={props.id || props.name} className="screenreader">
        {label}
      </label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </React.Fragment>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const decimalRegExp = /^(0(\,[0-9]{1,2})?|1(\.0{1,2})?)$/;

const DataqualityTable = () => {
  return (
    <React.Fragment>
      <section id="dataquality_table">
        <div className="container">
          <DataqualityTableHeadlines />

          <Formik
            // INITIAL VALUES
            initialValues={{
              datesource_dq01: "",
              checkbox_dq01: false,
              dq01_01: "",
              dq01_02: "",
              dq01_03: "",
              dq01_04: "",
              dq01_05: "",
              dq01_06: "",
              dq01_07: "",
              dq01_08: "",
              dq01_09: "",
              dq01_10: "",

              datesource_dq02: "",
              checkbox_dq02: false,
              dq02_01: "",
              dq02_02: "",
              dq02_03: "",
              dq02_04: "",
              dq02_05: "",
              dq02_06: "",
              dq02_07: "",
              dq02_08: "",
              dq02_09: "",
              dq02_10: "",

              datesource_dq03: "",
              checkbox_dq03: false,
              dq03_01: "",
              dq03_02: "",
              dq03_03: "",
              dq03_04: "",
              dq03_05: "",
              dq03_06: "",
              dq03_07: "",
              dq03_08: "",
              dq03_09: "",
              dq03_10: "",

              datesource_dq04: "",
              checkbox_dq04: false,
              dq04_01: "",
              dq04_02: "",
              dq04_03: "",
              dq04_04: "",
              dq04_05: "",
              dq04_06: "",
              dq04_07: "",
              dq04_08: "",
              dq04_09: "",
              dq04_10: "",

              datesource_dq05: "",
              checkbox_dq05: false,
              dq05_01: "",
              dq05_02: "",
              dq05_03: "",
              dq05_04: "",
              dq05_05: "",
              dq05_06: "",
              dq05_07: "",
              dq05_08: "",
              dq05_09: "",
              dq05_10: "",

              datesource_dq06: "",
              checkbox_dq06: false,
              dq06_01: "",
              dq06_02: "",
              dq06_03: "",
              dq06_04: "",
              dq06_05: "",
              dq06_06: "",
              dq06_07: "",
              dq06_08: "",
              dq06_09: "",
              dq06_10: "",

              datesource_dq07: "",
              checkbox_dq07: false,
              dq07_01: "",
              dq07_02: "",
              dq07_03: "",
              dq07_04: "",
              dq07_05: "",
              dq07_06: "",
              dq07_07: "",
              dq07_08: "",
              dq07_09: "",
              dq07_10: "",

              datesource_dq08: "",
              checkbox_dq08: false,
              dq08_01: "",
              dq08_02: "",
              dq08_03: "",
              dq08_04: "",
              dq08_05: "",
              dq08_06: "",
              dq08_07: "",
              dq08_08: "",
              dq08_09: "",
              dq08_10: "",

              datesource_dq09: "",
              checkbox_dq09: false,
              dq09_01: "",
              dq09_02: "",
              dq09_03: "",
              dq09_04: "",
              dq09_05: "",
              dq09_06: "",
              dq09_07: "",
              dq09_08: "",
              dq09_09: "",
              dq09_10: "",

              datesource_dq10: "",
              checkbox_dq10: false,
              dq10_01: "",
              dq10_02: "",
              dq10_03: "",
              dq10_04: "",
              dq10_05: "",
              dq10_06: "",
              dq10_07: "",
              dq10_08: "",
              dq10_09: "",
              dq10_10: "",

              datesource_dq11: "",
              checkbox_dq11: false,
              dq11_01: "",
              dq11_02: "",
              dq11_03: "",
              dq11_04: "",
              dq11_05: "",
              dq11_06: "",
              dq11_07: "",
              dq11_08: "",
              dq11_09: "",
              dq11_10: "",

              datesource_dq12: "",
              checkbox_dq12: false,
              dq12_01: "",
              dq12_02: "",
              dq12_03: "",
              dq12_04: "",
              dq12_05: "",
              dq12_06: "",
              dq12_07: "",
              dq12_08: "",
              dq12_09: "",
              dq12_10: "",

              datesource_dq13: "",
              checkbox_dq13: false,
              dq13_01: "",
              dq13_02: "",
              dq13_03: "",
              dq13_04: "",
              dq13_05: "",
              dq13_06: "",
              dq13_07: "",
              dq13_08: "",
              dq13_09: "",
              dq13_10: "",

              datesource_dq14: "",
              checkbox_dq14: false,
              dq14_01: "",
              dq14_02: "",
              dq14_03: "",
              dq14_04: "",
              dq14_05: "",
              dq14_06: "",
              dq14_07: "",
              dq14_08: "",
              dq14_09: "",
              dq14_10: "",

              datesource_dq15: "",
              checkbox_dq15: false,
              dq15_01: "",
              dq15_02: "",
              dq15_03: "",
              dq15_04: "",
              dq15_05: "",
              dq15_06: "",
              dq15_07: "",
              dq15_08: "",
              dq15_09: "",
              dq15_10: "",

              //  TARGET VALUES
              checkbox_tv_dq: false,
              tv_dq_01: "",
              tv_dq_02: "",
              tv_dq_03: "",
              tv_dq_04: "",
              tv_dq_05: "",
              tv_dq_06: "",
              tv_dq_07: "",
              tv_dq_08: "",
              tv_dq_09: "",
              tv_dq_10: "",
            }}

            // VALIDATION SCHEMA
            validationSchema={Yup.object({
              // LINE 1
              datasource_dq01: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq01: Yup.boolean(),
              dq01_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              dq01_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              dq01_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              dq01_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              dq01_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              dq01_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              dq01_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              dq01_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              dq01_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              dq01_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),

              // LINE 2
              datasource_dq02: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq02: Yup.boolean(),
              dq02_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq02_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq02_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq02_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq02_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq02_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq02_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq02_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq02_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq02_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 3
              datasource_dq03: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq03: Yup.boolean(),
              dq03_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq03_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq03_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq03_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq03_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq03_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq03_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq03_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq03_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq03_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 4
              datasource_dq04: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq04: Yup.boolean(),
              dq04_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq04_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq04_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq04_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq04_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq04_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq04_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq04_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq04_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq04_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 5
              datasource_dq05: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq05: Yup.boolean(),
              dq05_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq05_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq05_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq05_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq05_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq05_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq05_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq05_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq05_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq05_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 6
              datasource_dq06: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq06: Yup.boolean(),
              dq06_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq06_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq06_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq06_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq06_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq06_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq06_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq06_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq06_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq06_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 7
              datasource_dq07: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq07: Yup.boolean(),
              dq07_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq07_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq07_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq07_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq07_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq07_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq07_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq07_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq07_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq07_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 8
              datasource_dq08: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq08: Yup.boolean(),
              dq08_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq08_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq08_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq08_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq08_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq08_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq08_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq08_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq08_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq08_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 9
              datasource_dq09: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq09: Yup.boolean(),
              dq09_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq09_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq09_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq09_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq09_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq09_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq09_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq09_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq09_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq09_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 10
              datasource_dq10: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq10: Yup.boolean(),
              dq10_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq10_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq10_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq10_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq10_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq10_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq10_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq10_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq10_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq10_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 11
              datasource_dq11: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq11: Yup.boolean(),
              dq11_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq11_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq11_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq11_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq11_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq11_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq11_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq11_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq11_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq11_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 12
              datasource_dq12: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq12: Yup.boolean(),
              dq12_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq12_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq12_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq12_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq12_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq12_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq12_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq12_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq12_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq12_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 13
              datasource_dq13: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq13: Yup.boolean(),
              dq13_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq13_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq13_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq13_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq13_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq13_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq13_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq13_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq13_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq13_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 14
              datasource_dq14: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq14: Yup.boolean(),
              dq14_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq14_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq14_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq14_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq14_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq14_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq14_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq14_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq14_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq14_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 15
              datasource_dq15: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_dq15: Yup.boolean(),
              dq15_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq15_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq15_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq15_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq15_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq15_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq15_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq15_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq15_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              dq15_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

                // TARGET VALUES
                checkbox_tv_dq: Yup.boolean(),
                tv_dq_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
                tv_dq_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
                tv_dq_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
                tv_dq_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
                tv_dq_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
                tv_dq_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
                tv_dq_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
                tv_dq_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
                tv_dq_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
                tv_dq_10: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

            })}
            onSubmit={(values, { setSubmitting }, event) => {
              event.preventDefault();
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq01"
                    name="datasource_dq01"
                    type="text"
                    placeholder="Datenquelle 1"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq01" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq01_01" name="dq01_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq01_02" name="dq01_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq01_03" name="dq01_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq01_04" name="dq01_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq01_05" name="dq01_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq01_06" name="dq01_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq01_07" name="dq01_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq01_08" name="dq01_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq01_09" name="dq01_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq01_10" name="dq01_10" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq02"
                    name="datasource_dq02"
                    type="text"
                    placeholder="Datenquelle 2"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq02" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq02_01" name="dq02_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq02_02" name="dq02_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq02_03" name="dq02_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq02_04" name="dq02_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq02_05" name="dq02_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq02_06" name="dq02_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq02_07" name="dq02_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq02_08" name="dq02_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq02_09" name="dq02_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq02_10" name="dq02_10" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq03"
                    name="datasource_dq03"
                    type="text"
                    placeholder="Datenquelle 3"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq03" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq03_01" name="dq03_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq03_02" name="dq03_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq03_03" name="dq03_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq03_04" name="dq03_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq03_05" name="dq03_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq03_06" name="dq03_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq03_07" name="dq03_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq03_08" name="dq03_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq03_09" name="dq03_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq03_10" name="dq03_10" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq04"
                    name="datasource_dq04"
                    type="text"
                    placeholder="Datenquelle 4"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq04" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq04_01" name="dq04_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq04_02" name="dq04_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq04_03" name="dq04_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq04_04" name="dq04_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq04_05" name="dq04_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq04_06" name="dq04_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq04_07" name="dq04_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq04_08" name="dq04_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq04_09" name="dq04_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq04_10" name="dq04_10" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq05"
                    name="datasource_dq05"
                    type="text"
                    placeholder="Datenquelle 5"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq05" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq05_01" name="dq05_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq05_02" name="dq05_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq05_03" name="dq05_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq05_04" name="dq05_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq05_05" name="dq05_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq05_06" name="dq05_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq05_07" name="dq05_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq05_08" name="dq05_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq05_09" name="dq05_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq05_10" name="dq05_10" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq06"
                    name="datasource_dq06"
                    type="text"
                    placeholder="Datenquelle 6"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq06" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq06_01" name="dq06_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq06_02" name="dq06_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq06_03" name="dq06_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq06_04" name="dq06_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq06_05" name="dq06_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq06_06" name="dq06_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq06_07" name="dq06_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq06_08" name="dq06_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq06_09" name="dq06_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq06_10" name="dq06_10" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq07"
                    name="datasource_dq07"
                    type="text"
                    placeholder="Datenquelle 7"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq07" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq07_01" name="dq07_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq07_02" name="dq07_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq07_03" name="dq07_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq07_04" name="dq07_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq07_05" name="dq07_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq07_06" name="dq07_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq07_07" name="dq07_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq07_08" name="dq07_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq07_09" name="dq07_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq07_10" name="dq07_10" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq08"
                    name="datasource_dq08"
                    type="text"
                    placeholder="Datenquelle 8"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq08" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq08_01" name="dq08_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq08_02" name="dq08_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq08_03" name="dq08_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq08_04" name="dq08_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq08_05" name="dq08_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq08_06" name="dq08_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq08_07" name="dq08_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq08_08" name="dq08_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq08_09" name="dq08_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq08_10" name="dq08_10" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq09"
                    name="datasource_dq09"
                    type="text"
                    placeholder="Datenquelle 9"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq09" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq09_01" name="dq09_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq09_02" name="dq09_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq09_03" name="dq09_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq09_04" name="dq09_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq09_05" name="dq09_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq09_06" name="dq09_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq09_07" name="dq09_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq09_08" name="dq09_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq09_09" name="dq09_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq09_10" name="dq09_10" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq10"
                    name="datasource_dq10"
                    type="text"
                    placeholder="Datenquelle 10"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq10" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq10_01" name="dq10_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq10_02" name="dq10_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq10_03" name="dq10_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq10_04" name="dq10_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq10_05" name="dq10_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq10_06" name="dq10_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq10_07" name="dq10_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq10_08" name="dq10_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq10_09" name="dq10_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq10_10" name="dq10_10" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq11"
                    name="datasource_dq11"
                    type="text"
                    placeholder="Datenquelle 11"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq11" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq11_01" name="dq11_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq11_02" name="dq11_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq11_03" name="dq11_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq11_04" name="dq11_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq11_05" name="dq11_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq11_06" name="dq11_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq11_07" name="dq11_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq11_08" name="dq11_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq11_09" name="dq11_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq11_10" name="dq11_10" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq12"
                    name="datasource_dq12"
                    type="text"
                    placeholder="Datenquelle 12"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq12" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq12_01" name="dq12_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq12_02" name="dq12_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq12_03" name="dq12_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq12_04" name="dq12_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq12_05" name="dq12_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq12_06" name="dq12_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq12_07" name="dq12_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq12_08" name="dq12_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq12_09" name="dq12_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq12_10" name="dq12_10" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq13"
                    name="datasource_dq13"
                    type="text"
                    placeholder="Datenquelle 13"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq13" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq13_01" name="dq13_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq13_02" name="dq13_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq13_03" name="dq13_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq13_04" name="dq13_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq13_05" name="dq13_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq13_06" name="dq13_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq13_07" name="dq13_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq13_08" name="dq13_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq13_09" name="dq13_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq13_10" name="dq13_10" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq14"
                    name="datasource_dq14"
                    type="text"
                    placeholder="Datenquelle 14"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq14" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq14_01" name="dq14_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq14_02" name="dq14_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq14_03" name="dq14_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq14_04" name="dq14_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq14_05" name="dq14_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq14_06" name="dq14_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq14_07" name="dq14_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq14_08" name="dq14_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq14_09" name="dq14_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq14_10" name="dq14_10" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_dq15"
                    name="datasource_dq15"
                    type="text"
                    placeholder="Datenquelle 15"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_dq15" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq15_01" name="dq15_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq15_02" name="dq15_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq15_03" name="dq15_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq15_04" name="dq15_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq15_05" name="dq15_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq15_06" name="dq15_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq15_07" name="dq15_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq15_08" name="dq15_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq15_09" name="dq15_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="dq15_10" name="dq15_10" type="text" />
                </div>
              </div>

              <hr />

              <div className="row" id="aggregation_dq">
                <div className="col-12">Aggregation</div>
                <div className="col-12" id="ag_dq_02"></div>
                <div className="col-12" id="ag_dq_03"></div>
                <div className="col-12" id="ag_dq_04"></div>
                <div className="col-12" id="ag_dq_05"></div>
                <div className="col-12" id="ag_dq_06"></div>
                <div className="col-12" id="ag_dq_07"></div>
                <div className="col-12" id="ag_dq_08"></div>
                <div className="col-12" id="ag_dq_09"></div>
                <div className="col-12" id="ag_dq_10"></div>
                <div className="col-12" id="ag_dq_11"></div>
                <div className="col-12" id="ag_dq_12"></div>
              </div>

              <div className="row" id="targetvalue_dq">
                <div className="col-12">Sollwert</div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_tv_dq" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_dq_01" name="tv_dq_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_dq_02" name="tv_dq_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_dq_03" name="tv_dq_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_dq_04" name="tv_dq_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_dq_05" name="tv_dq_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_dq_06" name="tv_dq_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_dq_07" name="tv_dq_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_dq_08" name="tv_dq_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_dq_09" name="tv_dq_09" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_dq_10" name="tv_dq_10" type="text" />
                </div>
              </div>

              <div className="row table_buttons">
                <div className="col-8">
                  <BtnType1 id="dq-btn-grafik">Grafik</BtnType1>
                </div>
                <div className="col-8">
                  <BtnType1 type="submit" id="dq-btn-aggregation">
                    Aggregation
                  </BtnType1>
                </div>
                <div className="col-8">
                  <BtnType2 type="reset" id="dq-btn-reset">
                    Zurücksetzen
                  </BtnType2>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </section>

      <div className="row section_seperation"></div>
    </React.Fragment>
  );
};

export default DataqualityTable;
