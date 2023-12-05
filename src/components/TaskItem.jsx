import { useContext, useState } from "react";
import { MdEdit } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { TaskContext } from "../Hook/UseReduce";

const TaskItem = ({ task: { task, id } }) => {
  const { Remove, updateTask } = useContext(TaskContext);

  const [isTrue, setIsTrue] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(task);

  return (
    <div className="task-list">
      <li>
        <input onClick={() => setIsTrue(!isTrue)} type="checkbox" />
        {isEdit ? (
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
          />
        ) : (
          <span className={isTrue ? "complited" :""}>{task}</span>
        )}
        <span
          onClick={() =>
            isEdit ? updateTask(id, input, setIsEdit) : setIsEdit(true)
          }
          className="edit-task"
        >
          {isEdit ? <IoSaveSharp /> : <MdEdit />}
        </span>
        <button onClick={() => Remove(id)}>DELETE TASK</button>
      </li>
    </div>
  );
};

export default TaskItem;
