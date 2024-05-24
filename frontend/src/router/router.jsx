import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/Commons/Layout"
import HomePage from "../components/Commons/HomePage"
import AdminFlightSchedule from "../components/Admin/AdminFlightSchedule"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/admin/flightSchedule", element: <AdminFlightSchedule /> },
    ],
  },
])

export default router
