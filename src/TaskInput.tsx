type TaskInputProps = {
  taskName: string;
  setTaskName: (taskName: string) => void;
  onInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onAddTask: () => void;
};

export default function TaskInput({
  taskName,
  setTaskName,
  onInputKeyDown,
  onAddTask,
}: TaskInputProps) {
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
