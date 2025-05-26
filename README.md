# Impilo Alert – Healthtech Follow-Up Reminder System

**Impilo Alert** is a lightweight and scalable Django-based healthtech application designed to help clinics and doctors manage patient follow-up appointments. It automatically sends SMS reminders to both patients and healthcare providers, improving care continuity and reducing missed appointments.

---

## 🚀 Features

- Store patient names, contact details, and appointment dates
- Automatic SMS reminders via Twilio API on the appointment day
- Django Admin panel for easy data management
- Ready for extension to WhatsApp, email, or push notifications
- Built for low-resource environments (works with just SMS)

---

## 🔧 Tech Stack

- **Backend:** Python, Django
- **Database:** SQLite (easily swappable with PostgreSQL or MySQL)
- **SMS API:** Twilio
- **Task Scheduling:** Manual trigger (extendable to Celery or cron jobs)
- **Environment Management:** `python-dotenv`

---

## 🛠 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/impilo-alert.git
   cd impilo-alert
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Create a `.env` file**
   ```env
   TWILIO_SID=your_twilio_account_sid
   TWILIO_TOKEN=your_twilio_auth_token
   TWILIO_PHONE=your_twilio_phone_number
   ```

4. **Run migrations and create superuser**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   python manage.py createsuperuser
   ```

5. **Start the development server**
   ```bash
   python manage.py runserver
   ```

6. **Access the admin panel**
   - Visit: `http://127.0.0.1:8000/admin`
   - Log in using your superuser credentials

7. **Send SMS reminders**
   ```bash
   python manage.py shell
   >>> from appointments.tasks import send_reminders
   >>> send_reminders()
   ```

---

## 📈 Project Traction

- **Month 1:** Built MVP using Django and integrated database for appointments
- **Month 2:** Connected Twilio for sending SMS reminders; tested locally
- **Month 3:** Ran a small pilot with a local clinic; sent real reminders
- **Month 4:** Received positive feedback and interest from healthcare workers
- **Month 5:** Preparing for public rollout, improved UI and onboarding strategy

---

## 💸 Business Model

- **Freemium access** for individual doctors
- **Paid monthly plans** for clinics and NGOs
- **SMS top-ups** for flexible usage
- **Custom deployments** for large institutions

---

## 🌍 Social Impact

- ✅ **SDG 3**: Promotes timely care and better health outcomes
- ✅ **SDG 9**: Innovates healthcare with scalable infrastructure
- ✅ **SDG 10**: Reduces healthcare access gaps in underserved areas

---

## 🤝 Contributing

Pull requests are welcome! If you’d like to contribute, please fork the repository and open a pull request.

---

## 📄 License

MIT License – free to use, modify, and distribute with attribution.

---

## Pitch Deck Link
https://www.canva.com/design/DAGoeGMnsjM/3xgZG9NgaarJLFKLra1jsQ/editutm_content=DAGoeGMnsjM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton 

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

![Dashboard](https://github.com/user-attachments/assets/3b842a8f-84e8-49ee-a5db-cf4565bb459d)


## Authors
Simamkele Sefalane 
Mosa Mokhaneli

---

This project is part of a Power Learn Project module
