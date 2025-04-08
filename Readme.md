# ChatBotApp

A modern chatbot application featuring a React frontend and a Node.js backend.

## ✨ Features

*   Real-time chat with instant message delivery
*   User authentication and secure sessions
*   Responsive design that works on desktop and mobile
*   Message history and chat persistence
*   Support for text, emojis, and markdown formatting
*   Typing indicators and online status
*   User profiles with customizable avatars

## 🛠️ Tech Stack

**Frontend:**

*   [React](https://reactjs.org/)
*   [Vite](https://vitejs.dev/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [React Router](https://reactrouter.com/)
*   [Framer Motion](https://www.framer.com/motion/)
*   [Lucide Icons](https://lucide.dev/)

**Backend:**

*   [Node.js](https://nodejs.org/)
*   [Express](https://expressjs.com/)
*   [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
*   [JSON Web Tokens (JWT)](https://jwt.io/) for authentication
*   [bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing
*   [CORS](https://www.npmjs.com/package/cors)

## 📋 Prerequisites

*   [Node.js](https://nodejs.org/en/download/) (includes npm)
*   [MongoDB](https://www.mongodb.com/try/download/community) instance (local or cloud-based like MongoDB Atlas)

## ⚙️ Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd ChatBotApp
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    cd frontend
    npm install
    ```

3.  **Install Backend Dependencies:**
    ```bash
    cd ../backend
    npm install
    ```

## 🚀 Running the Application

1.  **Configure Backend Environment Variables:**
    *   Navigate to the `backend` directory.
    *   Create a `.env` file.
    *   Add necessary environment variables, such as:
        ```env
        MONGODB_URI=<your_mongodb_connection_string>
        JWT_SECRET=<your_jwt_secret_key>
        PORT=5000 # Or any other preferred port
        ```

2.  **Start the Backend Server:**
    *   From the `backend` directory:
    ```bash
    npm run dev
    ```
    *   The backend server will typically start on the port specified in your `.env` or code (e.g., `http://localhost:5000`).

3.  **Start the Frontend Development Server:**
    *   Open a *new* terminal window/tab.
    *   Navigate to the `frontend` directory:
    ```bash
    cd ../frontend
    npm run dev
    ```
    *   The frontend application will typically start on `http://localhost:5173` (Vite's default) or the specified host/port. Open this URL in your browser.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## 📄 License

*(Add your chosen license here, e.g., MIT License)*
