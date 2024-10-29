import React, { useState } from 'react';
import { ReactComponent as DisplayIcon } from './display-icon.svg'; // Your SVG for display
import { ReactComponent as ChevronIcon } from './chevron-icon.svg'; // Your SVG for chevron

const DisplayControl = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [grouping, setGrouping] = useState('Status');
  const [ordering, setOrdering] = useState('Priority');

  const handleDisplayClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
  };

  const handleOrderingChange = (e) => {
    setOrdering(e.target.value);
  };

  return (
    <div className="display-container">
      <button className="display-btn" onClick={handleDisplayClick}>
        <DisplayIcon className="display-icon" />
        Display
        <ChevronIcon className="chevron-icon" />
      </button>

      {showDropdown && (
        <div className="dropdown">
          <div className="dropdown-section">
            <label className="dropdown-label">Grouping</label>
            <select className="dropdown-select" value={grouping} onChange={handleGroupingChange}>
              <option value="Status">Status</option>
              <option value="User">User</option>
              <option value="Priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-section">
            <label className="dropdown-label">Ordering</label>
            <select className="dropdown-select grey-select" value={ordering} onChange={handleOrderingChange}>
              <option value="Priority">Priority</option>
              <option value="Title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Display;
