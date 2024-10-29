import React from "react";
import "./css/Ticket.css";
import { ReactComponent as ThreeDotsIcon } from "./three-dots-icon.svg"; // 3 dots SVG icon
import { ReactComponent as PriorityIcon } from "./priority-icon.svg"; // Priority icon SVG

import low from "./low.svg";
import high from "./high.svg";
import medium from "./medium.svg";
import no from "./no.svg";
import urgent from "./urgent.svg";

import done from "./Done.svg";
import backlog from "./Backlog.svg";
import inProgress from "./in-progress.svg";
import todo from "./todo.svg";
import cancelled from "./Cancelled.svg";

const priority = {
  0: { name: "No Priority", icon: no },
  1: { name: "Low", icon: low },
  2: { name: "Medium", icon: medium },
  3: { name: "High", icon: high },
  4: { name: "Urgent", icon: urgent },
};

const status = {
  Todo: todo,
  "In progress": inProgress,
  Backlog: backlog,
  Done: done,
  Cancelled: cancelled,
};

const Ticket = ({ ticket, groupBy }) => {
  return (
    <div className="ticket" style={{ padding: "15px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{ticket.id}</span>
        <div className="userIcon"></div>
      </div>
      <div className="ticket-header">
        <span style={{ height: "20px", fontSize: "14px", margin: "15px 0" }}>
          {" "}
          {ticket.title?.length > 70
            ? ticket.title?.slice(0, 70) + "..."
            : ticket.title}
        </span>
      </div>
      <div className="ticket-body">
        <p>
          {ticket.description?.length > 70
            ? ticket.description?.slice(0, 70) + "..."
            : ticket.description}
        </p>
        <div className="ticket-footer" style={{ display: "flex", gap: "10px" }}>
          <span
            style={{
              border: "0.5px solid gray",
              padding: "3px 6px",
              fontSize: "12px",
              color: "gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              text: "gray",
            }}
          >
            <img src={priority[ticket.priority].icon} />
          </span>
          <span
            style={{
              border: "0.5px solid gray",
              padding: "3px 6px",
              fontSize: "12px",
              color: "gray",
            }}
          >
            {ticket.tag.join(", ")}
          </span>
          {/* <PriorityIcon className="ticket-priority-icon" />
          <span>{ticket.priority}</span> */}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
