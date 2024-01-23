const express = require("express");
const connectDB = require("./db/connect");

require("express-async-errors");
require("dotenv").config();

const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const app = express();

app.use(express.static("./public"));
app.use(express.json());

const tasksRouter = require("./routes/tasksRouter");

app.use("/api/v1/tasks", tasksRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.POST || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
