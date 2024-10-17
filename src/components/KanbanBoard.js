import React from "react";
import GroupColumn from "./GroupColumn";


const KanbanBoard = ({ tickets, grouping }) => {
  const groupByField = (field) => {
    return tickets.reduce((groups, ticket) => {
      const groupKey = ticket[field] || "Non Priority";
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(ticket);
      return groups;
    }, {});
  };

  const groupedTickets = groupByField(grouping);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <GroupColumn key={group} groupName={group} tickets={groupedTickets[group]} />
      ))}
    </div>
  );
};

export default KanbanBoard;
