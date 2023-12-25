import axios from "axios";

const URL = "http://localhost:8080";

export const postLogin = async (payload) => {
    const response = await axios.post(`${URL}/authenticate`, payload);
    return response.data;
};

export const register = async (payload) => {
    try
    {
        const response = await axios.post(`${URL}/sign-up`, payload);
        return response.data;
    } catch (error)
    {
        return error?.response?.data
    }
};
