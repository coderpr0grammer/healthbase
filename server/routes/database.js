const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel.js');

console.log('connected to database.js')

router.route('/getdatabase').get((req, res) => {
    
    Patient.find().sort({name: 1}).limit(50)
        .then(patients => {})
});

router.route('/addpatient').post((req, res) => {
    const newPatient = new Patient({
        healthnum: req.healthnum,
        name: req.name,
        dob: req.dob,
        age: req.age,
        address: req.address,
        notes: req.notes,
    })
    console.log('this is a test')
    newPatient.save();
});

module.exports = router;