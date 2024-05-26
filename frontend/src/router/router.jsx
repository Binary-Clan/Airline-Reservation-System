import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/Commons/Layout"
import HomePage from "../components/Commons/HomePage"
import AdminFlightSchedule from "../components/Admin/AdminFlightSchedule"
import ManageAdmins from "../components/Admin/ManageAdmins"
import AddFlightSchedule from "../components/Admin/AddFlightSchedule"
import SelectSeat from "../components/FlightReservation/SelectSeat.jsx";
import SelectedSeatInformation from "../components/FlightReservation/SelectedSeatInformation.jsx";
import ProceedPayment from "../components/FlightReservation/ProceedPayment.jsx";
import PaymentSucess from "../components/FlightReservation/PaymentSucess.jsx";

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
      { path: "/reservation/flight-reservation", element: <SelectSeat />},
      {path: "/reservation/seat-info", element: <SelectedSeatInformation />},
      {path: "/reservation/payment", element: <ProceedPayment />},
      {path: "/reservation/payment-success", element: <PaymentSucess />}
    ],
  },
])

export default router
