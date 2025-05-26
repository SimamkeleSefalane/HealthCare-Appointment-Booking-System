// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const twilio = require('twilio');

dotenv.config();
const app = express();
const patientRoutes = require('./routes/patients');
app.use('/api/patients', patientRoutes);


app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const appointmentSchema = new mongoose.Schema({
    patientName: String,
    doctorName: String,
    appointmentTime: Date,
    phoneNumber: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Twilio setup
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
const TWILIO_PHONE = process.env.TWILIO_PHONE;

// Routes
app.post('/appointments', async (req, res) => {
    try {
        const { patientName, doctorName, appointmentTime, phoneNumber } = req.body;
        const appointment = new Appointment({
            patientName,
            doctorName,
            appointmentTime,
            phoneNumber,
        });
        await appointment.save();

        // Send SMS Reminder
        await twilioClient.messages.create({
            body: `Reminder: Appointment for ${patientName} with ${doctorName} at ${new Date(appointmentTime).toLocaleString()}`,
            from: TWILIO_PHONE,
            to: phoneNumber,
        });

        res.status(201).json({ message: 'Appointment booked and SMS sent.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to book appointment.' });
    }
});

app.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find().sort({ appointmentTime: 1 });
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching appointments.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATIENTS_FILE = './data/patients.json';

router.post('/api/patients', (req, res) => {
    const { name, phone, dob } = req.body;
    if (!name || !phone) {
        return res.status(400).json({ message: 'Name and phone are required' });
    }

    const newPatient = { id: Date.now(), name, phone, dob };

    let patients = [];
    if (fs.existsSync(PATIENTS_FILE)) {
        const data = fs.readFileSync(PATIENTS_FILE);
        patients = JSON.parse(data);
    }

    patients.push(newPatient);
    fs.writeFileSync(PATIENTS_FILE, JSON.stringify(patients, null, 2));
    res.status(201).json({ message: 'Patient added', patient: newPatient });
});
