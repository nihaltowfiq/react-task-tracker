import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
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
      <Header
        showAdd={() => setShowAddTask(!showAddTask)}
        showAddBtn={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length === 0 ? (
        "No Task to Show"
      ) : (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      )}
    </div>
  );
}

export default App;
