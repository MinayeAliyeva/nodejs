import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello Minaya");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
