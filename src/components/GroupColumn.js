import React from "react";
import TicketCard from "./TicketCard";

const GroupColumn = ({ groupName, tickets }) => {
  return (
    <div className="group-column">
      <h2>{groupName}</h2>
      <div className="tickets">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default GroupColumn;
