import axios from "axios";

const URL = "http://localhost:8080/api-auth";

export const getUserByEmail = async (email,token) => {
    try
    {
        const response = await axios.get(`${URL}/users/${email}`,{
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
