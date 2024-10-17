import React from "react";


const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <p>CAM-{ticket.priority}</p>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p className="priority">Priority: {ticket.priority}</p>
      <p className="status">Status: {ticket.status}</p>
      <p className="user">Assigned to: {ticket.user}</p>
    </div>
  );
};

export default TicketCard;
