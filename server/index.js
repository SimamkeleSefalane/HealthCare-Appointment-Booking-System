require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const twilio = require('twilio');

const app = express();
const PORT = process.env.PORT || 3000;

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// File path for storing appointments
const appointmentsFile = path.join(__dirname, 'appointments.json');

// Create the file if it doesn't exist
if (!fs.existsSync(appointmentsFile)) {
    fs.writeFileSync(appointmentsFile, JSON.stringify([]));
}

// POST: Save new appointment
app.post('/api/appointments', (req, res) => {
    const { patientName, doctorName, appointmentTime, phoneNumber } = req.body;

    const newAppointment = {
        patientName,
        doctorName,
        appointmentTime,
        phoneNumber,
    };

    // Read existing appointments
    const data = fs.readFileSync(appointmentsFile);
    const appointments = JSON.parse(data);

    // Add new appointment
    appointments.push(newAppointment);

    // Save back to file
    fs.writeFileSync(appointmentsFile, JSON.stringify(appointments, null, 2));

    // Send SMS or WhatsApp message
    client.messages
        .create({
            body: `Hello ${patientName}, your appointment with Dr. ${doctorName} is scheduled for ${appointmentTime}.`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phoneNumber.startsWith('whatsapp:')
                ? phoneNumber
                : `+${phoneNumber}`,
        })
        .then((message) => {
            console.log('Reminder sent:', message.sid);
            res.json({ message: 'Appointment saved and reminder sent.' });
        })
        .catch((error) => {
            console.error('Twilio error:', error);
            res.status(500).json({ message: 'Appointment saved but failed to send reminder.' });
        });
});

// GET: Return all appointments
app.get('/api/appointments', (req, res) => {
    const data = fs.readFileSync(appointmentsFile);
    const appointments = JSON.parse(data);
    res.json(appointments);
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});

// Mark appointment as completed
app.post('/api/appointments/complete', (req, res) => {
    const { index } = req.body;
    const data = fs.readFileSync(appointmentsFile);
    const appointments = JSON.parse(data);

    if (appointments[index]) {
        appointments[index].completed = true;
        fs.writeFileSync(appointmentsFile, JSON.stringify(appointments, null, 2));
        res.json({ message: 'Appointment marked as completed.' });
    } else {
        res.status(404).json({ message: 'Appointment not found.' });
    }
});

// Delete appointment
app.post('/api/appointments/delete', (req, res) => {
    const { index } = req.body;
    const data = fs.readFileSync(appointmentsFile);
    const appointments = JSON.parse(data);

    if (appointments[index]) {
        appointments.splice(index, 1);
        fs.writeFileSync(appointmentsFile, JSON.stringify(appointments, null, 2));
        res.json({ message: 'Appointment deleted.' });
    } else {
        res.status(404).json({ message: 'Appointment not found.' });
    }
});
