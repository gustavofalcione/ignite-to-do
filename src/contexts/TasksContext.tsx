import { createContext, ReactNode, useState } from "react";

export interface CreateTask {
  id: string;
  description: string;
  isCompleted: boolean;
}

export interface TasksProviderProps {
  children: ReactNode;
}

export interface TasksContextData {
  tasks: CreateTask[];
  setTasks: (newState: CreateTask[]) => void;
}

export const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData
);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<CreateTask[]>([]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
