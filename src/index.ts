import express from "express";
import helmet from "helmet";

const { PORT } = process.env;
const port = PORT || 5000;

const app = express();

app.use(helmet());

app.listen(port, function () {
  console.info(`service is running on port ${port}`);
});
