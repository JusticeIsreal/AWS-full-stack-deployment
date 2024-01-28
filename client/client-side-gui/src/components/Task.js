import React, { useState } from "react";
import { Checkbox, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UpdateTaskForm from "./UpdateTaskForm";
import classnames from "classnames";

function Task({ task }) {
  const { id, name, completed } = task;
  const [isComplete, setIsComplete] = useState(completed);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleUpdateTaskCompletion = () => {
    setIsComplete((prev) => !prev);
  };

  const handleDeleteTask = () => {};
  return (
    <div className="task">
      <div className={classnames("flex", { done: isComplete })}>
        <Checkbox checked={isComplete} onChange={handleUpdateTaskCompletion} />
        <Typography variant="h4">{name}</Typography>
      </div>
      <div className="taskButtons">
        <Button variant="contained" onClick={() => setIsDialogOpen(true)}>
          <EditIcon />
        </Button>
        <Button variant="contained" color="error" onClick={handleDeleteTask}>
          <DeleteIcon />
        </Button>
      </div>

      <UpdateTaskForm
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        task={task}
      />
    </div>
  );
}

export default Task;
