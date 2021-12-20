import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const getStreamerInfo = async (streamerName) => {
    try {
        const response = await axios.get(
            `${apiUrl}/twitch/users?user=${streamerName}`
        );
        return response.data;
    } catch (error) {
        const err = new Error("streamer not live");
        console.log(err);
        throw err;
    }
};

export default getStreamerInfo;
