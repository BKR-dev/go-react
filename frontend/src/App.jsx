import "./styles/App.css";
import "./styles/Body.scss";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dasboard/Dashboard";
import Cluster from "./pages/Cluster/Cluster";
import Deployments from "./pages/Deployments/Deployments";
import Applications from "./pages/Applications/Applications";
import Networks from "./pages/Networks/Networks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Index />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "cluster",
        element: <Cluster />,
      },

      {
        path: "deployments",
        element: <Deployments />,
      },
      {
        path: "applications",
        element: <Applications />,
      },
      {
        path: "networks",
        element: <Networks />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
