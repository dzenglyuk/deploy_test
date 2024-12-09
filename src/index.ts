import "dotenv/config";
import express from "express";

const { NODE_ENV, PORT, CUSTOM_VAR } = process.env;

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res
    .status(200)
    .send(`Server running! Custom var: ${CUSTOM_VAR}, env: ${NODE_ENV}`);
});

const port = PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
