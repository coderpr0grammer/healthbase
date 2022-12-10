const mongoose = require('mongoose');

const prescriptionSchema = {
    id: Number,
    clinic_info: String,
    drug_name: String,
    drug_strength: String,
    dosage_form: String,
    quantity: Number,
    directions: String,
    refills: Number,
    date_issued: {
        type:Date,
        default: () => Date.now()
    },
    filled: Boolean
}

const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;