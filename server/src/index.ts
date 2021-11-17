import express from "express";
import cors from "cors";
import pgPromise from "pg-promise";

const cn = "postgres://postgres:postgres@host:5432/pt_project";
// const db = pgPromise(cn);

const app = express();
const port = 4000;
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

app.post("/register", (req, res) => {
  console.log(req.body.username);
  res.send("Register request received!!@@@@@@@");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
