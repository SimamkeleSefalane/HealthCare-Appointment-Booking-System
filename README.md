# Impilo Alert: Healthcare Appointment Reminder System

A full-stack healthcare appointment reminder application built with:

- 🖥️ **Frontend**: HTML, CSS (Bootstrap), JavaScript
- 🧠 **Backend**: Node.js + Express + MongoDB
- 📲 **Twilio API**: Sends SMS or WhatsApp appointment reminders

---

## 📦 Features

- Add, edit, and delete patients
- Book appointments and view upcoming ones
- Dashboard summary with real-time statistics
- SMS/WhatsApp reminders via Twilio
- MongoDB integration for persistent data
- Dynamic filtering and searching
- Editable appointment statuses and inline actions

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB running locally or in the cloud (e.g. MongoDB Atlas)

### Installation
```bash
git clone <repo-url>
cd Impilo-Reorganized
npm install
```

### Environment Setup
Create a `.env` file in the root folder with:
```env
MONGO_URI=mongodb://localhost:27017/appointmentsDB
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number
```

### Running the Backend
```bash
cd Impilo-Reorganized
node server/index.js
```
The server should print: `MongoDB connected` and `Server running at http://localhost:3000`

### Running the Frontend
You can open the `public/index.html` file directly in a browser, or serve it via a static file server:
```bash
cd public
python3 -m http.server 5500
```
Then visit [http://localhost:5500](http://localhost:5500) in your browser.

---

## 🗂 Project Structure
```
server/
├── index.js             # Main server file
├── routes/              # Express routes
│   ├── patients.js
│   └── dashboard.js
├── models/              # Mongoose models
│   └── Patient.js
public/                  # Static frontend files
│   ├── index.html       # Dashboard UI
│   ├── patients.html    # Patient management
│   ├── appointment.html # Appointment booking
│   └── js/              # JavaScript for dynamic logic
```

---

## 🖼️ Dashboard UI Suggestions (for Better UX)

### ✅ Current Widgets:
- Total Patients
- Upcoming Appointments
- Confirmed Today
- Donut Chart: Appointments by Status

### 💡 Recommended Additions:
- 📅 **Mini Calendar** – shows appointments per day with date picker
- 🧾 **Activity Feed** – logs latest bookings or confirmations
- 🟢 **Live Status Badges** – real-time color-coded tags (Confirmed, Pending)
- 📊 **Trends Graph** – visualize weekly or monthly appointment trends (Chart.js)
- 📋 **Upcoming Today List** – next 5 appointments with patient and time
- 📌 **Quick Action Buttons** – always visible: “+ Patient”, “+ Appointment”

These improvements enhance visual clarity, help reduce missed appointments, and support faster workflows.

---

## ✨ Future Enhancements
- Authentication for doctors and staff
- Calendar integration (Google/Outlook)
- Email reminders with status tracking
- Docker containerization
- Analytics and reporting dashboard
- AI-assisted no-show predictions

---

## 📜 License
MIT License — free to use and modify for personal or commercial projects.

---

Made with 💙 for better healthcare coordination.
Deployed Link - https://healthtech-appointment-follow-up-reminder-system-syf7.vercel.app/
