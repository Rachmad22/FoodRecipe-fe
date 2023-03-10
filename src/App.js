import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./pages/Index";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import Profile from "./pages/Profile";
import Maintenance from "./pages/Maintenance";

import store from "./store/Index";
import { Provider } from "react-redux";

// functional component
function App() {
  const maintenance = [""]

  const [isPageMaintenance, setIsPageMaintenance] = React.useState(
    process.env.REACT_APP_IS_MAINTENANCE === "true" &&
      maintenance.find((res) => res === document.location.pathname)
  )
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "forgot",
      element: <Forgot />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "detail/:name?",
      element: <Detail />
    },
    {
      path: "add",
      element: <Add />
    },
    {
      path: "profile",
      element: <Profile />
    }
  ])


  if (isPageMaintenance) {
    return <Maintenance
    maintenanceList={maintenance}
    turnOnMaintenance={() => setIsPageMaintenance(true)}
    turnOffMaintenance={() => setIsPageMaintenance(false)}
  />
  } else {
    // JSX
    return <Provider store={store}>
      <RouterProvider router={router} />
    </Provider> 
  }
}

export default App
