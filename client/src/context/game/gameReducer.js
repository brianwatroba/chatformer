import { SET_PLAYER } from "../types";

const gameReducer = (state, action) => {
    switch (action.type) {
        case SET_PLAYER:
            return {
                ...state,
                playerName: action.payload.playerName,
                playerAvatar: action.payload.playerAvatar,
                isLoggedIn: true,
            };

        default:
            return state;
    }
};

export default gameReducer;
