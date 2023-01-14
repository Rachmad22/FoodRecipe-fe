import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Homes";
import Login from "./pages/Logins";
import Forgot from "./pages/Forgots";
import Signup from "./pages/Signups";
import Detail from "./pages/Details";
import Add from "./pages/Adds";
import Profile from "./pages/Profiles";
import Maintenance from "./pages/Maintenances";
import React from "react";

// functional component
function App() {
  const maintenance = ["/profile"];
  const [isPageMaintenance, setIsPageMaintenance] = React.useState(
    process.env.REACT_APP_IS_MAINTENANCE === "true" &&
      maintenance.find((res) => res === document.location.pathname)
  );
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
  ]);



  if (isPageMaintenance) {
    
    return <Maintenance 
    maintenanceList={maintenance}
    turnOnMaintenance={() => setIsPageMaintenance(true)}
    turnOffMaintenance={() => setIsPageMaintenance(false)}
    />;
  } else {
    // JSX
    return <RouterProvider router={router} />;
  }
}

export default App;