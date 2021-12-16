import { SET_PLAYER, SET_STREAM_TYPE, START_GAME, END_GAME } from "../types";

const gameReducer = (state, action) => {
    switch (action.type) {
        case SET_PLAYER:
            return {
                ...state,
                playerName: action.payload.playerName,
                playerAvatar: action.payload.playerAvatar,
                streamType: action.payload.streamType
                    ? action.payload.streamType
                    : null,
                isLoggedIn: action.payload.isLoggedIn,
            };
        case SET_STREAM_TYPE:
            return {
                ...state,
                streamType: action.payload.streamType,
            };
        case START_GAME:
            return {
                ...state,
                stream: action.payload.stream,
                streamAvatar: action.payload.streamAvatar,
                streamType: action.payload.streamType,
                gameStarted: action.payload.gameStarted,
            };
        case END_GAME:
            return {
                ...state,
                stream: null,
                streamAvatar: null,
                streamType: null,
                gameStarted: false,
            };
        default:
            return state;
    }
};

export default gameReducer;
