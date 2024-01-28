import React from "react";
import TextField from "@mui/material/TextField";
import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function AddTaskForm() {
  return (
    <div>
      <Typography align="center" variant="h2" paddingBottom={2}>
        My Task List
      </Typography>
      <TextField size="small" label="Task" variant="outlined" />
      <Button>
        <AddIcon />
      </Button>
    </div>
  );
}

export default AddTaskForm;
