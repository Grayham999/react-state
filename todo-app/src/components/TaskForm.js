// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSave, taskToEdit }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description) {
      onSave(task);
      setTask({ name: '', description: '' });
    } else {
      alert('Both fields are required');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={task.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
      />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
