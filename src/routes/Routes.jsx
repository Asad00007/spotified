import React from "react";
import {
  BrowserRouter as Router,
  Routes as Routing,
  Route,
} from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import OTP from "../pages/OTP/OTP";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageUser from "../pages/ManageUsers/ManageUser";
import ManageOrganizer from "../pages/ManageOrganizers/ManageOrganizer";
import OrganizerRequest from "../pages/OrganizerRequest/OrganizerRequest";
const Routes = () => {
  return (
    <Router>
      <Routing>
        <Route path="/" element={<SignIn />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-users" element={<ManageUser />} />
        <Route path="/manage-organizer" element={<ManageOrganizer />} />
        <Route path="/organizer-request" element={<OrganizerRequest />} />
      </Routing>
    </Router>
  );
};

export default Routes;
