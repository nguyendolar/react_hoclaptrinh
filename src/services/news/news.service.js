import axios from "axios";

const URL = "http://localhost:8080/api";

export const getNews = async () => {
    try
    {
        const response = await axios.get(`${URL}/news`);
        return response;
    } catch (error)
    {
        return error?.response;
    }
};

export const getNewsDetail = async (id) => {
    try
    {
        const response = await axios.get(`${URL}/news/${id}`);
        return response;
    } catch (error)
    {
        return error?.response;
    }
};
