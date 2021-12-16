import axios from "axios";

const isStreamerLive = async (streamerName) => {
    try {
        const response = await axios.get(
            `http://localhost:4000/api/twitch/streams?user=${streamerName}`
        );
        if (response) return true;
    } catch (error) {
        const err = new Error("streamer not live");
        throw err;
    }
};

export default isStreamerLive;
