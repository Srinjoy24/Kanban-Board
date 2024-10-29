import React from "react";
import Ticket from "./Ticket";

import { ReactComponent as ThreeDotsIcon } from "./three-dots-icon.svg";

import AddIcon from "./add.svg";

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

const KanbanBoard = ({ groupedTickets, groupBy, users }) => {
  return (
    <div className="kanban-board" style={{ padding: "0 5rem" }}>
      {Object.keys(groupedTickets).map((group, idx) => (
        <div key={idx} className="kanban-column">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h4
              style={{
                fontSize: "14px",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              {groupBy == "priority" ? (
                <span
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    width: "fit-content",
                  }}
                >
                  <img src={priority[group].icon}></img>
                  {priority[group].name}
                </span>
              ) : groupBy == "userId" ? (
                users.find((el) => el.id == group)?.name
              ) : groupBy == "status" ? (
                <span
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    width: "fit-content",
                  }}
                >
                  <img src={status[group]}></img>
                  {group}
                </span>
              ) : (
                group
              )}

              <span
                style={{ color: "gray", fontSize: "12px", marginLeft: "5px" }}
              >
                {groupedTickets[group].length}
              </span>
            </h4>

            <div
              style={{ minWidth: "50px", marginLeft: "2rem", display: "flex " }}
            >
              <img style={{ marginRight: "1rem" }} src={AddIcon} />
              <ThreeDotsIcon className="ticket-priority-icon" />
            </div>
          </div>
          <div className="ticket-list">
            {groupedTickets[group].map((ticket) => (
              <Ticket key={ticket.id} ticket={ticket} groupBy={groupBy} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
