import tmi from "tmi.js";
import axios from "axios";

const connectToChat = async (streamerHandle) => {
    const client = new tmi.client();

    try {
        // const response = await axios.get("/.netlify/functions/isStreamerLive");
        // console.log(response);
        await client.connect();
        await client.join(streamerHandle);
        return client;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export default connectToChat;
