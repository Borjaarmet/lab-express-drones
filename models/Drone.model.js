const mongoose = require("mongoose");
const { Schema } = mongoose;

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,

});

const Drone = mongoose.model('Movie', droneSchema);
Drone
    .save()
    .then(newDrone => console.log(`a new drone is created: ${newDrone}!`))
    .catch(err => console.log(`error while creating a new drone: ${err}`))



module.exports = Drone;