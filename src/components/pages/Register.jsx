import { Link, useNavigate } from "react-router-dom"
import LoginTemplates from "../templates/LoginTemplates"
import { useState } from "react"
import axios from "axios"
import { API_URL } from "../../constants/env"

const Register = () => {
  const nav = useNavigate();
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    setError()

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
			details: {
				fullname: e.target.fullname.value,
			}
    }

    axios
      .post(`${API_URL}/public/users`, data)
      .then(() => {
        nav("/login")
      })
      .catch((error) => {
        setError(error.response.data.data)
      })
  }

  return (
    <LoginTemplates title="Registro Usuario">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <input
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
            type="text"
            placeholder="Nombre Completo"
            name="fullname"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
            type="email"
            placeholder="Correo electrónico"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
            type="password"
            placeholder="Contraseña"
            name="password"
            required
          />
        </div>
        <div className="text-center pt-1 mb-12 pb-1">
          <button className="bg-gradient w-full p-3" type="submit">
            Crear cuenta
          </button>
          <Link className="text-gray-500" to="/login">
            ¿Ya tiene cuenta? Inicie sesión
          </Link>
        </div>
        {error && (
          <p className="text-center p-2 bg-red-100 text-red-800">
            {error?.response?.data.error[0].message}
          </p>
        )}
      </form>
    </LoginTemplates>
  );
}

export default Register;
