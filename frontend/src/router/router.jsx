import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/Commons/Layout"
import HomePage from "../components/Commons/HomePage"
import AdminFlightSchedule from "../components/Admin/AdminFlightSchedule"
import ManageAdmins from "../components/Admin/ManageAdmins"
import AddFlightSchedule from "../components/Admin/AddFlightSchedule"
import AddFlight from "../components/Admin/AddFlight.jsx";
import UserProfile from "../components/User/UserProfile.jsx";
import ManageFlights from "../components/Admin/ManageFlights.jsx";
import FlightsTable from "../components/Admin/FlightsTable.jsx";

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
      { path: "/admin/manageFlights", element: <ManageFlights /> },
      { path: "/admin/addFlight", element: <AddFlight /> },
      { path: "/admin/flightsTable", element: <FlightsTable /> },
      { path: "/user/userProfile", element: <UserProfile /> },

    ],
  },
])

export default router
