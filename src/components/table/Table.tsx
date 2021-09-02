import { Button, Form, Divider, Card, Popconfirm, message, Modal, Upload, FormInstance } from "antd";
import React from "react";
import { ITableRowInitialValues, TableRow } from "./TableRow";
import { TableRowTargetvalue } from "./TableRowTargetvalue";
import { TableRowAggregation } from "./TableRowAggregation";
import Chart from "react-apexcharts";
import { WarningOutlined, StarFilled, DownloadOutlined, UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { UploadFile } from "antd/lib/upload/interface";
import Papa from "papaparse";

export interface ITableColumn {
  name: string;
  weight: number;
}

export interface tableLegend {
  shortcut: string;
  name: string;
}

export function Table(props: {
  title: string;
  sourceTitle: string;
  sourceInputPlaceholder: string;
  description: React.ReactNode;
  backgroundColor: string;
  columns: ITableColumn[];
  resultTitle: string;
  resultInitials: string;
  rowsCount: number;
  tableID: string;
  tableLegend: tableLegend[];
  maturityWeight: number;
  onQualityLevelChange(value: number): void;
}) {
  const initialSums: number[] = [];
  for (let i = 0; i < props.columns.length; i++) {
    initialSums.push(0);
  }

  const initialSumsRows: number[] = [];
  for (let i = 0; i < props.rowsCount; i++) {
    initialSumsRows.push(0);
  }

  const initialRowDescriptions: string[] = [];
  for (let i = 0; i < props.rowsCount; i++) {
    initialRowDescriptions.push(`${props.sourceInputPlaceholder} ${i + 1}`);
  }

  const [sums, setSums] = React.useState<number[]>(initialSums);
  const [rowSums, setRowSums] = React.useState<number[]>(initialSumsRows);
  const [rowDescriptions, setRowDescription] = React.useState<string[]>(initialRowDescriptions);
  const [reset, setReset] = React.useState<number>(0);
  const [targetValues, setTargetValues] = React.useState<number[]>([]);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const [csvFile, setCsvFile] = React.useState<UploadFile | null>(null);
  const [csvFileRowsCount, setCsvFileRowsCount] = React.useState<number>(0);
  const [initialValues, setInitialValues] = React.useState<ITableRowInitialValues[]>([]);
  const [currentForms, setCurrentForms] = React.useState<any>();

  // Calculate Metrics: DQ, IQ, KQ
  const calculateMetric = () => {
    let totalMetric = 0;

    sums.forEach((sum, index) => {
      const weightedSum = props.columns[index].weight * sum;

      totalMetric += weightedSum;
    });

    return totalMetric;
  };

  const colorIcon = () => {
    let totalMetric = 0;
    let iconColor = "#FFFFFF";

    sums.forEach((sum, index) => {
      const weightedSum = props.columns[index].weight * sum;

      totalMetric += weightedSum;
    });

    if (totalMetric <= 0.5) {
      return (iconColor = "#FF0000");
    } else if (0.51 < totalMetric && totalMetric <= 0.66) {
      return (iconColor = "#ff8e03");
    } else if (0.67 < totalMetric && totalMetric <= 0.82) {
      return (iconColor = "#FFE000");
    } else if (0.83 < totalMetric && totalMetric <= 1.03) {
      return (iconColor = "#4EEE94");
    } else {
      return iconColor;
    }
  };

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
            } else if (index > 0 && e.length <= props.columns.length + 1) {
              const newItem: ITableRowInitialValues = { description: e[0], values: [] };

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
      if (formName !== "targetValues") {
        const f: FormInstance = form as any;

        const csvRowArray: (string | number)[] = [];
        const formValues = f.getFieldsValue();

        csvRowArray.push(formValues.description);
        props.columns.forEach((column, index) => {
          csvRowArray.push(formValues[column.name]);
        });

        data.push(csvRowArray);
      }
    }

    const headings = props.columns.map((column) => {
      return column.name;
    });

    headings.unshift(props.sourceTitle);

    // create csv and unparse stuff
    const blob = new Blob([Papa.unparse({ data: data, fields: headings })]);

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${props.title}_CSV_Export_File.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const { Dragger } = Upload;

  // Metric Chart Categories
  let categoriesMetricChart = props.columns.map((a) => a.name);

  const forms = Array.from(
    { length: props.rowsCount > csvFileRowsCount ? props.rowsCount : csvFileRowsCount },
    (x, i) => i
  ).map((row) => {
    return (
      <TableRow
        key={row}
        columns={props.columns}
        row={row}
        sourceInputPlaceholder={props.sourceInputPlaceholder}
        tableID={props.tableID}
        reset={reset}
        initialValues={initialValues[row]}
      />
    );
  });

  return (
    <div style={{ textAlign: "center", background: props.backgroundColor, padding: 40, marginTop: 40 }}>
      <h1 style={{ textTransform: "uppercase" }}>{props.title}</h1>
      <p>{props.description}</p>

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
          title={".csv Upload - " + props.title}
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
            <p className="ant-upload-hint">Es sind nur .csv Dateien erlaubt.</p>
          </Dragger>
        </Modal>

        <Button onClick={csvDownload} type="primary" icon={<DownloadOutlined />} size={"large"} />
      </div>

      <div
        style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: `repeat(${2 + props.columns.length + 1}, 1fr)`,
          justifyItems: "center",
          columnGap: 16,
          rowGap: 4
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            textDecoration: "underline",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: " 100%"
          }}
        >
          {props.sourceTitle}
        </span>
        <span
          style={{
            fontWeight: "bold",
            textDecoration: "underline",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: " 100%"
          }}
        >
          An/Aus
        </span>
        {props.columns.map((column, index) => {
          return (
            <span
              style={{ fontWeight: "bold", overflow: "hidden", textOverflow: "ellipsis", width: " 100%" }}
              key={index}
            >
              {column.name}
            </span>
          );
        })}

        <span
          style={{
            fontWeight: "bold",
            textDecoration: "underline",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: " 100%"
          }}
        >
          Aggregation
        </span>
      </div>

      <Form.Provider
        onFormChange={(name, info) => {
          setCurrentForms(info.forms);
          if (name === "targetValues") {
            const targetValuesForm = info.forms.targetValues;
            const targetValues: number[] = [];

            props.columns.forEach((column, index) => {
              const formTargetValue = targetValuesForm.getFieldValue(props.tableID + "_targetValue_" + column.name);
              if (formTargetValue !== undefined) {
                targetValues[index] = formTargetValue;
              } else {
                targetValues[index] = 0;
              }
            });

            setTargetValues(targetValues);
          } else {
            const sums: number[] = [];

            for (let i = 0; i < props.columns.length; i++) {
              sums[i] = 0;
            }

            // Calculate Aggregation Columns
            props.columns.forEach((column, index) => {
              let totalColumn = 0;
              let totalColumnWeights = 0;

              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              for (const [_formName, form] of Object.entries(info.forms)) {
                if (form.getFieldValue("active")) {
                  const formColumnValue = form.getFieldValue(column.name);

                  if (formColumnValue !== undefined) {
                    if (formColumnValue <= 0.5) {
                      totalColumn += formColumnValue * 1.3;
                      totalColumnWeights += 1.3;
                    } else {
                      totalColumn += formColumnValue;
                      totalColumnWeights += 1;
                    }
                    sums[index] = totalColumn / totalColumnWeights;
                  }
                }
              }
            });
            setSums(sums);

            // Calculate Row Aggregation for Chart
            const newRowSums = [];
            const newRowDescriptions = [];

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            for (const [formName, form] of Object.entries(info.forms)) {
              if (formName !== "targetValues") {
                let rowColumn = 0;
                let rowColumnWeights = 0;

                if (form.getFieldValue("active")) {
                  props.columns.forEach((column, index) => {
                    const formColumnValue = form.getFieldValue(column.name);

                    if (Number.isFinite(formColumnValue)) {
                      if (formColumnValue <= 0.5) {
                        rowColumn += formColumnValue * 1.3;
                        rowColumnWeights += 1.3;
                      } else {
                        rowColumn += formColumnValue;
                        rowColumnWeights += 1;
                      }
                    }
                  });

                  newRowDescriptions.push(form.getFieldValue("description"));

                  if (rowColumnWeights) {
                    newRowSums.push(rowColumn / rowColumnWeights);
                  } else {
                    newRowSums.push(0);
                  }
                }
              }
            }

            setRowSums(newRowSums);
            setRowDescription(newRowDescriptions);
          }

          props.onQualityLevelChange(calculateMetric() * props.maturityWeight);
        }}
      >
        {forms}

        <Divider />

        <TableRowAggregation values={sums.map((i) => i.toFixed(2))} tableID={props.tableID} />
        <TableRowTargetvalue
          columns={props.columns}
          row={props.rowsCount + 1}
          rowTitle={"Sollwert"}
          tableID={props.tableID}
          reset={reset}
        />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Popconfirm
            icon={<WarningOutlined style={{ color: "red" }} />}
            title="Wollen Sie die Werte dieses Abschnitts wirklich zurücksetzen?"
            okText="OK"
            cancelText="Abbrechen"
            onConfirm={() => {
              for (let i = 0; i < props.columns.length; i++) {
                sums[i] = 0;
              }
              setRowSums(initialSumsRows);
              setTargetValues([]);
              setRowDescription(initialRowDescriptions);
              props.onQualityLevelChange(0);
              setReset(reset + 1);
              message.success("Daten wurden erfolgreich zurückgesetzt!");
            }}
          >
            <Button type="text" danger style={{ marginRight: 16, marginTop: 24 }}>
              Zurücksetzen
            </Button>
          </Popconfirm>
        </div>

        <div style={{ textAlign: "center", marginTop: 4 }}>
          {props.tableLegend.map((term, index) => {
            return (
              <span style={{ fontSize: 10, overflow: "hidden", textOverflow: "ellipsis", width: " 100%" }} key={index}>
                {term.shortcut + "..." + term.name + ", "}
              </span>
            );
          })}
        </div>

        <Divider />

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginTop: 40 }}>
          <Chart
            // Metric Chart
            options={{
              chart: {
                id: props.resultInitials + "IndikatorenDiagramm"
              },
              xaxis: {
                categories: categoriesMetricChart,
                labels: {
                  show: true,
                  style: {
                    colors: ["#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000"],
                    fontSize: "12px"
                  }
                }
              },
              yaxis: {
                forceNiceScale: true,
                min: 0,
                max: 1,
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
                markers: {
                  fillColors: ["#ff8e03", "#0a9bf0"]
                }
              },
              stroke: {
                show: true,
                colors: ["#ff8e03", "#0a9bf0"]
              },
              fill: {
                colors: ["#ff8e03", "#0a9bf0"],
                opacity: 0.1
              },
              markers: {
                size: 4,
                colors: ["#ff8e03", "#0a9bf0"],
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
                text: `${props.resultInitials} Indikatoren Diagramm`
              }
            }}
            series={[
              {
                name: `${props.resultInitials} Indikatoren`,
                data: sums
              },
              { name: `${props.resultInitials} Sollwerte`, data: targetValues }
            ]}
            type="radar"
            width="700"
            key={reset + "a"}
          />

          <Card style={{ width: 300, margin: "auto" }} title={props.resultTitle}>
            <span style={{ margin: 0 }}>
              {props.resultInitials} = {calculateMetric().toFixed(2)}
            </span>
            <span style={{ marginLeft: 8 }}>
              <StarFilled style={{ color: colorIcon() }} />
            </span>
          </Card>

          <Chart
            // Source Chart
            options={{
              chart: {
                id: props.sourceTitle + "Diagramm"
              },
              xaxis: {
                categories: rowDescriptions,
                labels: {
                  show: true,
                  style: {
                    colors: [
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000",
                      "#000"
                    ],
                    fontSize: "12px"
                  }
                }
              },
              yaxis: {
                forceNiceScale: true,
                min: 0,
                max: 1,
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
                  fillColors: ["#4EEE94"]
                }
              },
              stroke: {
                show: true,
                colors: ["#4EEE94"]
              },
              fill: {
                colors: ["#4EEE94"],
                opacity: 0.1
              },
              markers: {
                size: 4,
                colors: ["#4EEE94"],
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
                text: `${props.sourceTitle} Diagramm`
              }
            }}
            series={[
              {
                name: `${props.resultInitials} Quellen`,
                data: rowSums
              }
            ]}
            type="radar"
            width="700"
            key={reset + "b"}
          />
        </div>
      </Form.Provider>
    </div>
  );
}
