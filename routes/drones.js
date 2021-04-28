const express = require('express');
const Drone = require('../models/Drone.model');

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(drones => {
    console.log(drones);
    res.render('drones/list', {drones})
  })
  .catch(err => console.log("an error while loading page",err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
  
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  Drone.create({
     name, propellers, maxSpeed
  })
  .then(newDrone => {
    console.log(newDrone)
    res.redirect('/drones')
  })
  .catch(err => {
    res.render('drones/create-form', {errorMessage: 'Please introduce all the fields, and submit your drone again'})
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  
  Drone.findById(req.params.id)
  .then(drone => {
    console.log(drone)
    res.render('drones/update-form', {drone})
  })
  .catch(err => console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  const{name, propellers, maxSpeed} = req.body;
  Drone.findByIdAndUpdate(id,{name, propellers, maxSpeed}, {new: true})
    .then((updateDrone) => {
      res.redirect('/drones')
    })
    .catch(err => console.log("an error while updating",err))
  
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params
  Drone.findByIdAndRemove(id)
  .then(() => {
    console.log(`deleted ${id}`)
    res.redirect('/drones')
  })
  .catch(err => console.log(err))

  // ... your code here
});

module.exports = router;
