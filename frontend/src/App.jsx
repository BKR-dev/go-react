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
    element: (
      <Layout>
        <Index />
      </Layout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },

  {
    path: "/cluster",
    element: (
      <Layout>
        <Cluster />
      </Layout>
    ),
  },

  {
    path: "/deployments",
    element: (
      <Layout>
        <Deployments />
      </Layout>
    ),
  },
  {
    path: "/applications",
    element: (
      <Layout>
        <Applications />
      </Layout>
    ),
  },
  {
    path: "/networks",
    element: (
      <Layout>
        <Networks />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
