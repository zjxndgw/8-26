import React from "react";

function SectionCard({ title, children }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
      }}>
        {children}
      </div>
    </div>
  );
}

export default SectionCard;
