import React from "react";

export default function Card({ item }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="d-flex justify-content-around align-items-center py-3">
            <p>{item.age}</p>
            <p>{item.firstName + " " + item.lastName}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <p>{item.accountId}</p>
        </div>
      </div>
    </div>
  );
}
