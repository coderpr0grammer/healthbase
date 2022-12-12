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
        healthnum: req.patient.healthnum,
        name: req.patient.name,
        dob: req.patient.dob,
        age: req.patient.age,
        address: req.patient.address,
        notes: req.patient.notes,
    })
    console.log('recieved post request for new patient')
    newPatient.save();
});

module.exports = router;