import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import LoginTemplates from "../templates/LoginTemplates";

const Login = () => {
  const nav = useNavigate();

  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post(`${API_URL}/public/login`, data)
      .then((res) => {
        setToken(res.data.data.token);
        nav("/");
      })
      .catch((error) => {
        setError(error.response.data.data);
      });
  };

  return (
    <LoginTemplates>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            required
          />
        </div>
        <div className="text-center pt-1 mb-12 pb-1">
          <button className="bg-gradient w-full" type="submit">
            Ingresar
          </button>
          <Link className="text-gray-500" to="/registro">
            ¿Deseas registrarte?
          </Link>
        </div>
        {error && (
          <p className="text-center p-2 bg-red-100 text-red-800">
            {error ? "Usuario Incorrecto" : ""}
          </p>
        )}
      </form>
    </LoginTemplates>
  );
};

export default Login;
