import axios from "axios";

const URL = "http://localhost:8080/api-auth";

export const getUserByEmail = async (email, token) => {
    try
    {
        const response = await axios.get(`${URL}/users/${email}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                // Add any other headers if needed
            },
        });
        return response;
    } catch (error)
    {
        return error?.response;
    }
};


export const updateProfile = async (id, token, body) => {
    try
    {
        const response = await axios.put(`${URL}/users/${id}`, body, {
            headers: {
                'Authorization': `Bearer ${token}`,
                // Add any other headers if needed
            },
        });
        return response;
    } catch (error)
    {
        return error?.response;
    }
};

export const updatePassword = async (id, token, body) => {
    console.log("Dsds", token, body)
    try
    {
        const response = await axios.put(`${URL}/users/change-password/${id}`, body, {
            headers: {
                'Authorization': `Bearer ${token}`,
                // Add any other headers if needed
            },
        });
        return response;
    } catch (error)
    {
        return error?.response;
    }
};

