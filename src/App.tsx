import React from 'react';
import { Task } from './types';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const [taskName, setTaskName] = React.useState('');

  const onAddTask = () => {
    const trimmedTaskName = taskName.trim();

    if (!trimmedTaskName) {
      return;
    }

    setTasks([
      ...tasks,
      {
        id: new Date().getTime(), // Not a great way to generate IDs
        title: trimmedTaskName,
        isCompleted: false,
      },
    ]);

    setTaskName('');
  };

  return (
    <div>
      <h1>Tasks</h1>
      <AddTask
        taskName={taskName}
        setTaskName={setTaskName}
        onAddTask={onAddTask}
      />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
