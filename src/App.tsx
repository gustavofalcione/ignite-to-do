import { CreateTask } from './components/CreateTask';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import './global.scss';
import styles from './App.module.scss';
import { useState } from 'react';
import { TasksProvider } from './contexts/TasksContext';

function App() {
  return (
    <TasksProvider>
      <Header />
      <CreateTask />
      <main className={styles.wrapper}>
        <Tasks />
      </main>
    </TasksProvider>
  )
}

export default App
