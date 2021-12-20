import React, { useContext } from "react";
import styled from "@emotion/styled";

import GameContext from "../../context/game/gameContext";

const PlayerMenu = () => {
    const gameContext = useContext(GameContext);
    const { playerName, playerAvatar, isLoggedIn } = gameContext;

    const Container = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        // padding: 6px 6px;
        color: #333333;
        border-radius: 8px;
        // border: solid 1px #808080;
        font-family: Cabin;
        font-size: 18px;
    `;

    const StreamLogo = styled.img`
        content: url(${playerAvatar});
        height: 35px;
        margin-right: ${isLoggedIn ? "8px" : "0px"};
        border-radius: 100%;
    `;

    return (
        <Container>
            <StreamLogo />
            {playerName}
        </Container>
    );
};

export default PlayerMenu;
