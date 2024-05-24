import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/Commons/Layout"
import HomePage from "../components/Commons/HomePage"
import AdminFlightSchedule from "../components/Admin/AdminFlightSchedule"
import ManageAdmins from "../components/Admin/ManageAdmins"
import AddFlightSchedule from "../components/Admin/AddFlightSchedule"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/admin/schedule", element: <AdminFlightSchedule /> },
      { path: "/admin/addSchedule", element: <AddFlightSchedule /> },
      { path: "/admin/manageAdmins", element: <ManageAdmins /> },
    ],
  },
])

export default router
