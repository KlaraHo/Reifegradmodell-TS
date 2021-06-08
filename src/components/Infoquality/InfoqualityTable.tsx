// iq = infoquality (Informationsqualität)
// tv = target value (Sollwert)

import React from "react";
import { Formik, Form, useField, yupToFormErrors } from "formik";
import * as Yup from "yup";

import InfoqualityTableHeadlines from "./InfoqualityTableHeadlines";
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
    <React.Fragment>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </React.Fragment>
  );
};

const decimalRegExp = /^(0(\,[0-9]{1,2})?|1(\.0{1,2})?)$/;

const InfoqualityTable = () => {
  return (
    <React.Fragment>
      <section id="infoquality_table">
        <div className="container">
          <InfoqualityTableHeadlines />

          <Formik
            // INITIAL VALUES
            initialValues={{
              datesource_iq01: "",
              checkbox_iq01: false,
              iq01_01: "",
              iq01_02: "",
              iq01_03: "",
              iq01_04: "",
              iq01_05: "",
              iq01_06: "",
              iq01_07: "",
              iq01_08: "",
              iq01_09: "",

              datesource_iq02: "",
              checkbox_iq02: false,
              iq02_01: "",
              iq02_02: "",
              iq02_03: "",
              iq02_04: "",
              iq02_05: "",
              iq02_06: "",
              iq02_07: "",
              iq02_08: "",
              iq02_09: "",

              datesource_iq03: "",
              checkbox_iq03: false,
              iq03_01: "",
              iq03_02: "",
              iq03_03: "",
              iq03_04: "",
              iq03_05: "",
              iq03_06: "",
              iq03_07: "",
              iq03_08: "",
              iq03_09: "",

              datesource_iq04: "",
              checkbox_iq04: false,
              iq04_01: "",
              iq04_02: "",
              iq04_03: "",
              iq04_04: "",
              iq04_05: "",
              iq04_06: "",
              iq04_07: "",
              iq04_08: "",
              iq04_09: "",

              datesource_iq05: "",
              checkbox_iq05: false,
              iq05_01: "",
              iq05_02: "",
              iq05_03: "",
              iq05_04: "",
              iq05_05: "",
              iq05_06: "",
              iq05_07: "",
              iq05_08: "",
              iq05_09: "",

              datesource_iq06: "",
              checkbox_iq06: false,
              iq06_01: "",
              iq06_02: "",
              iq06_03: "",
              iq06_04: "",
              iq06_05: "",
              iq06_06: "",
              iq06_07: "",
              iq06_08: "",
              iq06_09: "",

              datesource_iq07: "",
              checkbox_iq07: false,
              iq07_01: "",
              iq07_02: "",
              iq07_03: "",
              iq07_04: "",
              iq07_05: "",
              iq07_06: "",
              iq07_07: "",
              iq07_08: "",
              iq07_09: "",

              datesource_iq08: "",
              checkbox_iq08: false,
              iq08_01: "",
              iq08_02: "",
              iq08_03: "",
              iq08_04: "",
              iq08_05: "",
              iq08_06: "",
              iq08_07: "",
              iq08_08: "",
              iq08_09: "",

              datesource_iq09: "",
              checkbox_iq09: false,
              iq09_01: "",
              iq09_02: "",
              iq09_03: "",
              iq09_04: "",
              iq09_05: "",
              iq09_06: "",
              iq09_07: "",
              iq09_08: "",
              iq09_09: "",

              datesource_iq10: "",
              checkbox_iq10: false,
              iq10_01: "",
              iq10_02: "",
              iq10_03: "",
              iq10_04: "",
              iq10_05: "",
              iq10_06: "",
              iq10_07: "",
              iq10_08: "",
              iq10_09: "",

              datesource_iq11: "",
              checkbox_iq11: false,
              iq11_01: "",
              iq11_02: "",
              iq11_03: "",
              iq11_04: "",
              iq11_05: "",
              iq11_06: "",
              iq11_07: "",
              iq11_08: "",
              iq11_09: "",
              iq11_10: "",

              datesource_iq12: "",
              checkbox_iq12: false,
              iq12_01: "",
              iq12_02: "",
              iq12_03: "",
              iq12_04: "",
              iq12_05: "",
              iq12_06: "",
              iq12_07: "",
              iq12_08: "",
              iq12_09: "",

              datesource_iq13: "",
              checkbox_iq13: false,
              iq13_01: "",
              iq13_02: "",
              iq13_03: "",
              iq13_04: "",
              iq13_05: "",
              iq13_06: "",
              iq13_07: "",
              iq13_08: "",
              iq13_09: "",

              datesource_iq14: "",
              checkbox_iq14: false,
              iq14_01: "",
              iq14_02: "",
              iq14_03: "",
              iq14_04: "",
              iq14_05: "",
              iq14_06: "",
              iq14_07: "",
              iq14_08: "",
              iq14_09: "",

              datesource_iq15: "",
              checkbox_iq15: false,
              iq15_01: "",
              iq15_02: "",
              iq15_03: "",
              iq15_04: "",
              iq15_05: "",
              iq15_06: "",
              iq15_07: "",
              iq15_08: "",
              iq15_09: "",

              //  TARGET VALUES
              checkbox_tv_iq: false,
              tv_iq_01: "",
              tv_iq_02: "",
              tv_iq_03: "",
              tv_iq_04: "",
              tv_iq_05: "",
              tv_iq_06: "",
              tv_iq_07: "",
              tv_iq_08: "",
              tv_iq_09: "",
            }}
            // VALIDATION SCHEMA
            validationSchema={Yup.object({
              // LINE 1
              datasource_iq01: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq01: Yup.boolean(),
              iq01_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              iq01_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              iq01_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              iq01_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              iq01_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              iq01_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              iq01_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              iq01_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              iq01_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),

              // LINE 2
              datasource_iq02: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq02: Yup.boolean(),
              iq02_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq02_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq02_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq02_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq02_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq02_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq02_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq02_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq02_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 3
              datasource_iq03: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq03: Yup.boolean(),
              iq03_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq03_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq03_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq03_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq03_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq03_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq03_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq03_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq03_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 4
              datasource_iq04: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq04: Yup.boolean(),
              iq04_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq04_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq04_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq04_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq04_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq04_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq04_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq04_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq04_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 5
              datasource_iq05: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq05: Yup.boolean(),
              iq05_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq05_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq05_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq05_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq05_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq05_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq05_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq05_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq05_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 6
              datasource_iq06: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq06: Yup.boolean(),
              iq06_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq06_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq06_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq06_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq06_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq06_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq06_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq06_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq06_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 7
              datasource_iq07: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq07: Yup.boolean(),
              iq07_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq07_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq07_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq07_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq07_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq07_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq07_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq07_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq07_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 8
              datasource_iq08: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq08: Yup.boolean(),
              iq08_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq08_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq08_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq08_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq08_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq08_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq08_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq08_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq08_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 9
              datasource_iq09: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq09: Yup.boolean(),
              iq09_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq09_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq09_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq09_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq09_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq09_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq09_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq09_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq09_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 10
              datasource_iq10: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq10: Yup.boolean(),
              iq10_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq10_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq10_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq10_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq10_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq10_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq10_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq10_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq10_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 11
              datasource_iq11: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq11: Yup.boolean(),
              iq11_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq11_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq11_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq11_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq11_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq11_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq11_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq11_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq11_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 12
              datasource_iq12: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq12: Yup.boolean(),
              iq12_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq12_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq12_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq12_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq12_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq12_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq12_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq12_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq12_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 13
              datasource_iq13: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq13: Yup.boolean(),
              iq13_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq13_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq13_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq13_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq13_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq13_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq13_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq13_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq13_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 14
              datasource_iq14: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq14: Yup.boolean(),
              iq14_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq14_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq14_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq14_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq14_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq14_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq14_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq14_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq14_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 15
              datasource_iq15: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_iq15: Yup.boolean(),
              iq15_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq15_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq15_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq15_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq15_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq15_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq15_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq15_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              iq15_09: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // TARGET VALUES
              checkbox_tv_iq: Yup.boolean(),
              tv_iq_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              tv_iq_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              tv_iq_03: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              tv_iq_04: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              tv_iq_05: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              tv_iq_06: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              tv_iq_07: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              tv_iq_08: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              tv_iq_09: Yup.string()
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
                    label="datasource_iq01"
                    name="datasource_iq01"
                    type="text"
                    placeholder="Datenquelle 1"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq01" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq01_01" name="iq01_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq01_02" name="iq01_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq01_03" name="iq01_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq01_04" name="iq01_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq01_05" name="iq01_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq01_06" name="iq01_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq01_07" name="iq01_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq01_08" name="iq01_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq01_09" name="iq01_09" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_iq02"
                    name="datasource_iq02"
                    type="text"
                    placeholder="Datenquelle 2"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq02" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq02_01" name="iq02_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq02_02" name="iq02_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq02_03" name="iq02_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq02_04" name="iq02_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq02_05" name="iq02_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq02_06" name="iq02_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq02_07" name="iq02_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq02_08" name="iq02_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq02_09" name="iq02_09" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_iq03"
                    name="datasource_iq03"
                    type="text"
                    placeholder="Datenquelle 3"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq03" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq03_01" name="iq03_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq03_02" name="iq03_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq03_03" name="iq03_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq03_04" name="iq03_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq03_05" name="iq03_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq03_06" name="iq03_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq03_07" name="iq03_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq03_08" name="iq03_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq03_09" name="iq03_09" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_iq04"
                    name="datasource_iq04"
                    type="text"
                    placeholder="Datenquelle 4"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq04" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq04_01" name="iq04_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq04_02" name="iq04_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq04_03" name="iq04_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq04_04" name="iq04_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq04_05" name="iq04_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq04_06" name="iq04_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq04_07" name="iq04_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq04_08" name="iq04_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq04_09" name="iq04_09" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_iq05"
                    name="datasource_iq05"
                    type="text"
                    placeholder="Datenquelle 5"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq05" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq05_01" name="iq05_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq05_02" name="iq05_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq05_03" name="iq05_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq05_04" name="iq05_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq05_05" name="iq05_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq05_06" name="iq05_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq05_07" name="iq05_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq05_08" name="iq05_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq05_09" name="iq05_09" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_iq06"
                    name="datasource_iq06"
                    type="text"
                    placeholder="Datenquelle 6"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq06" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq06_01" name="iq06_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq06_02" name="iq06_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq06_03" name="iq06_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq06_04" name="iq06_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq06_05" name="iq06_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq06_06" name="iq06_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq06_07" name="iq06_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq06_08" name="iq06_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq06_09" name="iq06_09" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_iq07"
                    name="datasource_iq07"
                    type="text"
                    placeholder="Datenquelle 7"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq07" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq07_01" name="iq07_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq07_02" name="iq07_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq07_03" name="iq07_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq07_04" name="iq07_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq07_05" name="iq07_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq07_06" name="iq07_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq07_07" name="iq07_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq07_08" name="iq07_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq07_09" name="iq07_09" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_iq08"
                    name="datasource_iq08"
                    type="text"
                    placeholder="Datenquelle 8"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq08" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq08_01" name="iq08_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq08_02" name="iq08_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq08_03" name="iq08_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq08_04" name="iq08_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq08_05" name="iq08_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq08_06" name="iq08_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq08_07" name="iq08_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq08_08" name="iq08_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq08_09" name="iq08_09" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_iq09"
                    name="datasource_iq09"
                    type="text"
                    placeholder="Datenquelle 9"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq09" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq09_01" name="iq09_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq09_02" name="iq09_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq09_03" name="iq09_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq09_04" name="iq09_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq09_05" name="iq09_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq09_06" name="iq09_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq09_07" name="iq09_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq09_08" name="iq09_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq09_09" name="iq09_09" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_iq10"
                    name="datasource_iq10"
                    type="text"
                    placeholder="Datenquelle 10"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq10" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq10_01" name="iq10_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq10_02" name="iq10_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq10_03" name="iq10_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq10_04" name="iq10_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq10_05" name="iq10_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq10_06" name="iq10_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq10_07" name="iq10_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq10_08" name="iq10_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq10_09" name="iq10_09" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_iq11"
                    name="datasource_iq11"
                    type="text"
                    placeholder="Datenquelle 11"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq11" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq11_01" name="iq11_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq11_02" name="iq11_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq11_03" name="iq11_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq11_04" name="iq11_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq11_05" name="iq11_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq11_06" name="iq11_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq11_07" name="iq11_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq11_08" name="iq11_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq11_09" name="iq11_09" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_iq12"
                    name="datasource_iq12"
                    type="text"
                    placeholder="Datenquelle 12"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq12" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq12_01" name="iq12_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq12_02" name="iq12_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq12_03" name="iq12_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq12_04" name="iq12_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq12_05" name="iq12_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq12_06" name="iq12_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq12_07" name="iq12_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq12_08" name="iq12_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq12_09" name="iq12_09" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_iq13"
                    name="datasource_iq13"
                    type="text"
                    placeholder="Datenquelle 13"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq13" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq13_01" name="iq13_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq13_02" name="iq13_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq13_03" name="iq13_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq13_04" name="iq13_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq13_05" name="iq13_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq13_06" name="iq13_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq13_07" name="iq13_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq13_08" name="iq13_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq13_09" name="iq13_09" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_iq14"
                    name="datasource_iq14"
                    type="text"
                    placeholder="Datenquelle 14"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq14" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq14_01" name="iq14_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq14_02" name="iq14_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq14_03" name="iq14_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq14_04" name="iq14_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq14_05" name="iq14_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq14_06" name="iq14_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq14_07" name="iq14_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq14_08" name="iq14_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq14_09" name="iq14_09" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_iq15"
                    name="datasource_iq15"
                    type="text"
                    placeholder="Datenquelle 15"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_iq15" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq15_01" name="iq15_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq15_02" name="iq15_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq15_03" name="iq15_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq15_04" name="iq15_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq15_05" name="iq15_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq15_06" name="iq15_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq15_07" name="iq15_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq15_08" name="iq15_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="iq15_09" name="iq15_09" type="text" />
                </div>
              </div>

              <hr />

              <div className="row" id="aggregation_iq">
                <div className="col-12">Aggregation</div>
                <div className="col-12" id="ag_iq_02"></div>
                <div className="col-12" id="ag_iq_03"></div>
                <div className="col-12" id="ag_iq_04"></div>
                <div className="col-12" id="ag_iq_05"></div>
                <div className="col-12" id="ag_iq_06"></div>
                <div className="col-12" id="ag_iq_07"></div>
                <div className="col-12" id="ag_iq_08"></div>
                <div className="col-12" id="ag_iq_09"></div>
                <div className="col-12" id="ag_iq_10"></div>
                <div className="col-12" id="ag_iq_11"></div>
                <div className="col-12" id="ag_iq_12"></div>
              </div>

              <div className="row" id="targetvalue_iq">
                <div className="col-12">Sollwert</div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_tv_iq" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_iq_01" name="tv_iq_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_iq_02" name="tv_iq_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_iq_03" name="tv_iq_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_iq_04" name="tv_iq_04" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_iq_05" name="tv_iq_05" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_iq_06" name="tv_iq_06" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_iq_07" name="tv_iq_07" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_iq_08" name="tv_iq_08" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_iq_09" name="tv_iq_09" type="text" />
                </div>
              </div>

              <div className="row table_buttons">
                <div className="col-8">
                  <BtnType1 id="iq-btn-grafik">Grafik</BtnType1>
                </div>
                <div className="col-8">
                  <BtnType1 type="submit" id="iq-btn-aggregation">
                    Aggregation
                  </BtnType1>
                </div>
                <div className="col-8">
                  <BtnType2 type="reset" id="iq-btn-reset">
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

export default InfoqualityTable;
