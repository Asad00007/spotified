import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { baseAxios } from "../../utils/apiConfig";
import { useAuth } from "../../auth/AuthContext";
import Snackbar from '@mui/material/Snackbar';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await baseAxios.post("/admin_side/login/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      sessionStorage.setItem("access_token", response.data.data.access_token);
      if (response.status === 200) {
        login();
        navigate("/dashboard");
      } else {
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setSnackbarOpen(true);
    }
  };

  return (
    <div className="flex flex-col md-1200:flex-row">
      <div className="flex items-center justify-center bg-primary md-1200:w-[48%] md-1200:h-screen h-28 w-full">
        <img src={Logo} alt="Logo" className="h-24" />
      </div>
      <div className="flex items-center justify-center mt-16 md-1200:mt-0 md-1200:h-screen w-full md-1200:w-[52%]">
        <form
          className="flex flex-col justify-center min-w-[390px] md-1200:min-w-[600px]"
          onSubmit={handleLogin}
        >
          <label className="font-semibold text-xl" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="w-full bg-[#F3F3F3] rounded-[15px] text-secondary p-5"
            type="email"
            placeholder="admin123@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="mt-8 font-semibold text-xl" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="w-full bg-[#F3F3F3] rounded-[15px] text-secondary p-5 min-h-16 max-h-16"
            type="password"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="mt-8 flex justify-between items-center">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-primary accent-primary w-6"
                id="keep-logged-in"
              />
              <span className="font-normal text-secondary text-[18px]">
                Keep me logged in
              </span>
            </div>
            <Link to="/forgot-password" className="text-primary text-[18px] font-normal">
              Forget Password?
            </Link>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <button
              type="submit"
              className="w-[390px] p-4 text-xl font-semibold text-white bg-primary rounded-[50px]"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message="Login Failed! Check credentials and try again"
        key={'top' + 'right'}
      />
    </div>
  );
};

export default SignIn;
