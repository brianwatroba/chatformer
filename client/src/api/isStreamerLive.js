import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const isStreamerLive = async (streamerName) => {
    try {
        console.log("getting here");
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
