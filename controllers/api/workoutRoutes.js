const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/api/workouts", (req, res) => {
	
    Workout.find({})
	.then((workoutData) => {
	   res.json(workoutData);
	})
	.catch(err => {
       res.status(400).json(err);
	});
});


router.put("/api/workouts/:id", (req, res) => {
   	
    Workout.findByIdAndUpdate({_id: req.params.id}, {$push: {"exercises": req.body}})
    .then((workoutData) => {
	    res.json(workoutData);
	})
    .catch(err => {
        res.status(400).json(err);
	});
});  


router.post("/api/workouts", ({ body }, res) => {
       
    Workout.create(body)
    .then(workoutData => {
       res.json(workoutData);
    }) 
    .catch(err => {
       res.status(400).json(err);
    });
});


router.get("/api/workouts/range", (req, res) => {

    Workout.find({})
    .then((workoutData) => {
	   res.json(workoutData);
	})
	  
    .catch(err => {
       res.status(400).json(err);
	});
});

module.exports = router;