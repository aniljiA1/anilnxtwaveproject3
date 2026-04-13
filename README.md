# 🚀 Touch Typing Trainer (React + Redux)

A modern web-based touch typing practice application focused on improving typing speed and accuracy using muscle memory.

---

## 📌 Overview

This application helps users practice touch typing using a limited set of keys:

```
asdfjkl;
```

Each key is mapped to specific fingers, helping users build muscle memory and improve typing efficiency over time.

---

## ✨ Features

### ✅ Must Have

* ⌨️ Typing input box
* 🎯 Highlight next key to press
* ⏱️ 5-minute practice timer
* 📊 Accuracy calculation (%)
* 🔢 Total & correct keystrokes tracking

### ⭐ Nice to Have

* ⚛️ State management using Redux Toolkit
* 🎨 Clean UI with Tailwind CSS
* 🔁 Dynamic key sequence generation
* ⚡ Real-time feedback

---

## 🧠 Thought Process

The application is designed keeping multiple user scenarios in mind:

### 👤 Beginner Users

* Focus on limited keys (`asdfjkl;`)
* Visual guidance via highlighted keys

### ⚡ Intermediate Users

* Improve speed through continuous typing
* Accuracy tracking helps identify mistakes

### 🏁 Advanced Users

* Practice under time constraints (5 min)
* Improve consistency and muscle memory

---

## 🏗️ Tech Stack

* ⚛️ React (Vite)
* 🧠 Redux Toolkit
* 🎨 Tailwind CSS
* 📦 JavaScript (ES6+)

---

## 📁 Project Structure

```
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── typing/
│       └── typingSlice.js
│
├── components/
│   ├── TypingBox.jsx
│   ├── Keyboard.jsx
│   ├── Stats.jsx
│   ├── Timer.jsx
│
├── utils/
│   └── generateKeys.js
│
├── App.jsx
├── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/aniljiA1/anilnxtwaveproject3.git
cd touch-typing-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Application

```bash
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

## 🧮 How It Works

* A random sequence of keys is generated
* User types using keyboard input
* System checks:

  * ✔ Correct key
  * ❌ Incorrect key
* Metrics calculated:

  * Total keystrokes
  * Correct keystrokes
  * Accuracy %

---

## 📊 Accuracy Formula

```
Accuracy (%) = (Correct Keystrokes / Total Keystrokes) × 100
```

---

## 🚀 Future Improvements

* 📈 Words Per Minute (WPM) calculation
* 🎵 Sound feedback (correct/incorrect)
* 📊 Performance analytics dashboard
* 🧠 Adaptive difficulty (AI-based)
* 👤 User authentication & progress tracking
* 🌐 Deployment (Vercel / Netlify)

---

## 🌍 Live Demo

👉 Add your deployed link here

```
https://anilnxtwaveproject3.vercel.app/
```

---


## 👨‍💻 Author

**Anil Kumaer**

---




