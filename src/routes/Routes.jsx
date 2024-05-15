import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import OTP from "../pages/OTP/OTP";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageUser from "../pages/ManageUsers/ManageUser";
import ManageOrganizer from "../pages/ManageOrganizers/ManageOrganizer";
import OrganizerRequest from "../pages/OrganizerRequest/OrganizerRequest";
import Settings from "../pages/Settings/Settings";
import Profile from "../pages/Profile/Profile";
import Messages from "../pages/Messages/Messages";
import Communities from "../pages/Communities/Communities";
import ProtectedRouteWrapper from "../auth/ProtectedRouteWrapper";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/dashboard" element={<ProtectedRouteWrapper><Dashboard /></ProtectedRouteWrapper>} />
        <Route path="/manage-users" element={<ProtectedRouteWrapper><ManageUser /></ProtectedRouteWrapper>} />
        <Route path="/manage-organizer" element={<ProtectedRouteWrapper><ManageOrganizer /></ProtectedRouteWrapper>} />
        <Route path="/organizer-request" element={<ProtectedRouteWrapper><OrganizerRequest /></ProtectedRouteWrapper>} />
        <Route path="/manage-communities" element={<ProtectedRouteWrapper><Communities /></ProtectedRouteWrapper>} />
        <Route path="/messages" element={<ProtectedRouteWrapper><Messages /></ProtectedRouteWrapper>} />
        <Route path="/settings" element={<ProtectedRouteWrapper><Settings /></ProtectedRouteWrapper>} />
        <Route path="/profile" element={<ProtectedRouteWrapper><Profile /></ProtectedRouteWrapper>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
