import React from 'react';

type AddTaskProps = {
  onAddTask: (taskName: string) => void;
};

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [taskName, setTaskName] = React.useState('');

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTaskName = taskName.trim();

    if (!trimmedTaskName) {
      return;
    }

    onAddTask(trimmedTaskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleAddTask}>
      <label htmlFor="task-input">Add Task: </label>
      <input
        required
        id="task-input"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
