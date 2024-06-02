import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { themeOptions } from "./theme/CustomTheme.js"
import { RouterProvider } from "react-router-dom"
import router from "./router/router.jsx"
import { Toaster } from "react-hot-toast"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import {Provider} from "react-redux";
import store from "../Redux/store.js";

const theme = createTheme(themeOptions)
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools />
          </QueryClientProvider>
          <Toaster />
        </ThemeProvider>
      </React.StrictMode>
    </Provider>
)
