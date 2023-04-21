import React from "react";
export default function ComplainCard({
  category,
  createdBy,
  description,
  status,
  hostel,
  room,
  createdAt,
}) {
  return (
    <>
      <div className="card" style={{ color: "#000000" }}>
        <div className="card-header">
          <h2>{category}</h2>
        </div>
        <div className="card-body">
          <p>Description: {description}</p>
          <div className="card-footer">
            <div>Building No: {hostel}</div>
            <div>Room No: {room}</div>
            <div>Status: {status}</div>
            <div>Created At: {createdAt}</div>
            <div>Created By: {createdBy}</div>
          </div>
        </div>
      </div>
    </>
  );
}
