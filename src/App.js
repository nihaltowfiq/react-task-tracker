import { useState } from "react";
import AddTask from "./components/AddTask";
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

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header title="Tasks Tracker" />
      <AddTask />
      {tasks.length === 0 ? (
        "No Task to Show"
      ) : (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      )}
    </div>
  );
}

export default App;
