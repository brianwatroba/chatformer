import axios from "axios";

const getStreamerInfo = async (streamerName) => {
    try {
        const response = await axios.get(
            `http://localhost:4000/api/twitch/users?user=${streamerName}`
        );
        return response.data;
    } catch (error) {
        const err = new Error("streamer not live");
        console.log(err);
        throw err;
    }
};

export default getStreamerInfo;
