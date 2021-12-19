import axios from "axios";

const isStreamerLive = async (streamerName) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
        const response = await axios.get(
            `${apiUrl}/twitch/streams?user=${streamerName}`
        );
        if (response) return true;
    } catch (error) {
        const err = new Error("streamer not live");
        throw err;
    }
};

export default isStreamerLive;
