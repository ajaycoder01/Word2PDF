# 📄 Word to PDF Converter

A simple **Word (.doc/.docx) to PDF Converter** built using **React (Frontend)** and **Node.js + Express (Backend)**.
Users can upload a Word file and instantly download the converted PDF.

> ⚠️ Note: This project focuses on **basic Word to PDF conversion**. Advanced formatting like exact layout, complex tables, and images may not always be preserved depending on the conversion library used.

---

## 🚀 Features

* Upload **.doc / .docx** files
* Convert Word to PDF
* Instant PDF download
* Clean and modern UI (Tailwind CSS)
* No authentication required

---

## 🛠 Tech Stack

### Frontend

* React.js
* Axios
* Tailwind CSS
* React Icons

### Backend

* Node.js
* Express.js
* Multer (file upload)
* docx-pdf (Word → PDF conversion)
* CORS

---

## 📂 Project Structure

```
project-root/
│
├── backend/
│   ├── uploads/
│   ├── files/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── Home.jsx
│   │   └── ...
│   └── package.json
│
└── README.md
```
---

### 1️⃣ Backend Setup

```bash
cd backend
npm install
node server.js
```
---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```
---

⭐ If you like this project, don't forget to **star the repo**!
