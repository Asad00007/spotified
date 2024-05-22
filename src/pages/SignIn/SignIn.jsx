import React from "react";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseAxios } from "../../utils/apiConfig";
import { useAuth } from "../../auth/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();
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
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <div className="flex flex-col md-1200:flex-row">
      <div className="flex items-center justify-center bg-primary md-1200:w-[48%]  md-1200:h-screen h-28 w-full">
        <img src={Logo} alt="" className="h-24" />
      </div>
      <div className="flex items-center justify-center mt-16 md-1200:mt-0 md-1200:h-screen w-full md-1200:w-[52%]">
        <form
          className="flex flex-col justify-center min-w-[390px] md-1200:min-w-[600px]"
          action=""
          onSubmit={handleLogin}
        >
          <label className=" font-semibold text-xl " htmlFor="">
            Email
          </label>
          <input
            className=" w-full bg-[#F3F3F3] rounded-[15px] text-secondary p-5 "
            type="email"
            placeholder="admin123@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="mt-8 font-semibold text-xl" htmlFor="">
            Phone Number
          </label>
          <div className="w-full flex gap-3 bg-[#F3F3F3] p-5 rounded-[15px] min-h-16 max-h-16">
            <input
              type="text"
              placeholder="+971"
              className="w-[50px] border-r border-secondary bg-[#F3F3F3] outline-none"
              maxLength={4}
            />
            <input
              type="text"
              placeholder="123456789"
              className="flex-1 outline-none bg-[#F3F3F3]"
            />
          </div>
          <label className="mt-8 font-semibold text-xl" htmlFor="">
            Password
          </label>
          <input
            className=" w-full bg-[#F3F3F3] rounded-[15px] text-secondary p-5 min-h-16 max-h-16"
            type="password"
            placeholder="***********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className=" mt-8 flex justify-between items-center">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="bg-primary accent-primary w-6"
                name=""
                id=""
              />
              <span className="font-normal text-secondary text-[18px]">
                Keep me logged in
              </span>
            </div>

            <a className=" text-primary text-[18px] font-normal" href="">
              Forget Password?
            </a>
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
    </div>
  );
};

export default SignIn;
