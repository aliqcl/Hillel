import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import CountriesRoute from "./routes/CountriesRoute";
import CountryRoute from "./routes/CountryRoute";
import ErrorRoute from "./routes/ErrorRoute";
import Layout from './pages/Layout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />
      },
      {
        path: "/countries",
        element: <CountriesRoute />
      },
      {
        path: "/countries/:countryId",
        element: <CountryRoute />
      }
    ]
  }
]);


function App() {
  return <RouterProvider router={router} />
}


export default App;
