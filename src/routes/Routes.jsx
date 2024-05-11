import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import OTP from "../pages/OTP/OTP";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
const Routes = () => {
  const Layout = () => {
    return (
      <>
        <Sidebar />
        <Navbar />
        <Outlet />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/otp",
      element: <OTP />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        { path: "/profile", element: <Settings /> },
      ],
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return (
    // <Router>
    //   <Routing>
    //     <Route path="/" element={<SignIn />} />
    //     <Route path="/otp" element={<OTP />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/profile" element={<Profile />} />
    //   </Routing>
    // </Router>
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
