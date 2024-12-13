import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Login Thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", credentials);
      return response.data; // Return the data including token and OTP status
    } catch (err) {
      return rejectWithValue(err.response.data.message || "Login failed");
    }
  }
);

// OTP Verification Thunk
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/users/verify-otp", { email, otp });
      return response.data; // Return user role after OTP verification
    } catch (err) {
      return rejectWithValue(err.response.data.message || "OTP verification failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    role: null,
    isLoading: false,
    error: null,
    isOtpSent: false,
    isDefault: false,
    otp: null, // Add this to store OTP for default accounts
  },
  reducers: {
    logoutUser: (state) => {
      state.token = null;
      state.role = null;
      state.otp = null; // Clear OTP when logging out
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder
      // Login Reducers
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.isOtpSent = true;
        state.isDefault = action.payload.isDefault; // Add this line
        state.role = action.payload.role;
        state.otp = action.payload.otp || null; // Store the OTP if it's a default account
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // OTP Verification Reducers
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isOtpSent = false; // Reset OTP sent status
        // Optionally set any additional state from the verification response
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
