import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function AddTaskForm() {
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {};
  return (
    <div>
      <Typography align="center" variant="h2" paddingBottom={2}>
        My Task List
      </Typography>
      <div className="addTaskForm">
        <TextField
          size="small"
          label="Task"
          variant="outlined"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button
          variant="outlined"
          onClick={addNewTask}
          disabled={!newTask.length}
        >
          <AddIcon />
        </Button>
      </div>
    </div>
  );
}

export default AddTaskForm;
