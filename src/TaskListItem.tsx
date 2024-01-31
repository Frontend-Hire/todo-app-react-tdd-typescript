type TaskListItemProps = {
  title: string;
};

export default function TaskListItem({ title }: TaskListItemProps) {
  return <li>{title}</li>;
}
