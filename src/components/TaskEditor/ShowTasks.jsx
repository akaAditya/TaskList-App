import React, { useEffect, useState } from "react";

const ShowTasks = ({ tasks }) => {
  const [getTasks, setGetTasks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [textEdit, setTextEdit] = useState("");
  const [taskEditIndex, setTaskEditIndex] = useState(null);

  useEffect(() => {
    if (tasks.length > 0) {
      setGetTasks(tasks);
    }
  }, [tasks]);

  // TASK UPDATE functionality
  const textEditorHandler = (e) => {
    setTextEdit(e.target.value);
  };

  const taskEditHandler = (id) => (e) => {
    e.preventDefault();
    setEdit(true);
    setTaskEditIndex(id);
    setTextEdit(getTasks[id].task);
  };

  const editedTaskHandler = (e) => {
    e.preventDefault();
    const editedTask = [...getTasks];
    editedTask[taskEditIndex].task = textEdit;
    setGetTasks(editedTask);
    setEdit(false);
    setTaskEditIndex(null);
  };
  // TASK DELETE functionality
  const taskDeleteHandler = (id) => {
    const filterTask = getTasks.filter((task, index) => index !== id);
    setGetTasks(filterTask);
  };
  return (
    <div className="mx-auto max-w-2xl">
      <ul className="divide-y divide-gray-300">
        {getTasks &&
          getTasks.map((task, index) => (
            <li
              key={index}
              className="py-4 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              {!edit || taskEditIndex !== index ? (
                <h1 className="text-lg md:text-xl">{task.task}</h1>
              ) : (
                <input
                  value={!edit ? task.task : textEdit}
                  onChange={textEditorHandler}
                  type="text"
                  className="border border-gray-300 rounded-md py-2 px-3 w-2/4 focus:outline-none focus:border-blue-500"
                />
              )}
              <div className="mt-2 md:mt-0">
                {!edit || taskEditIndex !== index ? (
                  <button
                    onClick={taskEditHandler(index)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={editedTaskHandler}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    submit
                  </button>
                )}
                <button
                  onClick={() => taskDeleteHandler(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ShowTasks;
