import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Detail from "./pages/detail";

// functional component
function App() {
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
      path: "signup",
      element: <Signup />,
    },
    {
      path: "detail",
      element: <Detail />
    }
  ]);

  // JSX
  return <RouterProvider router={router} />;
}

export default App;