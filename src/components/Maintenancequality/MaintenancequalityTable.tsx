// mq = maintenancequality (Instandhaltungsqualität)
// tv = target value (Sollwert)

import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import MaintenancequalityTableHeadlines from "./MaintenancequalityTableHeadlines";
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

const MaintenancequalityTable = () => {
  return (
    <React.Fragment>
      <section id="maintenancequality_table">
        <div className="container">
          <MaintenancequalityTableHeadlines />

          <Formik // INITIAL VALUES
            initialValues={{
              datesource_mq01: "",
              checkbox_mq01: false,
              mq01_01: "",
              mq01_02: "",

              datesource_mq02: "",
              checkbox_mq02: false,
              mq02_01: "",
              mq02_02: "",

              datesource_mq03: "",
              checkbox_mq03: false,
              mq03_01: "",
              mq03_02: "",

              datesource_mq04: "",
              checkbox_mq04: false,
              mq04_01: "",
              mq04_02: "",

              datesource_mq05: "",
              checkbox_mq05: false,
              mq05_01: "",
              mq05_02: "",

              datesource_mq06: "",
              checkbox_mq06: false,
              mq06_01: "",
              mq06_02: "",

              datesource_mq07: "",
              checkbox_mq07: false,
              mq07_01: "",
              mq07_02: "",

              datesource_mq08: "",
              checkbox_mq08: false,
              mq08_01: "",
              mq08_02: "",

              datesource_mq09: "",
              checkbox_mq09: false,
              mq09_01: "",
              mq09_02: "",

              datesource_mq10: "",
              checkbox_mq10: false,
              mq10_01: "",
              mq10_02: "",

              datesource_mq11: "",
              checkbox_mq11: false,
              mq11_01: "",
              mq11_02: "",

              datesource_mq12: "",
              checkbox_mq12: false,
              mq12_01: "",
              mq12_02: "",

              datesource_mq13: "",
              checkbox_mq13: false,
              mq13_01: "",
              mq13_02: "",

              datesource_mq14: "",
              checkbox_mq14: false,
              mq14_01: "",
              mq14_02: "",

              datesource_mq15: "",
              checkbox_mq15: false,
              mq15_01: "",
              mq15_02: "",

              //  TARGET VALUES
              checkbox_tv_mq: false,
              tv_mq_01: "",
              tv_mq_02: "",
            }}
            // VALIDATION SCHEMA
            validationSchema={Yup.object({
              // LINE 1
              datasource_mq01: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq01: Yup.boolean(),
              mq01_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),
              mq01_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .required("Erforderlich"),

              // LINE 2
              datasource_mq02: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq02: Yup.boolean(),
              mq02_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              mq02_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 3
              datasource_mq03: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq03: Yup.boolean(),
              mq03_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              mq03_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 4
              datasource_mq04: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq04: Yup.boolean(),
              mq04_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              mq04_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 5
              datasource_mq05: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq05: Yup.boolean(),
              mq05_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              mq05_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 6
              datasource_mq06: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq06: Yup.boolean(),
              mq06_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              mq06_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 7
              datasource_mq07: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq07: Yup.boolean(),
              mq07_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              mq07_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 8
              datasource_mq08: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq08: Yup.boolean(),
              mq08_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              mq08_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 9
              datasource_mq09: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq09: Yup.boolean(),
              mq09_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              mq09_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 10
              datasource_mq10: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq10: Yup.boolean(),
              mq10_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              mq10_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 11
              datasource_mq11: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq11: Yup.boolean(),
              mq11_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              mq11_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 12
              datasource_mq12: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq12: Yup.boolean(),
              mq12_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              mq12_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 13
              datasource_mq13: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq13: Yup.boolean(),
              mq13_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              mq13_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 14
              datasource_mq14: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq14: Yup.boolean(),
              mq14_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              mq14_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // LINE 15
              datasource_mq15: Yup.string()
                .max(50, "Max. 50 Zeichen")
                .required("Erforderlich"),
              checkbox_mq15: Yup.boolean(),
              mq15_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              mq15_02: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),

              // TARGET VALUES
              checkbox_tv_mq: Yup.boolean(),
              tv_mq_01: Yup.string()
                .matches(
                  decimalRegExp,
                  "Zahl zwischen 0 und 1 mit 2 Dezimalstellen"
                )
                .optional(),
              tv_mq_02: Yup.string()
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
                    label="datasource_mq01"
                    name="datasource_mq01"
                    type="text"
                    placeholder="Instandhaltungsquelle 1"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq01" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq01_01" name="mq01_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq01_02" name="mq01_02" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_mq02"
                    name="datasource_mq02"
                    type="text"
                    placeholder="Instandhaltungsquelle 2"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq02" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq02_01" name="mq02_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq02_02" name="mq02_02" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_mq03"
                    name="datasource_mq03"
                    type="text"
                    placeholder="Instandhaltungsquelle 3"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq03" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq03_01" name="mq03_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq03_02" name="mq03_02" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_mq04"
                    name="datasource_mq04"
                    type="text"
                    placeholder="Instandhaltungsquelle 4"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq04" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq04_01" name="mq04_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq04_02" name="mq04_02" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_mq05"
                    name="datasource_mq05"
                    type="text"
                    placeholder="Instandhaltungsquelle 5"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq05" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq05_01" name="mq05_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq05_02" name="mq05_02" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_mq06"
                    name="datasource_mq06"
                    type="text"
                    placeholder="Instandhaltungsquelle 6"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq06" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq06_01" name="mq06_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq06_02" name="mq06_02" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_mq07"
                    name="datasource_mq07"
                    type="text"
                    placeholder="Instandhaltungsquelle 7"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq07" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq07_01" name="mq07_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq07_02" name="mq07_02" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_mq08"
                    name="datasource_mq08"
                    type="text"
                    placeholder="Instandhaltungsquelle 8"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq08" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq08_01" name="mq08_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq08_02" name="mq08_02" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_mq09"
                    name="datasource_mq09"
                    type="text"
                    placeholder="Instandhaltungsquelle 9"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq09" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq09_01" name="mq09_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq09_02" name="mq09_02" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_mq10"
                    name="datasource_mq10"
                    type="text"
                    placeholder="Instandhaltungsquelle 10"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq10" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq10_01" name="mq10_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq10_02" name="mq10_02" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_mq11"
                    name="datasource_mq11"
                    type="text"
                    placeholder="Instandhaltungsquelle 11"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq11" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq11_01" name="mq11_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq11_02" name="mq11_02" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_mq12"
                    name="datasource_mq12"
                    type="text"
                    placeholder="Instandhaltungsquelle 12"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq12" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq12_01" name="mq12_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq12_02" name="mq12_02" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_mq13"
                    name="datasource_mq13"
                    type="text"
                    placeholder="Instandhaltungsquelle 13"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq13" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq13_01" name="mq13_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq13_02" name="mq13_02" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_mq14"
                    name="datasource_mq14"
                    type="text"
                    placeholder="Instandhaltungsquelle 14"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq14" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq14_01" name="mq14_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq14_02" name="mq14_02" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <MyTextInput
                    label="datasource_mq15"
                    name="datasource_mq15"
                    type="text"
                    placeholder="Instandhaltungsquelle 15"
                  />
                </div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_mq15" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq15_01" name="mq15_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="mq15_02" name="mq15_02" type="text" />
                </div>
              </div>

              <hr />

              <div className="row" id="aggregation_mq">
                <div className="col-12">Aggregation</div>
                <div className="col-12" id="ag_mq_02"></div>
              </div>

              <div className="row" id="targetvalue_mq">
                <div className="col-12">Sollwert</div>
                <div className="col-12">
                  <MyCheckbox name="checkbox_tv_mq" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_mq_01" name="tv_mq_01" type="text" />
                </div>
                <div className="col-12">
                  <MyTextInput label="tv_mq_02" name="tv_mq_02" type="text" />
                </div>
              </div>

              <div className="row table_buttons">
                <div className="col-8">
                  <BtnType1 id="mq-btn-grafik">Grafik</BtnType1>
                </div>
                <div className="col-8">
                  <BtnType1 type="submit" id="mq-btn-aggregation">
                    Aggregation
                  </BtnType1>
                </div>
                <div className="col-8">
                  <BtnType2 type="reset" id="mq-btn-reset">
                    Zurücksetzen
                  </BtnType2>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MaintenancequalityTable;
