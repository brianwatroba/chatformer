import tmi from "tmi.js";

const connectToChat = async (streamerHandle) => {
    const client = new tmi.client();

    try {
        await client.connect();
        await client.join(streamerHandle);
        return client;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export default connectToChat;
