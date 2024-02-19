import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Error404 from "../components/pages/Error404";
import App from "../components/templates/App";
import Products from "../components/pages/Products";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Form from "../components/pages/admin/products/Form";
import Table from "../components/pages/admin/products/Table";
import Admin from "../components/templates/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/productos",
        element: <Products />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/productos",
        element: <Table />,
      },
      {
        path: "/admin/productos/crear",
        element: <Form />,
      },
      {
        path: "/admin/productos/editar/:id",
        element: <Form />,
      },
    ],
  },
]);

export default router;
