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
        required:true,
    },
    address: {
        type:String,
        required:true,
    },
    notes: String,
    prescriptions: Array,
}

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;