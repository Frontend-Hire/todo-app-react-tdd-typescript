type AddTaskProps = {
  taskName: string;
  setTaskName: (taskName: string) => void;
  onAddTask: () => void;
};

export default function AddTask({
  taskName,
  setTaskName,
  onAddTask,
}: AddTaskProps) {
  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAddTask();
    }
  };

  return (
    <>
      <label htmlFor="task-input">Add Task: </label>
      <input
        id="task-input"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={onInputKeyDown}
      />
      <button onClick={onAddTask}>Add</button>
    </>
  );
}
