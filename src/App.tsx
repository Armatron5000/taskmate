import React, { useState } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import './App.css';

export type Task = {
  id: number,
  name: string,
  time: string
};

export type Props = {
  tasklist: Task[];
  setTasklist: (val: Task[]) => void;
};

function App() {
  /* const list: Task[] = [
    { id: 10001, name: "TASK A", time: "2024/04/23 @ 02:22 PM" },
    { id: 10002, name: "TASK B", time: "2024/04/23 @ 02:22 PM" },
    { id: 10003, name: "TASK C", time: "2024/04/23 @ 02:22 PM" }
  ] */
  const [tasklist, setTasklist] = useState<Task[] | []>([]);

  return (
    <div className="App">
      <Header />
      <AddTask tasklist={tasklist} setTasklist={setTasklist} />
      <ShowTask tasklist={tasklist} setTasklist={setTasklist} />
    </div>
  );
}

export default App;
