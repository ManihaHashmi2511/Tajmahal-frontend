import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/login`,
        { email, password }
      );

      sessionStorage.setItem("adminToken", res.data.token);

      Swal.fire({
        icon: "success",
        title: "Login successful!",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        navigate("/admin/Dashboard");
      }, 1000);

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login failed!",
        text: err.response.data.message,
      });
    }
  };

  return (
    <div className="login-container">

        <div className="login-image"></div>

  <div className="login-form-section">
    <form className="login-card" onSubmit={handleLogin}>
        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
  </div>
    </div>
  );
};

export default Login;
