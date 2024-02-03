const express = require("express");
const app = express();

const port = 3001;

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("hello world");
});
app.get("/task", async (req, res) => {
  res.send("hello world");
});
app.post("/task", async (req, res) => {
  res.send("hello world");
});
app.put("/task", async (req, res) => {
  res.send("hello world");
});
app.delete("/task", async (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
