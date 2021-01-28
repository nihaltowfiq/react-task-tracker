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
  return (
    <div className="container">
      <Header title="Tasks Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
