const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excerciseSchema = new Schema ({
    type: {
        type: String,
        trim: true,
        required: "Enter type of excerise"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter name of excerise"
    },
    duration: {
        type: Number,
        required: "Enter a duration"
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    }

});

const Excercise = mongoose.model("Excercise", excerciseSchema);

module.exports = Excercise;