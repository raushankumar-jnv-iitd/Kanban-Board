import React from "react";

const Header = ({ onGroupingChange }) => {
  return (
    <div className="header">
      <h1>Kanban Board</h1>
      <div className="group-options">
        <button onClick={() => onGroupingChange("status")}>Group by Status</button>
        <button onClick={() => onGroupingChange("user")}>Group by User</button>
        <button onClick={() => onGroupingChange("priority")}>Group by Priority</button>
      </div>
    </div>
  );
};

export default Header;
