import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "Feb 5th at 2:30PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Engineer's Appointment",
      day: "Feb 5th at 2:30PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shoppong",
      day: "Feb 5th at 2:30PM",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header title="Tasks Tracker" />
      {tasks.length === 0 ? (
        "No Task to Show"
      ) : (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      )}
    </div>
  );
}

export default App;
