import axios from "axios";

const URL = "http://localhost:8080";

export const postLogin = async (payload) => {
    try
    {
        const response = await axios.post(`${URL}/authenticate`, payload);
        return response;
    } catch (error)
    {
        return error?.response;
    }
};

export const register = async (payload) => {
    try
    {
        const response = await axios.post(`${URL}/sign-up`, payload);
        return response;
    } catch (error)
    {
        return error?.response;
    }
};

export const forgotPassword = async (payload) => {
    try
    {
        const response = await axios.post(`${URL}/api/forgot-password`, payload);
        return response;
    } catch (error)
    {
        return error?.response;
    }
};
