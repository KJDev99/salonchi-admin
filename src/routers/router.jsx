/* eslint-disable react-refresh/only-export-components */
import { ROUTER } from "@/constants/router";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { PrivateRouter } from "./private/private";

const Auth = lazy(async () => await import("@/pages/auth"));

const Register = lazy(async () => await import("@/pages/register"));

const Verify = lazy(async () => await import("@/pages/verify"));

const UpdatePassword = lazy(
  async () => await import("@/pages/update-password")
);

const ForgetPassword = lazy(
  async () => await import("@/pages/forget-password")
);

const VerifyCode = lazy(async () => await import("@/pages/verify-code"));

const NotFound = lazy(async () => await import("@/pages/404"));

const Statistics = lazy(async () => await import("@/pages/statistics"));

const CreateFlow = lazy(async () => await import("@/pages/create-flow"));

const Flow = lazy(async () => await import("@/pages/flow"));

const Payments = lazy(async () => await import("@/pages/payments"));

const Settings = lazy(async () => await import("@/pages/settings"));

export const router = createBrowserRouter([
  {
    path: ROUTER.LOGIN,
    element: <Auth />,
  },
  {
    path: ROUTER.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTER.VERIFY,
    element: <Verify />,
  },
  {
    path: ROUTER.FORGET_PASSWORD,
    element: <ForgetPassword />,
  },
  {
    path: ROUTER.UPDATE_PASSWORD,
    element: <UpdatePassword />,
  },
  {
    path: ROUTER.VERIFY_CODE,
    element: <VerifyCode />,
  },
  {
    path: ROUTER.ADMIN,
    element: <PrivateRouter />,
    children: [
      {
        path: ROUTER.STATISTICS,
        element: <Statistics />,
      },
      {
        path: ROUTER.CREATE_FLOW,
        element: <CreateFlow />,
      },
      {
        path: ROUTER.CREATE_FLOW,
        element: <CreateFlow />,
      },
      {
        path: ROUTER.CREATE_FLOW,
        element: <CreateFlow />,
      },
      {
        path: ROUTER.FLOW,
        element: <Flow />,
      },
      {
        path: ROUTER.PAYMENTS,
        element: <Payments />,
      },
      {
        path: ROUTER.SETTINGS,
        element: <Settings />,
      },
    ],
  },
  {
    path: ROUTER.NOT_FOUND,
    element: <NotFound />,
  },
]);
