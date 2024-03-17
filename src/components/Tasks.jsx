import React, { useState } from "react";
import Form from "./TaskEditor/Form";
import ShowTasks from "./TaskEditor/ShowTasks";

const DUMMY_DATA = [
  { task: "Developing project using react.js" },
  { task: "This weekend, I am going to visit some places" },
  { task: "From tomorrow I will go to gym" },
];
const Tasks = () => {
  const [task, setTask] = useState(DUMMY_DATA);

  const taskAddHandler = (receiver) => {
    setTask((prev) => [...prev, receiver]);
  };
  return (
    <div>
      <Form taskReceiver={taskAddHandler} />
      <hr />
      <ShowTasks tasks={task} />
    </div>
  );
};
export default Tasks;
