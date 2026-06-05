# Preproute Test Assignment

## Overview

This project is a Test Management System built using React, TypeScript, Vite, React Router, React Hook Form, and Tailwind CSS.

The application allows users to create tests, add questions, preview test details, and publish tests through a multi-step workflow.

---

## Features

### Authentication

* User Login
* Token-based authentication using localStorage
* Protected Routes
* Logout functionality

### Dashboard

* View all created tests
* Display test details
* Create new test
* Delete test
* View test preview
* Logout

### Create Test

Users can create a test with:

* Test Name
* Subject
* Difficulty Level
* Test Type
* Total Time
* Total Marks
* Positive Marks
* Negative Marks
* Unattempt Marks
* Topics
* Sub Topics

### Add Questions

Users can add multiple questions including:

* Question Statement
* Four Options
* Correct Answer
* Explanation
* Difficulty
* Topic
* Sub Topic
* Media URL

### Preview & Publish

* Preview all added questions
* Review question details
* Publish test
* Redirect to Dashboard

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* React Router DOM
* React Hook Form
* Tailwind CSS

### Storage

* Browser LocalStorage

---

## Project Structure

```text
src/
│
├── pages/
│   ├── Login/
│   ├── Dashboard/
│   ├── CreateTest/
│   ├── AddQuestions/
│   └── PreviewPublish/
│
├── routes/
│
├── services/
│
└── App.tsx
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd Preproute-Test
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## Build Project

To create a production build:

```bash
npm run build
```

---

## Project Workflow

1. Login
2. Dashboard
3. Create Test
4. Add Questions
5. Preview Test
6. Publish Test
7. Return to Dashboard

---

## Validation

The project has been successfully tested with:

```bash
npm run build
```

and produces a successful production build without TypeScript errors.

---

## Future Improvements

* Backend API Integration
* Edit Existing Tests
* Edit Existing Questions
* Search and Filter Tests
* Subject/Topic APIs
* Test Analytics Dashboard

---

## Note

This project currently uses LocalStorage for data persistence. The structure has been designed so that API integration can be added in the future with minimal changes.
