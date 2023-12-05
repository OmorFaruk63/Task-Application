import { useContext } from "react";
import TaskItem from "./TaskItem";
import { TaskContext } from "../Hook/UseReduce";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="task-body">
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
