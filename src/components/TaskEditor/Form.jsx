import React, { useState } from "react";

const Form = (props) => {
  const [addTask, setAddTask] = useState("");

  const inputHandler = (e) => {
    setAddTask(e.target.value);
  };
// TASK POST Functionality 
  const addTaskHandler = (e) => {
    e.preventDefault();
    const data = {
      task: addTask,
    };
    props.taskReceiver(data)
    setAddTask("");
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="text-center text-2xl mb-4">Add Tasks</div>
      <div className="flex flex-col space-y-2">
        <form onSubmit={addTaskHandler}>
          <div className="flex flex-col">
            <input
              type="text"
              value={addTask}
              onChange={inputHandler}
              placeholder="Add your task here..."
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded-lg focus:outline-none focus:shadow-outline">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
