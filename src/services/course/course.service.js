import axios from "axios";

const URL = "http://localhost:8080/api";

export const getCourse = async () => {
    try
    {
        const response = await axios.get(`${URL}/courses`);
        return response;
    } catch (error)
    {
        return error?.response;
    }
};

