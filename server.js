const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require('./controllers');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("public"));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Vist app on port ${PORT} !`);
});
