import type { BadgeProps } from "antd";
import { Badge, Calendar, Card } from "antd";
import type { Moment } from "moment";
import React from "react";

const getListData = (value: Moment) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "This is warning event" },
        {
          type: "success",
          content:
            "This is very long usual event This is very long usual event。。....",
        },
        { type: "error", content: "This is error event 1." },
        { type: "error", content: "This is error event 2." },
        { type: "error", content: "This is error event 3." },
        { type: "error", content: "This is error event 4." },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Moment) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const App: React.FC = () => {
  const monthCellRender = (value: Moment) => {
    const num = getMonthData(value);
    return num ? (
      <div
        style={{
          fontSize: "28px",
          textAlign: "center",
        }}
      >
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Moment) => {
    const listData = getListData(value);
    return (
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          width: "100%",
          overflow: "hidden",
          fontSize: "12px",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {listData.map((item) => (
          <li key={item.content}>
            {/* <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            >
            </Badge> */}
            <CardSchedule />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Calendar
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
    />
  );
};

const CardSchedule: React.FC = () => (
  <Card.Grid
    style={{
      width: "100%",
      height: "1px",
      textAlign: "center",
    }}
  >
    Content
  </Card.Grid>
);

export default App;
