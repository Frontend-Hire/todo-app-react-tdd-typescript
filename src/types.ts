type Priority = 'p1' | 'p2' | 'p3';

export type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  priority?: Priority;
};
