import styles from "./Task.module.scss";

import { Trash } from "phosphor-react";
import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";


interface TaskProps {
  id: string;
  description: string;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}


export function Task({ id, description, onDeleteTask, onCompleteTask }: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(id)
  }


  function handleCompleteTask() {
    onCompleteTask(id);
  }

  return (
    <div className={styles.container}>
      <label className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          id="checkbox"
          type="checkbox"
          onChange={handleCompleteTask}
        />
        <span className={styles.check}></span>
        <span className={styles.taskDesc}>{description}</span>
      </label>
      <p></p>
      <button onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
