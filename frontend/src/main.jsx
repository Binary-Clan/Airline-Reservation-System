import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { themeOptions } from "./theme/CustomTheme.js"
import { RouterProvider } from "react-router-dom"
import router from "./router/router.jsx"
import { Toaster } from "react-hot-toast"

const theme = createTheme(themeOptions)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
)
