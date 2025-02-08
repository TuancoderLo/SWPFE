import { useState } from "react";
import "./Login.css";
import { FaHome } from "react-icons/fa";

function Login({ onSwitchToRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập ở đây
  };

  return (
    <div className="auth-container">
      <div
        className="auth-image"
        style={{
          backgroundImage: `url('https://www.anhngu.usc.edu.vn/Data/Sites/1/News/4358/ielts-speaking-topic-family.jpg')`,
        }}
      />
      <div className="auth-form">
        <div className="home-icon">
          <FaHome onClick={() => (window.location.href = "/")} />
        </div>
        <div className="form-content">
          <div className="title-section">
            <h1>Welcome Back</h1>
            <p>
              Come and discovering new adventures
              <br />
              with us
            </p>
          </div>

          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Enter your username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Enter your password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>

              <button type="submit" className="submit-btn">
                Login
              </button>

              <div className="divider">
                <span>or</span>
              </div>

              <button type="button" className="google-btn">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWg7X0YYzUCU5m8BA_sH_ti92q4X0lCz5h_w&s"
                  alt="Google"
                />
                Continue with Google
              </button>

              <div className="bottom-divider"></div>
            </form>
          </div>

          <div className="bottom-section">
            <div className="register-section">
              <p>First time visit?</p>
              <button onClick={onSwitchToRegister} className="register-btn">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
