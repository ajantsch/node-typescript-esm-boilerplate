import express from "express";
import helmet from "helmet";

import logger from "@util/logger.js";
import { demo } from "@demo/demo.js";

const { PORT } = process.env;
const port = PORT || 5000;

const app = express();

app.use(helmet());

app.listen(port, function () {
  logger.info(`${demo()}-service is running on port ${port}`);
});
