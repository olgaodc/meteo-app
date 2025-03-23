import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import MainLayout from "src/components/main-layout/main-layout";
import HomePage from "src/pages/home/home";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: routes.HOME,
        element: <HomePage />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
