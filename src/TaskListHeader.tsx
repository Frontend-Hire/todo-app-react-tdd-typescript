type TaskListHeaderProps = {
  count: number;
};

export default function TaskListHeader({ count }: TaskListHeaderProps) {
  return <h2>Total Tasks ({count})</h2>;
}
