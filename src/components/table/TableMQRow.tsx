import { Form, Checkbox, Input } from "antd";
import React from "react";

export function TableMQRow(props: { gridRow: string; isKpiRow?: boolean; step: string; defaultValue?: string }) {
  const [active, setActive] = React.useState<boolean>(true);

  return (
    <Form style={{ gridRow: `${props.gridRow}`, gridColumn: 2 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6,  1fr)",
          justifyContent: "center",
          columnGap: 16,
          rowGap: 4
        }}
      >
        <Checkbox
          style={{ marginTop: 4 }}
          checked={active}
          onChange={(event) => {
            setActive(event.target.checked);
          }}
        />
        <span>{props.step}</span>
        <Input disabled={props.isKpiRow} defaultValue={props.defaultValue} />
        <Input />
        <Input />
        <span style={{ border: "1px solid black", width: 80, height: 20 }}></span>
      </div>
    </Form>
  );
}
