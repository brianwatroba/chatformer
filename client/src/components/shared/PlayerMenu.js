import React, { useContext } from "react";
import styled from "styled-components";

import GameContext from "../../context/game/gameContext";
import assetMapping from "../../utils/assetMapping";

const PlayerMenu = () => {
    const gameContext = useContext(GameContext);
    const { guest } = assetMapping;
    const { playerName, playerAvatar, isLoggedIn } = gameContext;
    console.log(playerAvatar);

    const Container = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 8px 16px;
        color: #333333;
        border-radius: 4px;
        border: solid 1px #333333;
        font-family: Cabin;
        font-size: 18px;
    `;

    const StreamLogo = styled.img`
        content: url(${isLoggedIn ? playerAvatar : guest});
        height: 30px;
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
