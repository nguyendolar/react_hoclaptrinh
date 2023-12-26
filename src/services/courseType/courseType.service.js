import axios from "axios";

const URL = "http://localhost:8080/api";

export const getCourseType = async () => {
    try
    {
        const response = await axios.get(`${URL}/courseTypes`);
        return response;
    } catch (error)
    {
        return error?.response;
    }
};
