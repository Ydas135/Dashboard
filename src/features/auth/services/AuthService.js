import axios from "axios";

const API_URL = "https://fakestoreapi.com/users"

export const LoginServices = async ({username, password}) => {
    const response = await axios.post(API_URL, {
        params: {
            username,
            password,
        }
    })

    return response.data.token;
}