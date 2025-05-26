document.getElementById('appointmentForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        patientName: document.getElementById('patientName').value,
        doctorName: document.getElementById('doctorName').value,
        appointmentTime: document.getElementById('appointmentTime').value,
        phoneNumber: document.getElementById('phoneNumber').value,
    };

    const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    const result = await res.json();
    document.getElementById('status').innerText = result.message;
});

app.post('/api/appointments', (req, res) => {
    // Logic to store appointment + trigger Twilio SMS
});

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const appointmentSchema = new mongoose.Schema({
    patientName: String,
    doctorName: String,
    appointmentTime: Date,
    phoneNumber: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// routes/dashboard.js
const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');

router.get('/summary', async (req, res) => {
    try {
        const totalPatients = await Patient.countDocuments();
        const now = new Date();
        const upcomingAppointments = await Appointment.countDocuments({ date: { $gte: now } });
        const startOfDay = new Date(now.setHours(0, 0, 0, 0));
        const endOfDay = new Date(now.setHours(23, 59, 59, 999));
        const confirmedToday = await Appointment.countDocuments({ status: 'Confirmed', date: { $gte: startOfDay, $lte: endOfDay } });

        res.json({ totalPatients, upcomingAppointments, confirmedToday });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
// server.js or app.js
app.use('/api/dashboard', require('./routes/dashboard'));



