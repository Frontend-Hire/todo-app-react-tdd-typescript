type TaskListProps = {
  header?: React.ReactNode;
};

export default function TaskList({
  header,
  children,
}: React.PropsWithChildren<TaskListProps>) {
  return (
    <>
      {header}
      <ul>{children}</ul>
    </>
  );
}
