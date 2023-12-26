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

export const getCourseByType = async (id) => {
    try
    {
        const response = await axios.get(`${URL}/courses/category/${id}`);
        return response;
    } catch (error)
    {
        return error?.response;
    }
};

export const getCourseByIsFree = async (isFree) => {
    try
    {
        const response = await axios.get(`${URL}/courses/type/${isFree}`);
        return response;
    } catch (error)
    {
        return error?.response;
    }
};

export const getCourseDetail = async (id) => {
    try
    {
        const response = await axios.get(`${URL}/courses/${id}`);
        return response;
    } catch (error)
    {
        return error?.response;
    }
};


