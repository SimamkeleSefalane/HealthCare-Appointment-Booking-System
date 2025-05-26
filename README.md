# Healthcare Dashboard

This is a simple web-based healthcare dashboard that allows doctors to manage patients and appointments. Built using Vanilla JavaScript, HTML, CSS, Bootstrap, and MongoDB.

## Features

- Dashboard with summary cards (Total Patients, Upcoming Appointments)
- Add new patients
- Book appointments
- Responsive sidebar navigation
- Clean and modern UI

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (Vanilla JS)
- MongoDB (backend)

## Folder Structure

HealthCare-Appointment-Booking-System/
├── public/
│ ├── index.html # Main UI file
│ ├── styles.css # Styling
│ └── script.js # Client-side logic
├── server/
│ ├── server.js # Express server entry
│ ├── db.js # MongoDB connection
│ ├── models/
│ │ └── appointmentModel.js # Mongoose model
│ └── routes/
│ └── api.js # API routes (appointments, patients, etc.)
├── .env # Environment variables (Twilio, Mongo URI)
├── package.json
└── README.md

## How to Run

1. Clone this repository.
2. Navigate to the /Public directory.
3. Open `index.html` in your browser.
4. Make sure your backend (MongoDB server) is up and connected (if dynamic functionality is enabled).

## UI Preview

Dashboard View:
- Personalized greeting for the doctor (e.g., "Welcome, Dr. Sefalane")
- Sidebar navigation with:
  - Dashboard
  - Patients
  - Appointments
  - Settings
- Summary Cards showing:
  - Total Patients (e.g., 24)
  - Upcoming Appointments (e.g., 5)
- Quick Action Buttons:
  - Add Patient (green button)
  - Book Appointment (blue button)

## Screenshot

![Healthcare Dashboard UI](screenshot.png)

## Authors
Simamkele Sefalane 
Mosa Mokhaneli

---

This project is part of a Power Learn Project module
