import express from "express";
const app = express();

const port = 3001;

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("hello world");
});

// get all task route
app.get("/task", async (req, res) => {
  try {
    const response = await fetchTasks();
    res.send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// post task route
app.post("/task", async (req, res) => {
  try {
    const task = req.body;
    const response = await createTasks(task);
    res.send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// update task route
app.put("/task", async (req, res) => {
  try {
    const task = req.body;
    const response = await updateTask(task);
    res.send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// delete single task route
app.delete("/task", async (req, res) => {
  try {
    const task = req.body;
    const response = await deleteTask(task);
    res.send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// fire server
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
