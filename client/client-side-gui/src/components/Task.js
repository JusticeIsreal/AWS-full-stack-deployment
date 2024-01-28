import React, { useState } from "react";
import { Checkbox, Typograph, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Task({ task }) {
  const { id, name, completed } = task;
  const [isComplete, setIsComplete] = useState(completed);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleUpdateTaskCompletion = () => {
    setIsComplete((prev) => !prev);
  };

  const handleDeleteTask = () => {};
  return (
    <div>
      <Checkbox checked={isComplete} onChange={handleUpdateTaskCompletion} />
      <Typograph variant="h4">{name}</Typograph>
      <Button variant="contained" onClick={() => setIsDialogOpen(true)}>
        <EditIcon />
      </Button>
      <Button variant="contained" color="error" onClick={handleDeleteTask}>
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default Task;
