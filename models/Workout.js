const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [{
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
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;