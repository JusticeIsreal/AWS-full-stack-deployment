import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AddTaskForm from "./components/AddTaskForm";
import Task from "./components/Task";
import axios from "axios";
import { API_URL } from "./utils.js";
import { useEffect, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [tasks, setTask] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(API_URL);
      // Assuming the tasks are inside a property called 'tasks' in the response
      setTask(data || []);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AddTaskForm fetchTasks={fetchTasks} />
      {tasks?.map((item) => (
        <Task task={item} key={item.id} fetchTasks={fetchTasks} />
      ))}
    </ThemeProvider>
  );
}
