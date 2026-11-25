# Aarohan Technology — Full Stack MERN Application

A full-stack, enterprise-grade web application engineered for **Aarohan Technology** ("Building Smarter Solutions for a Digital Future"). Built with the **MERN** stack (**M**ongoDB, **E**xpress.js, **R**eact 19, and **N**ode.js) and styled with Tailwind CSS, Lucide icons, and modern animations.

---

## 🏔️ Brand & Logo Integration

The application integrates the official **Aarohan Technology** crest featuring:
- **The Ascending Peak / Crystal Mountain**: Embodying the meaning of *Aarohan* (Ascent / Elevation / Rise).
- **The Soaring Blue Arrow**: Representing exponential digital growth and future-forward innovation.
- **Futuristic Wordmark**: Distinct geometric typography and high-tech cyan accents.
- Stored at `client/src/assets/logo.png` and `client/public/logo.png` (also configured as favicon).

---

## ⚡ Technology Stack

### Frontend (React & Tailwind)
- **React 19** with Vite for ultra-fast Hot Module Replacement (HMR).
- **Tailwind CSS v4** with custom theme tokens, modern card hover elevations, and responsive breakpoints.
- **Lucide Icons** for clean, scalable vector iconography.
- **ThemeContext**: Instant, smooth toggle between **Light Mode** and **Dark Mode**.
- **Axios API Client**: Auto-configured to communicate with the Express backend at `http://localhost:5000/api`.

### Backend (Node.js & Express)
- **Node.js** with ES Modules (`"type": "module"`).
- **Express 4**: Modular REST API with structured controllers, routes, and middleware.
- **CORS & Morgan**: Logging and cross-origin resource sharing.

### Database (MongoDB & Mongoose)
- **MongoDB**: Runs on `mongodb://127.0.0.1:27017/aarohan_technology` (or MongoDB Atlas URI).
- **Mongoose Models**:
  - `Contact`: Manages leads, budget range, service type, requirements, and status (`new`, `in-review`, `contacted`, `completed`).
  - `Service`: Core services with automated seed initialization.
  - `Project`: Filterable case studies with metrics and tech tags.
  - `Newsletter`: Email subscriptions.
- **Resilient Fallback**: If MongoDB service is paused or unconfigured, the server gracefully activates an in-memory session store so development never stops.

---

## 🚀 How to Run the Application

### 1. Start Both Frontend & Backend Concurrently (Recommended)
From the root directory (`c:\Users\HomeUser\Documents\AarohanTech`):

```bash
npm run dev
```

This single command boots:
* **Backend API**: `http://localhost:5000`
* **Frontend React App**: `http://localhost:5173`

---

### 2. Or Run Server and Client Separately

#### In Terminal 1 (Backend Server):
```bash
cd server
npm run dev
```

#### In Terminal 2 (React Client):
```bash
cd client
npm run dev
```

---

## 📡 API Endpoints Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Returns server health, MongoDB connection status, and company info. |
| `POST` | `/api/contact` | Submits project inquiries directly into MongoDB collection. |
| `GET` | `/api/contact` | Retrieves all inquiries (viewable in the UI via the **MERN Inbox** modal). |
| `PATCH` | `/api/contact/:id` | Updates inquiry status (`new` → `in-review` → `contacted` → `completed`). |
| `GET` | `/api/services` | Fetches core services (auto-seeds defaults if empty). |
| `GET` | `/api/projects` | Fetches portfolio case studies (supports `?category=...` filter). |
| `POST` | `/api/newsletter` | Adds subscriber email to the newsletter collection. |

---

## 📂 Project Structure

```
AarohanTech/
├── server/
│   ├── config/
│   │   └── db.js                 # MongoDB connection & status tracker
│   ├── models/
│   │   ├── Contact.js            # Inquiries schema (fullName, email, phone, service, budget, message)
│   │   ├── Project.js            # Case studies schema
│   │   ├── Service.js            # Services schema
│   │   └── Newsletter.js         # Newsletter subscribers schema
│   ├── routes/
│   │   ├── contactRoutes.js      # /api/contact
│   │   ├── projectRoutes.js      # /api/projects
│   │   ├── serviceRoutes.js      # /api/services
│   │   └── newsletterRoutes.js   # /api/newsletter
│   ├── data/
│   │   └── initialData.js        # Seed services & projects
│   ├── server.js                 # Express app entry point
│   ├── package.json
│   └── .env
│
├── client/
│   ├── public/
│   │   └── logo.png              # Official company crest
│   ├── src/
│   │   ├── assets/
│   │   │   └── logo.png
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Sticky navigation + theme toggle + MERN Inbox button
│   │   │   ├── Hero.jsx          # Hero section with logo crest, metrics & pill badge
│   │   │   ├── StatsSection.jsx  # Impact metrics counter
│   │   │   ├── ServicesSection.jsx # "What We Do" cards + detail modal
│   │   │   ├── WhyChooseUs.jsx   # Innovation, Reliability, Growth
│   │   │   ├── ProjectsSection.jsx # Filterable case studies
│   │   │   ├── TechStack.jsx     # Tech marquee
│   │   │   ├── CTASection.jsx    # "Have an idea? Let's build it together."
│   │   │   ├── ContactModal.jsx  # Interactive MongoDB submission modal
│   │   │   ├── AdminInboxModal.jsx # Real-time MongoDB inquiry viewer & status updater
│   │   │   └── Footer.jsx        # Footer with newsletter & company details
│   │   ├── context/
│   │   │   └── ThemeContext.jsx  # Light/Dark mode state
│   │   ├── services/
│   │   │   └── api.js            # Axios client with fallback
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css             # Tailwind v4 styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── package.json                  # Root orchestration (concurrently)
└── README.md
```
