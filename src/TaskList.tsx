import TaskListItem from './TaskListItem';
import { Task } from './types';

type TaskListProps = {
  tasks: Task[];
};

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskListItem key={task.id} title={task.title} />
      ))}
    </ul>
  );
}
