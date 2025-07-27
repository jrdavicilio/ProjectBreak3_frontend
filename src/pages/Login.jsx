import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      cache: "no-store"
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("profeLogeado", "true");
      navigate("/admin");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profeLogeado");
    setEmail("");
    setPassword("");
    setError("");
    navigate("/login");
  };

  return (
    <div className="page-container">
      <h2 className="login-title">Login Profesores</h2>

      {token ? (
        <>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Iniciar sesión</button>
        </form>
      )}

      {error && <p className="mensaje">{error}</p>}
    </div>
  );
};

export default Login;
