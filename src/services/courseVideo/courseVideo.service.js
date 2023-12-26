import axios from "axios";

const URL = "http://localhost:8080/api";

export const get = async () => {
    try
    {
        const response = await axios.get(`${URL}/courseVideos`);
        return response;
    } catch (error)
    {
        return error?.response;
    }
};

export const getDetail = async (id) => {
    try
    {
        const response = await axios.get(`${URL}/courseVideos/${id}`);
        return response;
    } catch (error)
    {
        return error?.response;
    }
};

