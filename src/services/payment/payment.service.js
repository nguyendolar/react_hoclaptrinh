import axios from "axios";

const URL = "http://localhost:8080/api/payment-online";

export const createPayment = async (payload) => {
    try
    {
        const response = await axios.post(`${URL}/create-payment`, payload);
        return response;
    } catch (error)
    {
        return error?.response;
    }
};


