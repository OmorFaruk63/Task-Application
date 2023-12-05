import { useContext } from "react";
import { TaskContext } from "../Hook/UseReduce";

const AddTaskForm = () => {
  const { handleSubmit } = useContext(TaskContext);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          autoFocus
          placeholder="Enter your task here"
          type="text"
        />
        <input type="submit" value="ADD_TASK" />
      </form>
    </div>
  );
};

export default AddTaskForm;
