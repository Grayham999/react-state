// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem.js';

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
