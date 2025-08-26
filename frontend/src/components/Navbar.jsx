import React from 'react';

function SectionCard({ title, children }) {
  return (
    <div className="p-4 my-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

export default SectionCard;
