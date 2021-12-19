import React, { useReducer } from "react";
import GameContext from "./gameContext";
import gameReducer from "./gameReducer";
import axios from "axios";

import { SET_PLAYER, SET_STREAM_TYPE, START_GAME, END_GAME } from "../types";
import assetMapping from "../../utils/assetMapping";
import isStreamerLive from "../../utils/isStreamerLive";
import getStreamerInfo from "../../utils/getStreamerInfo";

const GameState = (props) => {
    const { guest } = assetMapping;
    const apiUrl = process.env.REACT_APP_API_URL;
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

    const logInTwitch = async (code) => {
        try {
            // move this into utils with it's own function calling api
            const response = await axios.post(`${apiUrl}/twitch/auth`, {
                code: code,
                clientUrl: process.env.REACT_APP_CLIENT_URL,
            });
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
    };

    const logInGuest = () => {
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

    const logOut = async () => {
        dispatch({
            type: SET_PLAYER,
            payload: {
                playerName: null,
                playerAvatar: guest,
                streamType: null,
                isLoggedIn: false,
            },
        });
    };

    const endGame = () => {
        dispatch({
            type: END_GAME,
        });
    };

    const setStreamType = (type) => {
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
                logOut,
                playerName: state.playerName,
                playerAvatar: state.playerAvatar,
                streamType: state.streamType,
                setStreamType,
                stream: state.stream,
                streamAvatar: state.streamAvatar,
                startGame,
                endGame,
                gameStarted: state.gameStarted,
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameState;
