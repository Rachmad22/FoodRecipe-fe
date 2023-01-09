import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import Profile from "./pages/Profile";
import Maintenance from "./pages/Maintenance";


// functional component
function App() {
  const maintenance = ["/profile", "/add"];
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

  // JSX
  // return <RouterProvider router={router} />;
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