import { createContext, useEffect, useReducer } from "react";

import { reducer } from "./ReducerFunction";

export const TaskContext = createContext();

const UseReduce = ({ children }) => {
  const initialState = {
    tasks: [],
  };

  const [taskState, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("task")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskState));
  }, [taskState]);


  //Form Submit
  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      task: e.target.elements[0].value,
      id: Date.now(),
    };
    e.target.elements[0].value = "";
    dispatch({ type: "ADD_TASK", payload: obj });
  }

  // EDIT Task
  function updateTask(id, input, setIsEdit) {
    dispatch({ type: "EDIT", input, id });
    setIsEdit(false);
  }

  // Remove Task
  function Remove(id) {
    dispatch({ type: "DELETE_TASK", id });
  }

  return (
    <TaskContext.Provider
      value={{ updateTask, Remove, handleSubmit, tasks: taskState.tasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default UseReduce;
