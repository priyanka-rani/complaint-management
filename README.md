# Complaint Management System

A full-stack web application for submitting and managing public complaints. Built using **Vite + React** on the frontend and **Express + Supabase** on the backend.

---

## Project Structure

```
complaint-management/
├── client/       # React frontend (Vite)
├── server/       # Express backend (Supabase integration)
└── README.md     # This file
```

---

## Setup Instructions

### Prerequisites

* Node.js **v18 or higher**
* A [Supabase](https://supabase.com/) project
* Environment variables for Supabase credentials

### 📦 Installation

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/complaint-management.git
cd complaint-management
```

#### 2. Backend Setup

```bash
cd server
npm install
```

#### 3. Frontend Setup

```bash
cd ../client
npm install
```

---

### ▶️ Running the Application

From the root project directory:

```bash
npm install
npm run start
```

This will run both frontend and backend concurrently using `concurrently`.

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend API: [http://localhost:3000/api](http://localhost:3000/api)

---

## Routes Overview

### Public Routes

* `/submit` – Public interface for submitting complaints.

### Admin Routes

* `/admin` – Internal dashboard for viewing and managing complaints.

### API Endpoints (`/api/complaints`)

* `GET /api/complaints` – Fetch all complaints
* `POST /api/complaints` – Submit a new complaint
* `PUT /api/complaints/:id` – Update a complaint
* `DELETE /api/complaints/:id` – Delete a complaint

All endpoints are integrated with Supabase.

---

## Assumptions and Tradeoffs

* Assumed public complaints do not require authentication.
* Admin panel is accessible without authentication due to limited time.
* Backend uses Supabase service role key for full database access.
* Chose a monorepo-style structure for simplicity in development.

---

## Improvements for Next Time

Given more time, I would:

* Add user authentication and role-based access control (e.g., Supabase Auth)
* Implement filtering, sorting, and search in the admin dashboard
* Add email notifications for new complaints and status updates
* Add pagination or infinite scroll for complaint lists
* Secure API routes with authentication middleware
* Containerize using Docker + Docker Compose
* Write unit and integration tests

---

## Tech Stack

| Layer     | Technology                |
| --------- | ------------------------- |
| Frontend  | React, Vite, Tailwind CSS |
| Backend   | Node.js, Express          |
| Database  | Supabase (PostgreSQL)     |
| Dev Tools | Concurrently, dotenv, npm |

---

## Submission Notes

* ✅ `/submit` and `/admin` pages implemented
* ✅ Fully working backend API with Supabase integration
* ✅ Modular and extendable code structure
* ✅ Includes this `README.md` with setup, assumptions, and improvement notes

---
