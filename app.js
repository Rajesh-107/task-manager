const express = require("express");
const router = require("./src/routes/api")
const app = new express();
const bodyParser = require("body-parser");

//middleware
const ratelimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

//database
const mongoose = require("mongoose");

//security
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(bodyParser.json());

//
const limiter = ratelimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

//mongo db connection

let URI =`mongodb+srv://taskmanager1234:taskmanager1234@cluster0.xpw4s58.mongodb.net/task-manager`;

//"mongodb+srv://<username>:<password>@cluster0.m8fxg.mongodb.net/CRUD?retryWrites=true&w=majority"

let OPTION = { user: "taskmanager1234", pass: "taskmanager1234", autoIndex: true };
mongoose.connect(URI, OPTION, (error) => {
  console.log("connetction success");
  console.log(error);
});

app.use("/api/v1", router);

app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "not found" });
});

// app.get('*', function(req, res)  {
//   res.sendFile(path.resolve(__dirname, 'crud-application', 'build', 'index.html'))
// })

module.exports = app;