const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excerciseSchema = new Schema ({

});

const Excercise = mongoose.model("Excercise", excerciseSchema);

module.exports = Excercise;