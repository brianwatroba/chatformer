import React, { useReducer } from "react";
import GameContext from "./gameContext";
import gameReducer from "./gameReducer";
import axios from "axios";
import { SET_PLAYER } from "../types";

const GameState = (props) => {
    const initialState = {
        playerName: "",
        playerAvatar: "",
        isLoggedIn: false,
        currentStream: "",
        gameStarted: false,
    };

    const [state, dispatch] = useReducer(gameReducer, initialState);

    const logInPlayer = async () => {
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
                    },
                });
            } catch (error) {
                console.log(error);
            }
        }
    };

    const setStream = () => {};

    return (
        <GameContext.Provider
            value={{
                playerName: state.playerName,
                playerAvatar: state.playerAvatar,
                isLoggedIn: state.isLoggedIn,
                gameStarted: state.gameStarted,
                logInPlayer,
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameState;
