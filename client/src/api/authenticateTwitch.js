import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const authenticateTwitch = async (code) => {
    const response = await axios.post(`${apiUrl}/twitch/auth`, {
        code: code,
        clientUrl: process.env.REACT_APP_CLIENT_URL,
    });

    return response.data;
};

export default authenticateTwitch;
