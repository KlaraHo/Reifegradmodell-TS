import { Button, Input } from "antd";
import { Form, Formik, useField } from "formik";
import React from "react";
import * as Yup from "yup";
import "../../App.css";
import KnowqualityTableHeadlines from "./KnowqualityTableHeadlines";

// kq = knowquality (Wissensqualität)
// tv = target value (Sollwert)

const MyTextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <label htmlFor={props.id || props.name} className="screenreader">
        {label}
      </label>
      <Input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </React.Fragment>
  );
};

const MyCheckbox = ({ ...props }: any) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <Input type="checkbox" {...field} {...props} />
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

const decimalRegExp = /^(0(,[0-9]{1,2})?|1(\.0{1,2})?)$/;

const KnokqualityTable = () => {
  return (
    <React.Fragment>
      <section id="knowquality_table">
        <div className="container">
          <KnowqualityTableHeadlines />

          <Formik
            initialValues={{
              datesource_kq01: "",
              checkbox_kq01: false,
              kq01_01: "",
              kq01_02: "",
              kq01_03: "",
              kq01_04: "",

              datesource_kq02: "",
              checkbox_kq02: false,
              kq02_01: "",
              kq02_02: "",
              kq02_03: "",
              kq02_04: "",

              datesource_kq03: "",
              checkbox_kq03: false,
              kq03_01: "",
              kq03_02: "",
              kq03_03: "",
              kq03_04: "",

              datesource_kq04: "",
              checkbox_kq04: false,
              kq04_01: "",
              kq04_02: "",
              kq04_03: "",
              kq04_04: "",

              datesource_kq05: "",
              checkbox_kq05: false,
              kq05_01: "",
              kq05_02: "",
              kq05_03: "",
              kq05_04: "",

              datesource_kq06: "",
              checkbox_kq06: false,
              kq06_01: "",
              kq06_02: "",
              kq06_03: "",
              kq06_04: "",

              datesource_kq07: "",
              checkbox_kq07: false,
              kq07_01: "",
              kq07_02: "",
              kq07_03: "",
              kq07_04: "",

              datesource_kq08: "",
              checkbox_kq08: false,
              kq08_01: "",
              kq08_02: "",
              kq08_03: "",
              kq08_04: "",

              datesource_kq09: "",
              checkbox_kq09: false,
              kq09_01: "",
              kq09_02: "",
              kq09_03: "",
              kq09_04: "",

              datesource_kq10: "",
              checkbox_kq10: false,
              kq10_01: "",
              kq10_02: "",
              kq10_03: "",
              kq10_04: "",

              datesource_kq11: "",
              checkbox_kq11: false,
              kq11_01: "",
              kq11_02: "",
              kq11_03: "",
              kq11_04: "",

              datesource_kq12: "",
              checkbox_kq12: false,
              kq12_01: "",
              kq12_02: "",
              kq12_03: "",
              kq12_04: "",

              datesource_kq13: "",
              checkbox_kq13: false,
              kq13_01: "",
              kq13_02: "",
              kq13_03: "",
              kq13_04: "",

              datesource_kq14: "",
              checkbox_kq14: false,
              kq14_01: "",
              kq14_02: "",
              kq14_03: "",
              kq14_04: "",

              datesource_kq15: "",
              checkbox_kq15: false,
              kq15_01: "",
              kq15_02: "",
              kq15_03: "",
              kq15_04: "",

              //  TARGET VALUES
              checkbox_tv_kq: false,
              tv_kq_01: "",
              tv_kq_02: "",
              tv_kq_03: "",
              tv_kq_04: ""
            }}
            // VALIDATION SCHEMA
            validationSchema={Yup.object({
              // LINE 1
              datasource_kq01: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq01: Yup.boolean(),
              kq01_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq01_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq01_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq01_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // LINE 2
              datasource_kq02: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq02: Yup.boolean(),
              kq02_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq02_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq02_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq02_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // LINE 3
              datasource_kq03: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq03: Yup.boolean(),
              kq03_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq03_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq03_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq03_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // LINE 4
              datasource_kq04: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq04: Yup.boolean(),
              kq04_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq04_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq04_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq04_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // LINE 5
              datasource_kq05: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq05: Yup.boolean(),
              kq05_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq05_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq05_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq05_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // LINE 6
              datasource_kq06: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq06: Yup.boolean(),
              kq06_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq06_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq06_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq06_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // LINE 7
              datasource_kq07: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq07: Yup.boolean(),
              kq07_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq07_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq07_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq07_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // LINE 8
              datasource_kq08: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq08: Yup.boolean(),
              kq08_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq08_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq08_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq08_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // LINE 9
              datasource_kq09: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq09: Yup.boolean(),
              kq09_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq09_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq09_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq09_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // LINE 10
              datasource_kq10: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq10: Yup.boolean(),
              kq10_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq10_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq10_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq10_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // LINE 11
              datasource_kq11: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq11: Yup.boolean(),
              kq11_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq11_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq11_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq11_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // LINE 12
              datasource_kq12: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq12: Yup.boolean(),
              kq12_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq12_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq12_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq12_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // LINE 13
              datasource_kq13: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq13: Yup.boolean(),
              kq13_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq13_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq13_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq13_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // LINE 14
              datasource_kq14: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq14: Yup.boolean(),
              kq14_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq14_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq14_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq14_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // LINE 15
              datasource_kq15: Yup.string().max(50, "Max. 50 Zeichen").required("Erforderlich"),
              checkbox_kq15: Yup.boolean(),
              kq15_01: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq15_02: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq15_03: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),
              kq15_04: Yup.string()
                .matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen")
                .required("Erforderlich"),

              // TARGET VALUES
              checkbox_tv_kq: Yup.boolean(),
              tv_kq_01: Yup.string().matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen").optional(),
              tv_kq_02: Yup.string().matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen").optional(),
              tv_kq_03: Yup.string().matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen").optional(),
              tv_kq_04: Yup.string().matches(decimalRegExp, "Zahl zwischen 0 und 1 mit 2 Dezimalstellen").optional()
            })}
            onSubmit={(values) => {
              console.error(values);
            }}
            // onSubmit={(values, { setSubmitting }, event) => {
            //   event.preventDefault();
            //   setTimeout(() => {
            //     alert(JSON.stringify(values, null, 2));
            //     setSubmitting(false);
            //   }, 400);
            // }}
          >
            <Form>
              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq01"
                    name="datasource_kq01"
                    type="text"
                    placeholder="Wissensquelle 1"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq01" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq01_01" name="kq01_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq01_02" name="kq01_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq01_03" name="kq01_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq01_04" name="kq01_04" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq02"
                    name="datasource_kq02"
                    type="text"
                    placeholder="Wissensquelle 2"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq02" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq02_01" name="kq02_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq02_02" name="kq02_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq02_03" name="kq02_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq02_04" name="kq02_04" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq03"
                    name="datasource_kq03"
                    type="text"
                    placeholder="Wissensquelle 3"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq03" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq03_01" name="kq03_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq03_02" name="kq03_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq03_03" name="kq03_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq03_04" name="kq03_04" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq04"
                    name="datasource_kq04"
                    type="text"
                    placeholder="Wissensquelle 4"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq04" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq04_01" name="kq04_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq04_02" name="kq04_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq04_03" name="kq04_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq04_04" name="kq04_04" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq05"
                    name="datasource_kq05"
                    type="text"
                    placeholder="Wissensquelle 5"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq05" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq05_01" name="kq05_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq05_02" name="kq05_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq05_03" name="kq05_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq05_04" name="kq05_04" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq06"
                    name="datasource_kq06"
                    type="text"
                    placeholder="Wissensquelle 6"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq06" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq06_01" name="kq06_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq06_02" name="kq06_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq06_03" name="kq06_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq06_04" name="kq06_04" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq07"
                    name="datasource_kq07"
                    type="text"
                    placeholder="Wissensquelle 7"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq07" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq07_01" name="kq07_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq07_02" name="kq07_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq07_03" name="kq07_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq07_04" name="kq07_04" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq08"
                    name="datasource_kq08"
                    type="text"
                    placeholder="Wissensquelle 8"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq08" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq08_01" name="kq08_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq08_02" name="kq08_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq08_03" name="kq08_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq08_04" name="kq08_04" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq09"
                    name="datasource_kq09"
                    type="text"
                    placeholder="Wissensquelle 9"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq09" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq09_01" name="kq09_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq09_02" name="kq09_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq09_03" name="kq09_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq09_04" name="kq09_04" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq10"
                    name="datasource_kq10"
                    type="text"
                    placeholder="Wissensquelle 10"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq10" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq10_01" name="kq10_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq10_02" name="kq10_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq10_03" name="kq10_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq10_04" name="kq10_04" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq11"
                    name="datasource_kq11"
                    type="text"
                    placeholder="Wissensquelle 11"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq11" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq11_01" name="kq11_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq11_02" name="kq11_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq11_03" name="kq11_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq11_04" name="kq11_04" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq12"
                    name="datasource_kq12"
                    type="text"
                    placeholder="Wissensquelle 12"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq12" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq12_01" name="kq12_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq12_02" name="kq12_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq12_03" name="kq12_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq12_04" name="kq12_04" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq13"
                    name="datasource_kq13"
                    type="text"
                    placeholder="Wissensquelle 13"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq13" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq13_01" name="kq13_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq13_02" name="kq13_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq13_03" name="kq13_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq13_04" name="kq13_04" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq14"
                    name="datasource_kq14"
                    type="text"
                    placeholder="Wissensquelle 14"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq14" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq14_01" name="kq14_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq14_02" name="kq14_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq14_03" name="kq14_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq14_04" name="kq14_04" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_kq15"
                    name="datasource_kq15"
                    type="text"
                    placeholder="Wissensquelle 15"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_kq15" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq15_01" name="kq15_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq15_02" name="kq15_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq15_03" name="kq15_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="kq15_04" name="kq15_04" type="text" />
                </div>
              </div>

              <hr />

              <div className="row" id="aggregation_kq">
                <div className="col-12">Aggregation</div>
                <div className="col-12" id="ag_kq_02"></div>
                <div className="col-12" id="ag_kq_03"></div>
                <div className="col-12" id="ag_kq_04"></div>
                <div className="col-12" id="ag_kq_05"></div>
                <div className="col-12" id="ag_kq_06"></div>
                <div className="col-12" id="ag_kq_07"></div>
                <div className="col-12" id="ag_kq_08"></div>
                <div className="col-12" id="ag_kq_09"></div>
                <div className="col-12" id="ag_kq_10"></div>
                <div className="col-12" id="ag_kq_11"></div>
                <div className="col-12" id="ag_kq_12"></div>
              </div>

              <div className="row" id="targetvalue_kq">
                <div className="col-12">Sollwert</div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_tv_kq" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_kq_01" name="tv_kq_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_kq_02" name="tv_kq_02" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_kq_03" name="tv_kq_03" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_kq_04" name="tv_kq_04" type="text" />
                </div>
              </div>

              <div className="row table_buttons">
                <div className="col-8">
                  <Button id="kq-btn-grafik">Grafik</Button>
                </div>
                <div className="col-8">
                  <Button id="kq-btn-aggregation">Aggregation</Button>
                </div>
                <div className="col-8">
                  <Button id="kq-btn-reset">Zurücksetzen</Button>
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

export default KnokqualityTable;
