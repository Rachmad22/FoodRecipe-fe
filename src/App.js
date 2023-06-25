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
import Logout from "./pages/Logout";

import store from "./store/Index";
import { Provider } from "react-redux";

// sentry error tracker
import * as Sentry from "@sentry/react"
// Google analytics
import ReactGA from "react-ga4";

ReactGA.initialize("G-9P213XVE0W");

Sentry.init({
  dsn: "https://f53bc790709548b6a11dcb036e266084@o4505419581816832.ingest.sentry.io/4505419586011136",
  integrations: [
    new Sentry.BrowserTracing({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

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
    },
    {
      path: "logout",
      element: <Logout />
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
    return (
      <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider> 
      </>
  )}
}

export default App
