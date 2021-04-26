// Iteration #1
const { Mongoose } = require("mongoose");
const Drone = require("../models/Drone.model");

const drones = [{
        name: "one",
        propeller: 2,
        maxSpeed: 100

    },
    {
        name: "two",
        propeller: 8,
        maxSpeed: 400

    },
    {
        name: "three",
        propeller: 4,
        maxSpeed: 240


    }
];

Drone.create(drones)
    .then(() => {
        console.log('drones created: ', { drones })
        Mongoose.connection.close();
    })
    .catch((error) => {
        console.log('an error ocurred while searching from DB', error)
    })