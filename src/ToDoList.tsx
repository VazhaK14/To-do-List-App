import { Checkbox } from "./elements/Checkbox";
import React, { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (newTask !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleRemoveTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function handleEnterKeypress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleAddTask();
    }
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="justify-center flex p-10 bg-gray-900">
      <div className="p-5 w-[1000px] rounded-xl relative shadow-md bg-white">
        <p className="font-bold text-4xl flex justify-start p-5 mb-5">
          To-Do List 📝
        </p>
        <div className="flex relative ml-[30px] mr-[30px]">
          <input
            type="text"
            className=" rounded-full w-full h-[80px] pl-8 bg-slate-100 text-xl  focus:outline-none focus:border-0"
            placeholder="Add your task"
            maxLength={62}
            onChange={handleInputChange}
            onKeyDown={handleEnterKeypress}
            value={newTask}
          />
          <button
            onClick={handleAddTask}
            className="absolute hover:text-gray-200 active:bg-orange-500 duration-100 right-0 top-1/2 font-bold text-2xl -translate-y-1/2 bg-orange-600 text-white rounded-full h-[80px] w-[200px] "
          >
            Add
          </button>
        </div>
        <div className="m-8 space-y-4">
          {tasks.map((task, index) => (
            <Checkbox
              task={task}
              onClick={() => handleRemoveTask(index)}
              moveTaskUp={() => moveTaskUp(index)}
              moveTaskDown={() => moveTaskDown(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
