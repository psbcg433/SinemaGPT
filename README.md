# 🎬 Sinemagpt (Ongoing Project)

Sinemagpt is a modern movie-themed web application built with React and Material UI. It supports Firebase authentication (email/password + Google) and features a protected feed layout displaying upcoming movies.

## 🖼️ Preview

![Homepage Preview](/public/homepage.png)
[Visit Sinemagpt](https://sinemagpt.web.app)

## 🚀 Features

- 🔐 Firebase Authentication (Email/Password & Google)
- 🧠 Redux Toolkit for state management
- 🎨 Material UI for fully responsive and styled UI
- 🔒 Protected Routes for authenticated access
- 📺 Movie Feed with demo posters, summaries, and release badges

## 🛠️ Stack

- **React**
- **Firebase Auth**
- **Redux Toolkit**
- **React Router DOM**
- **Material UI**
- **React Toastify**

## 🧪 Demo Features

- Dynamic login and registration via Firebase
- Conditional rendering based on user authentication
- Styled components with avatars, movie cards, and badges
- Responsive layout for mobile and desktop

## 📦 Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/your-username/sinemagpt.git

# 2. Install dependencies
cd sinemagpt
npm install

# 3. Create a .env file and add your Firebase credentials
REACT_APP_FIREBASE_API_KEY=your_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
...

# 4. Start the app
npm start
