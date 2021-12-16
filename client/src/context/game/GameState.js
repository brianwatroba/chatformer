import React, { useReducer } from "react";
import GameContext from "./gameContext";
import gameReducer from "./gameReducer";
import axios from "axios";

import { SET_PLAYER, SET_STREAM_TYPE, START_GAME } from "../types";
import assetMapping from "../../utils/assetMapping";
import isStreamerLive from "../../utils/isStreamerLive";
import getStreamerInfo from "../../utils/getStreamerInfo";

const GameState = (props) => {
    const { guest } = assetMapping;
    const initialState = {
        playerName: null,
        playerAvatar: guest,
        isLoggedIn: false,
        stream: null,
        streamAvatar: null,
        streamType: null,
        gameStarted: false,
    };

    const [state, dispatch] = useReducer(gameReducer, initialState);

    const logInTwitch = async () => {
        const urlParams = new URLSearchParams(document.location.search);
        const code = urlParams.get("code");
        window.history.replaceState({}, document.title, "/game");
        if (code) {
            try {
                const response = await axios.post(
                    `http://localhost:4000/api/twitch/auth`,
                    {
                        code: code,
                    }
                );
                const userData = response.data;
                dispatch({
                    type: SET_PLAYER,
                    payload: {
                        playerName: userData.display_name,
                        playerAvatar: userData.profile_image_url,
                        isLoggedIn: true,
                    },
                });
            } catch (error) {
                console.log(error);
            }
        }
    };

    const logInGuest = () => {
        // make new guest
        dispatch({
            type: SET_PLAYER,
            payload: {
                playerName: "Guest123",
                playerAvatar: guest,
                streamType: "other",
                isLoggedIn: true,
            },
        });
    };

    const startGame = async (streamName) => {
        try {
            const isLive = await isStreamerLive(streamName);

            if (isLive) {
                const streamerInfo = await getStreamerInfo(streamName);
                const avatar = streamerInfo.profile_image_url;
                console.log(avatar);
                const type =
                    streamName.toLowerCase() === state.playerName
                        ? "self"
                        : "other";
                dispatch({
                    type: START_GAME,
                    payload: {
                        stream: streamName,
                        streamAvatar: avatar,
                        streamType: type,
                        gameStarted: true,
                    },
                });
            }
        } catch (error) {
            return error;
        }
    };

    const setStreamType = async (type) => {
        dispatch({
            type: SET_STREAM_TYPE,
            payload: {
                streamType: type,
            },
        });
    };

    return (
        <GameContext.Provider
            value={{
                isLoggedIn: state.isLoggedIn,
                logInTwitch,
                logInGuest,
                playerName: state.playerName,
                playerAvatar: state.playerAvatar,
                streamType: state.streamType,
                setStreamType,
                stream: state.stream,
                streamAvatar: state.streamAvatar,
                startGame,
                gameStarted: state.gameStarted,
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameState;
