import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Homes";
import Login from "./pages/Logins";
import Forgot from "./pages/Forgots";
import Signup from "./pages/Signups";
import Detail from "./pages/Details";
import Add from "./pages/Adds";
import Profile from "./pages/Profiles";
import Maintenance from "./pages/Maintenances";


// functional component
function App() {
  const maintenance = ["/profile"];
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


  const isPageMaintenance =
    process.env.REACT_APP_IS_MAINTENANCE === "true" &&
    maintenance.find((res) => res === document.location.pathname);
  if (isPageMaintenance) {
    
    return <Maintenance />;
  } else {
    // JSX
    return <RouterProvider router={router} />;
  }
}

export default App;