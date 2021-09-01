import { Divider, Form, Button, Popconfirm, message, Modal, Upload, FormInstance } from "antd";
import React from "react";
import Chart from "react-apexcharts";
import { calculateFulfilment, TableMQRow, ITableRowInitialValues } from "./TableMQRow";
import { WarningOutlined, DownloadOutlined, UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { UploadFile } from "antd/lib/upload/interface";
import Papa from "papaparse";

export interface tableLegend {
  shortcut: string;
  name: string;
}

export function TableMQPerspective(props: {
  perspective: string;
  tableID: string;
  kpiRowCount: number;
  defaultValueName: string[];
  defaultValueTarget: number[];
  piRowCount: number;
  defaultValuePIName: string;
  tableLegend: tableLegend[];
  columns: string[];
  onAggregationChange(value: number): void;
}) {
  const initialMqRowDescriptions: string[] = [];
  for (let i = 0; i < props.kpiRowCount + props.piRowCount; i++) {
    initialMqRowDescriptions.push(props.defaultValueName[i]);
  }

  const initialFulfilment: number[] = [];
  for (let i = 0; i < props.kpiRowCount + props.piRowCount; i++) {
    initialFulfilment.push(0);
  }

  const [aggregationSum, setAggregationSum] = React.useState<number>(0);
  const [mqRowDescriptions, setMqRowDescriptions] = React.useState<string[]>(initialMqRowDescriptions);
  const [fulfilment, setFulfilment] = React.useState<number[]>(initialFulfilment);
  const [reset, setReset] = React.useState<number>(0);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const [csvFile, setCsvFile] = React.useState<UploadFile | null>(null);
  const [csvFileRowsCount, setCsvFileRowsCount] = React.useState<number>(0);
  const [initialValues, setInitialValues] = React.useState<ITableRowInitialValues[]>([]);
  const [currentForms, setCurrentForms] = React.useState<any>();

  // Upload Modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);

    if (csvFile && csvFile.originFileObj) {
      Papa.parse<string[]>(csvFile.originFileObj, {
        complete: function (results) {
          let csvDataForTable: ITableRowInitialValues[] = [];

          results.data.forEach((e, index) => {
            if (index === 0 || e.length < 2) {
              console.log("Heading or empty row!");
            } else if (index > 0 && e.length <= props.columns.length - 3) {
              const newItem: ITableRowInitialValues = { description: e[0], values: [] };
              //umbauen auf description, actualValue und targetValue?!

              for (let j = 1; j < e.length; j++) {
                if (e[j] === "") {
                  newItem.values.push(undefined);
                } else {
                  newItem.values.push(parseFloat(e[j]));
                }
              }
              csvDataForTable.push(newItem);
            }
          });

          setCsvFileRowsCount(csvDataForTable.length);
          setInitialValues(csvDataForTable);
        }
      });
    }

    setCsvFile(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCsvFile(null);
  };

  // Download csv

  const csvDownload = () => {
    const data: (string | number)[][] = [];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [formName, form] of Object.entries(currentForms)) {
      const f: FormInstance = form as any;

      const csvRowArray: (string | number)[] = [];
      const formValues = f.getFieldsValue();

      // how to only push the middle 3 fields?

      csvRowArray.push(formValues.description, formValues.actualValue, formValues.targetValue);

      data.push(csvRowArray);
    }

    const headings: string[] = ["Kennzahl", "Ist, [%, €]", "Soll, [%, €]"];

    // create csv and unparse stuff
    const blob = new Blob([Papa.unparse({ data: data, fields: headings })]);

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${props.perspective}_CSV_Export_File.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const { Dragger } = Upload;

  const forms_KPI = Array.from({ length: props.kpiRowCount }, (x, i) => i).map((row, i) => {
    return (
      <TableMQRow
        key={row}
        row={row}
        isKpiRow={true}
        step="KPI"
        defaultValueName={props.defaultValueName[i]}
        defaultValueTarget={props.defaultValueTarget[i]}
        tableID={props.tableID}
        perspective={props.perspective}
        reset={reset}
        initialValues={initialValues[row]}
      />
    );
  });

  const forms_PI = Array.from(
    {
      length:
        props.piRowCount > csvFileRowsCount - props.kpiRowCount
          ? props.piRowCount
          : csvFileRowsCount - props.kpiRowCount
    },
    (x, i) => props.kpiRowCount + i
  ).map((row) => {
    return (
      <TableMQRow
        key={row}
        row={row}
        isKpiRow={false}
        step="PI"
        defaultValueName={props.defaultValueName[row]}
        tableID={props.tableID}
        perspective={props.perspective}
        reset={reset}
        initialValues={initialValues[row]}
      />
    );
  });

  return (
    <>
      <Form.Provider
        onFormChange={(name, info) => {
          setCurrentForms(info.forms);
          let totalKpi = 0;
          let totalWeightsKpi = 0;
          let sumKpi = 0;

          let totalPi = 0;
          let totalWeightsPi = 0;
          let sumPi = 0;

          const newMqRowDescriptions = [];
          const newFulfilment: number[] = [];
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          for (const [_formName, form] of Object.entries(info.forms)) {
            if (form.getFieldValue("active")) {
              const actualValue = form.getFieldValue("actualValue") || 0;
              const targetValue = form.getFieldValue("targetValue");
              if (Number.isFinite(form.getFieldValue("actualValue"))) {
                let qi = 1;
                if (!Number.isFinite(targetValue) || targetValue === 0) {
                  qi = 1;
                } else if (actualValue > targetValue) {
                  qi = targetValue / actualValue;
                } else if (actualValue <= targetValue) {
                  qi = actualValue / targetValue;
                } else {
                  console.error("Something went wrong in aggregation calculation!");
                }
                if (form.getFieldValue("step") === "KPI") {
                  if (qi <= 0.5) {
                    totalKpi += qi * 1.3;
                    totalWeightsKpi += 1.3;
                  } else {
                    totalKpi += qi;
                    totalWeightsKpi += 1;
                  }

                  if (totalWeightsKpi) {
                    sumKpi = totalKpi / totalWeightsKpi;
                  }
                } else if (form.getFieldValue("step") === "PI") {
                  if (qi <= 0.5) {
                    totalPi += qi * 1.3;
                    totalWeightsPi += 1.3;
                  } else {
                    totalPi += qi;
                    totalWeightsPi += 1;
                  }

                  if (totalWeightsPi) {
                    sumPi = totalPi / totalWeightsPi;
                  }
                }
              }
              newFulfilment.push(calculateFulfilment(actualValue || 0, targetValue || 0));

              setFulfilment(newFulfilment);

              newMqRowDescriptions.push(form.getFieldValue("description"));
            }
          }

          const newSum = sumKpi * 0.66 + sumPi * 0.33;
          setAggregationSum(newSum);
          setMqRowDescriptions(newMqRowDescriptions);

          props.onAggregationChange(newSum);
        }}
      >
        <div>
          <div style={{ justifyContent: "flex-end", display: "flex", marginTop: 16 }}>
            <span style={{ textAlign: "center", marginRight: 20, marginTop: 10 }}>.csv</span>
            <Button
              onClick={showModal}
              type="primary"
              icon={<UploadOutlined />}
              size={"large"}
              style={{ marginRight: 16 }}
            />
            <Modal
              title={".csv Upload - " + props.perspective}
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              destroyOnClose
            >
              <Dragger
                accept=".csv"
                beforeUpload={() => false}
                multiple={false}
                maxCount={1}
                name="file"
                onChange={(info) => {
                  if (info.fileList.length > 0) {
                    const file = info.fileList[0];
                    setCsvFile(file);
                  }
                }}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Fügen Sie Dateien per Klick oder Drag and Drop hinzu.</p>
                <p className="ant-upload-hint">Es sind nur .csv Dateien erlaubt. </p>
              </Dragger>
            </Modal>

            <Button onClick={csvDownload} type="primary" icon={<DownloadOutlined />} size={"large"} />
          </div>

          <div
            style={{
              marginBottom: 4,
              fontWeight: "bold",
              textDecoration: "underline"
            }}
          >
            {props.perspective}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "70% auto"
            }}
          >
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${props.columns.length}, 1fr)`,
                  justifyItems: "center",
                  columnGap: 16,
                  marginTop: 40,
                  marginBottom: 24
                }}
              >
                {props.columns.map((column, index) => {
                  return (
                    <span style={{ fontWeight: "bold", marginLeft: 5, marginRight: 5 }} key={index}>
                      {column}
                    </span>
                  );
                })}
              </div>

              {forms_KPI}
              {forms_PI}

              <div style={{ marginTop: 20 }}>Aggregation: {aggregationSum.toFixed(2)} </div>
              <div style={{ textAlign: "center", marginTop: 4 }}>
                {props.tableLegend.map((term, index) => {
                  return (
                    <span
                      style={{ fontSize: 10, overflow: "hidden", textOverflow: "ellipsis", width: " 100%" }}
                      key={index}
                    >
                      {term.shortcut + "..." + term.name + ", "}
                    </span>
                  );
                })}
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Popconfirm
                  icon={<WarningOutlined style={{ color: "red" }} />}
                  title="Wollen Sie die Werte dieser Perspektive wirklich zurücksetzen?"
                  okText="OK"
                  cancelText="Abbrechen"
                  onConfirm={() => {
                    setAggregationSum(0);
                    setMqRowDescriptions(initialMqRowDescriptions);
                    setFulfilment(initialFulfilment);
                    setReset(reset + 1);

                    props.onAggregationChange(0);
                    message.success("Daten wurden erfolgreich zurückgesetzt!");
                  }}
                >
                  <Button type="text" danger style={{ marginRight: 16, marginTop: 24 }}>
                    Zurücksetzen
                  </Button>
                </Popconfirm>
              </div>
            </div>

            {mqRowDescriptions.length === fulfilment.length && (
              <Chart
                // Perspective Chart
                options={{
                  chart: {
                    id: "perspective-chart"
                  },
                  xaxis: {
                    categories: mqRowDescriptions,
                    labels: {
                      show: true,
                      style: {
                        colors: ["#000", "#000", "#000", "#000", "#000", "#000"],
                        fontSize: "12px"
                      }
                    }
                  },
                  yaxis: {
                    forceNiceScale: true,
                    min: 0,
                    max: 95,
                    labels: {
                      maxWidth: 1,
                      style: {
                        colors: ["#000"]
                      },
                      formatter: function (val, index) {
                        return val.toFixed(2);
                      }
                    }
                  },
                  legend: {
                    showForSingleSeries: true,
                    markers: {
                      fillColors: ["#FFE000"]
                    }
                  },
                  stroke: {
                    show: true,
                    colors: ["#FFE000"]
                  },
                  fill: {
                    colors: ["#FFE000"],
                    opacity: 0.1
                  },
                  markers: {
                    size: 4,
                    colors: ["#FFE000"],
                    hover: {
                      size: 6
                    }
                  },
                  plotOptions: {
                    radar: {
                      size: 140,
                      polygons: {
                        strokeColors: "#9D9F9E",
                        connectorColors: "#9D9F9E"
                      }
                    }
                  },
                  title: {
                    text: `${props.perspective} Diagramm`,
                    align: "center",

                    style: {
                      fontSize: "14px"
                    }
                  }
                }}
                series={[
                  {
                    name: `Erfüllungsgrad, [%]`,
                    data: fulfilment
                  }
                ]}
                type="radar"
                width="700"
                height="400"
                key={reset + "b"}
              />
            )}
          </div>
        </div>

        <Divider />
      </Form.Provider>
    </>
  );
}
