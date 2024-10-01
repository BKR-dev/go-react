import "./styles/App.css";
import "./styles/Body.scss";
import Layout from "./components/Layout";
import Index from "./pages/Index";
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
