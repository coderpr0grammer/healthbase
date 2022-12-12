const mongoose = require('mongoose');

const patientSchema = {
    healthnum: {
        type:String,
        required: true
    },
    name: {
        type:String,
        required:true
    },
    dob: {
        type:Date,
        required:true
    },
    sex: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    notes: String,
}

const Patient = mongoose.model('Patient', patientSchema, 'patients');

module.exports = Patient;