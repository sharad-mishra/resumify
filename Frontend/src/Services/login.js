import axios from "axios";
import { VITE_APP_URL } from "@/config/config";

const axiosInstance = axios.create({
  baseURL: VITE_APP_URL + "api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const startUser = async () => {
  try {
    const response = await axiosInstance.get("users/");
    return response.data;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || error?.message || "Something Went Wrong"
    );
  }
};

const registerUser = async (data) => {
  try {
    const response = await axiosInstance.post("users/register/", data);
    return response.data;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || error?.message || "Something Went Wrong"
    );
  }
};

const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post("users/login/", data);
    return response.data;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || error?.message || "Something Went Wrong"
    );
  }
};

const logoutUser = async () => {
  try {
    const response = await axiosInstance.get("users/logout/");
    return response.data;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || error?.message || "Something Went Wrong"
    );
  }
};

export const signUpUser = async (userData) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_APP_URL}api/users/register`, userData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    return response;
  } catch (error) {
    console.error("Signup Error:", error?.response?.data || error.message);
    throw error;
  }
};

export { startUser, registerUser, loginUser, logoutUser };
