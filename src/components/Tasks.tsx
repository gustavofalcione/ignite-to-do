import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";
import { Task } from "./Task";
import styles from "./Tasks.module.scss";
import { WithoutTask } from "./WithoutTask";

export function Tasks() {
  const { tasks, setTasks } = useContext(TasksContext);

  function deleteTask(idTaskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== idTaskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function completeTask(idTaskToComplete: string){
    const taskCompleted = tasks.map((task) => {
      if(task.id === idTaskToComplete) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      } else {
        return task;
      }
    })

    setTasks(taskCompleted);
  }

  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span className={styles.tasksCreated}>{tasks.length}</span>
        </div>
        <div>
          <p>Concluídas</p>
          <div className={styles.tasksDone}>
            {tasks.length > 0 ? (
             <div className={styles.teset}>
                <div className={styles.tasksInfo}>{`${completedTasks} de ${tasks.length}`}</div>
             </div>
            ) : (
              <span>{tasks.length}</span>
            )} 
          </div>
        </div>
      </header>

      <div className={styles.taskContainer}>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
                onCompleteTask={completeTask}
                onDeleteTask={deleteTask}
              />
            );
          })
        ) : (
          <WithoutTask />
        )}
      </div>
    </>
  );
}
