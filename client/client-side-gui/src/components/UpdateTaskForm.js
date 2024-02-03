import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import {
  Checkbox,
  Typograph,
  Button,
  Dialog,
  DialogTitle,
  TextField,
} from "@mui/material";
import axios from "axios";

function UpdateTaskForm({ isDialogOpen, setIsDialogOpen, task, fetchTasks }) {
  const { id, completed } = task;
  const [taskName, setTaskName] = useState("");

  const handleUpdateTaskName = async () => {
    try {
      await axios.put(API_URL, {
        id,
        name: taskName,
        completed,
      });
      await fetchTasks();

      setTaskName(" ");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog open={isDialogOpen}>
      <DialogTitle>Edit Task</DialogTitle>
      <div className="dialog">
        <TextField
          size="small"
          label="task"
          variant="outlined"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={async () => {
            await handleUpdateTaskName();
            setIsDialogOpen(false);
          }}
        >
          <CheckIcon />
        </Button>
      </div>
    </Dialog>
  );
}

export default UpdateTaskForm;
