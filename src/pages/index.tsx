import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./Home/Home"));
const Statistic = lazy(() => import("./Statistic/Statistic"));
const Login = lazy(() => import("./Login/Login"));
const Auth = lazy(() => import("./auth/Auth"));

const MainRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "/statis",
              element: <Statistic />,
            },
          ],
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
  ]);
};

export default React.memo(MainRouter);
