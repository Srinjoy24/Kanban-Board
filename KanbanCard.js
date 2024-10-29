// src/components/KanbanCard.js

import React from 'react';
import { ReactComponent as TodoIcon } from './todo.svg'; // Import SVG icon
import './css/KanbanCard.css'; // Card-specific CSS

const KanbanCard = ({ ticket }) => {
  const { title, priority, status, assigned_user } = ticket;

  // Handle priority levels here with icons or styles
  const priorityLevels = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];
  const priorityText = priorityLevels[priority] || 'No Priority';

  return (
    <div className="kanban-card">
      <TodoIcon className="status-icon" />
      <h4>{title}</h4>
      <p>Priority: {priorityText}</p>
      <p>Status: {status}</p>
      <p>Assigned to: {assigned_user || 'Unassigned'}</p>
    </div>
  );
};

export default KanbanCard;
