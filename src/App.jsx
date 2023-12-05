import UseReduce from "./Hook/UseReduce";
// import Usereducer1 from "./Hook/Usereducer1";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="body">
      <h1>Task Management Application</h1>
      <UseReduce>
        <div className="task-container">
          <AddTaskForm />
          <TaskList />
        </div>
      </UseReduce>
    </div>
  );
};

export default App;
