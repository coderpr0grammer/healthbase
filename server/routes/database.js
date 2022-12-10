const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel.js');

router.route('/database').get((req, res) => {
    
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
        prescriptions: req.prescriptions 
    })

    newPatient.save();
});

module.exports = router;