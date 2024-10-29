import React, { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";
import KanbanBoard from "./components/KanbanBoard";
import "./App.css";

import DisplayIcon from "./components/Display.svg";
import DownIcon from "./components/down.svg";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState("Status");
  const [ordering, setOrdering] = useState("Priority");

  const [users, setUsers] = useState([]);

  /*useEffect(() => {
    // Fetch tickets from the API
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => setTickets(data.tickets));
  }, []);*/

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
          .then((response) => response.json())
          .then((data) => {
            setTickets(data.tickets);
            setUsers(data?.users);
          });
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const groupTickets = (tickets, groupBy) => {
    const grouped = {};
    tickets.forEach((ticket) => {
      const groupKey = ticket[groupBy] ?? "No Group";
      if (!grouped[groupKey]) {
        grouped[groupKey] = [];
      }
      grouped[groupKey].push(ticket);
    });
    return grouped;
  };

  const orderedTickets = tickets.sort((a, b) => {
    if (ordering === "Priority") {
      return b.priority - a.priority;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  const groupedTickets = groupTickets(orderedTickets, grouping);

  const [isDropdownShown, setIsDropdownShown] = useState(false);

  return (
    <div className="app">
      <button
        style={{
          margin: "1rem 5rem 0 5rem",
          padding: "5px 20px",
          display: "flex",
          gap: "10px",
          background: "white",
          alignItems: "center",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
        onClick={() => setIsDropdownShown(!isDropdownShown)}
      >
        <img src={DisplayIcon}></img>
        Display
        <img src={DownIcon}></img>
      </button>
      {isDropdownShown ? (
        <div
          className="controls"
          style={{
            position: "absolute",
            gap: "1rem",
            padding: "0.5rem 1rem",
            background: "white",
            left: "5rem",
            border: "1px solid gray",
            boxShadow: "0.5px 0.5px 2px light-gray",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <p>Grouping</p>
            <Dropdown
              options={[
                { value: "status", label: "Status" },
                { value: "userId", label: "User" },
                { value: "priority", label: "Priority" },
              ]}
              selectedValue={grouping}
              onChange={(e) => setGrouping(e.target.value)}
              className="dropdown"
            />
          </div>{" "}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <p>Ordering</p>
            <Dropdown
              options={[
                { value: "priority", label: "Priority" },
                { value: "title", label: "Title" },
              ]}
              selectedValue={ordering}
              onChange={(e) => setOrdering(e.target.value)}
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      <KanbanBoard
        groupedTickets={
          grouping == "status"
            ? { ...groupedTickets, Cancelled: [], Done: [] }
            : groupedTickets
        }
        groupBy={grouping}
        users={users}
      />
    </div>
  );
};

export default App;
