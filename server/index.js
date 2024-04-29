import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = 8000;


app.use("/", (req, res) => res.send("welcome"));


app.listen(port, () => {});
