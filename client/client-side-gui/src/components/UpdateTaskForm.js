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

function UpdateTaskForm({ isDialogOpen, setIsDialogOpen, task }) {
  const { id, completed } = task;
  const [taskName, setTaskName] = useState("");
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
          onClick={() => {
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
