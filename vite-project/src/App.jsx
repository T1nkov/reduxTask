import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import Task1 from "./page/Task1/Task1"
import Task2 from "./page/Task2/Task2"
import Task3 from "./page/Task3/Task3"
import Task4 from "./page/Task4/Task4"
import Task5 from "./page/Task5/Task5"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task1" element={<Task1/>}/>
      <Route path="/task2" element={<Task2/>}/>
      <Route path="/task3" element={<Task3/>}/>
      <Route path="/task4" element={<Task4/>}/>
      <Route path="/task5" element={<Task5/>}/>
    </Routes>
  );
}

export default App;
