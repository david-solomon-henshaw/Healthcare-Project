import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, verifyOtp } from "../redux/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, isLoading, error, isOtpSent, role } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({ email: "", password: "", otp: "" });
  const [isOtpStep, setIsOtpStep] = useState(false);

  

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

// Handle login submission
const handleLogin = async (e) => {
  e.preventDefault();
  const response = await dispatch(loginUser({ email: formData.email, password: formData.password }));
  
  if (response.payload && response.payload.token) {
    setIsOtpStep(true);
    
    // Pre-fill OTP if it's a default account
    if (response.payload.isDefault) {
      setFormData(prevState => ({ 
        ...prevState, 
        otp: response.payload.otp 
      }));
    }
  }
};
  // Handle OTP verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    console.log(formData.email,formData.otp)
    const response = await dispatch(verifyOtp({ email: formData.email, otp: formData.otp }));

    if (response.meta.requestStatus === 'fulfilled') {
      navigate(`/dashboard/${role.toLowerCase()}`);    } else {
      console.log(response,error)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">{isOtpStep ? "Enter OTP" : "Login"}</h2>
        
        {/* Display error message if login or OTP verification fails */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={isOtpStep ? handleVerifyOtp : handleLogin}>
          {/* Email and Password Fields */}
          {!isOtpStep && (
            <>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </>
          )}

          {/* OTP Field */}
          {isOtpStep && (
            <div className="mb-4">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
            disabled={isLoading}
          >
            {isOtpStep ? "Verify OTP" : "Login"}
          </button>

          {isLoading && <p className="text-center mt-4 text-gray-500">Loading...</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
