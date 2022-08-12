import styles from "./CreateTask.module.scss";

import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TasksContext } from "../contexts/TasksContext";

export function CreateTask() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [description, setDescription] = useState('');


  function handleCreateTask(e: FormEvent) {
    e.preventDefault();
    setTasks([...tasks, {id: uuidv4(), description, isCompleted: false}])
    setDescription('');
  }

  function handleSetDescriptionTask(e: ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
  }

  const isDescriptionEmpty = description.length === 0;

  return (
    <form onSubmit={handleCreateTask} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={description}
        onChange={handleSetDescriptionTask}
      />

      <button type="submit" disabled={isDescriptionEmpty}>
        <span>Criar</span>
        <PlusCircle size={22} />
      </button>

    </form>
  );
}
