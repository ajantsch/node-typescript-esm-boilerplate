import { createLogger, format, transports } from "winston";

const { LOG_LEVEL, NODE_ENV } = process.env;

const logger = createLogger({
  level: LOG_LEVEL,
  transports: [
    new transports.Console({
      format: NODE_ENV === "production" ? format.simple() : format.combine(format.colorize(), format.simple()),
      silent: NODE_ENV === "test",
    }),
  ],
});

export default logger;
