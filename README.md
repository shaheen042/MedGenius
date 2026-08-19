## Project info
# 🩺 MedGenius – Smart Telemedicine Platform

MedGenius is a **smart telemedicine and healthcare assistance platform** designed to make healthcare information more accessible through AI-powered tools, online consultations, medicine analysis, and personalized health management.

The platform combines **MERN stack development, AI, OCR, WebRTC, Google Maps, SMS services, and workflow automation** to provide an integrated digital healthcare experience.

---

## 🚀 Features

### 🤖 AI Healthcare Assistant

* AI-powered conversational assistant using **Google Gemini API**.
* Provides general health-related information and assistance.
* Uses **Retrieval-Augmented Generation (RAG)** to improve responses using relevant knowledge sources.

### 💊 Medicine Scanner & Analyzer

* Scan medicine packages using the device camera.
* Extract medicine information using **OCR and TensorFlow.js**.
* Provides information such as:

  * Medicine name
  * Dosage information
  * Usage
  * Possible alternatives
* Helps compare **branded and generic medicines**.
* Displays estimated medicine prices in **Indian Rupees (₹)**.

### 👨‍⚕️ Online Doctor Consultation

* Enables patients to connect with doctors remotely.
* Uses **WebRTC** for real-time video communication.
* Supports an online consultation workflow without requiring physical visits.

### 📍 Doctor & Healthcare Location Search

* Uses the **Google Maps API** to help users find nearby healthcare facilities and medical services.

### ⏰ Medication Reminders

* Allows users to manage medication schedules.
* Provides reminders to help users follow their prescribed medication routine.

### 📊 Personalized Dashboard

* Centralized dashboard for managing:

  * Medicines
  * Reminders
  * Health-related information
  * Consultation activities

### 📱 SMS Integration

* Provides SMS-based communication and notification functionality.

### ⚙️ Workflow Automation

* Uses **n8n** to automate backend workflows and integrate different services.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* Tailwind CSS
* Shadcn UI

### Backend

* Node.js
* Express.js
* MongoDB

### AI & Machine Learning

* Google Gemini API
* Retrieval-Augmented Generation (RAG)
* TensorFlow.js
* OCR

### APIs & Integrations

* Google Maps API
* WebRTC
* SMS API
* n8n

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │      MedGenius      │
                    │   Web Application   │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
          ┌──────▼──────┐             ┌──────▼──────┐
          │   Frontend  │             │   Backend   │
          │ React + JS  │             │ Node +      │
          │ Tailwind    │             │ Express     │
          └──────┬──────┘             └──────┬──────┘
                 │                           │
        ┌────────┼─────────┐          ┌──────┼─────────┐
        │        │         │          │      │         │
        ▼        ▼         ▼          ▼      ▼         ▼
      Gemini    OCR     WebRTC     MongoDB  n8n    External APIs
       AI     TensorFlow             │
                .js                  │
                                     ▼
                              Healthcare Data
```

---

## 📂 Project Structure

```text
MedGenius/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   └── server.js
│
├── README.md
└── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/medgenius.git
```

### 2. Navigate to the project

```bash
cd medgenius
```

### 3. Install dependencies

For the frontend:

```bash
cd client
npm install
```

For the backend:

```bash
cd ../server
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
SMS_API_KEY=your_sms_api_key
```

> **Important:** Never commit your `.env` file or API keys to GitHub.

### 5. Start the backend

```bash
npm run dev
```

### 6. Start the frontend

Open another terminal:

```bash
cd client
npm run dev
```

The application will then be available on the local development server.

---

## 🔐 Security

* API keys are stored using environment variables.
* Sensitive configuration is excluded from version control.
* Authentication and authorization should be implemented for protected healthcare functionality.
* Patient-related information should be handled according to applicable privacy and security requirements.

---

## 🎯 Project Objectives

MedGenius aims to:

* Make healthcare assistance more accessible.
* Reduce unnecessary hospital visits through remote consultation.
* Help users understand their medicines.
* Provide AI-assisted healthcare information.
* Simplify medication management.
* Connect users with nearby healthcare services.
* Integrate multiple healthcare services into a single platform.

---

## 🔮 Future Enhancements

* Electronic Health Records (EHR)
* Doctor appointment scheduling
* Prescription upload and analysis
* AI-powered symptom assessment
* Secure patient-doctor chat
* Health analytics and reports
* Multi-language healthcare assistance
* Wearable-device integration
* Advanced authentication and role-based access control

---

## ⚠️ Disclaimer

MedGenius is an educational/software-development project and **does not replace professional medical advice, diagnosis, or treatment**. Users should consult qualified healthcare professionals for medical decisions.

---

## 👩‍💻 Author

**Shaheen Siddique**

B.Tech – Computer Science & Engineering

Interested in **Full-Stack Development, AI Integration, UI/UX, and Problem Solving**.

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

