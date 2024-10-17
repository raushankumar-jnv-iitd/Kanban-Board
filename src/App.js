import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import "./App.css";

const App = () => {
  const [grouping, setGrouping] = useState("status"); // Default group by status
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the tickets data from the API
  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await response.json();
        setTickets(data.tickets);
      } catch (error) {
        console.error("Failed to fetch tickets:", error);
      }
      setLoading(false);
    };
    fetchTickets();
  }, []);

  // Function to change the grouping of tickets
  const handleGroupingChange = (groupBy) => {
    setGrouping(groupBy);
  };

  return (
    <div className="App">
      <Header onGroupingChange={handleGroupingChange} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <KanbanBoard tickets={tickets} grouping={grouping} />
      )}
    </div>
  );
};

export default App;
