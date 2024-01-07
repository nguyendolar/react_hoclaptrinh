import axios from "axios";

const URL = "http://localhost:8080/api/order";

export const getByUser = async (email) => {
    try
    {
        const response = await axios.get(`${URL}/by-user/`+email);
        return response;
    } catch (error)
    {
        return error?.response;
    }
};




