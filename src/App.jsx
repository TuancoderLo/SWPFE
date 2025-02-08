import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [currentPage, setCurrentPage] = useState("login"); // 'login' hoặc 'register'

  return (
    <div className="app-container">
      {currentPage === "login" ? (
        <Login onSwitchToRegister={() => setCurrentPage("register")} />
      ) : (
        <Register onSwitchToLogin={() => setCurrentPage("login")} />
      )}
    </div>
  );
}

export default App;
