import React from 'react';

type TaskListProps = {
  header?: React.ReactNode;
};

export default function TaskList({
  header,
  children,
}: React.PropsWithChildren<TaskListProps>) {
  const [secondsPassed, setSecondsPassed] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSecondsPassed((secondsPassed) => secondsPassed + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {header}
      <p>Seconds passed: {secondsPassed}</p>
      <ul>{children}</ul>
    </>
  );
}
