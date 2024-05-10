import React from "react";
import {
  BrowserRouter as Router,
  Routes as Routing,
  Route,
} from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import OTP from "../pages/OTP/OTP";
import Dashboard from "../pages/Dashboard/Dashboard";
const Routes = () => {
  return (
    <Router>
      <Routing>
        <Route path="/" element={<SignIn />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routing>
    </Router>
  );
};

export default Routes;
