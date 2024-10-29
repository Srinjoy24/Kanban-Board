import React from 'react';

const Dropdown = ({ label, options, selectedValue, onChange }) => {
  return (
    <div className="dropdown-section">
      <label className="dropdown-label">{label}</label> {/* Keep label above the select */}
      <select className="dropdown-select" value={selectedValue} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
