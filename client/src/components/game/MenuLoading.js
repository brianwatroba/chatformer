import React, { useContext } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import GameContext from "../../context/game/gameContext";

const LogIn = () => {
    const gameContext = useContext(GameContext);
    const { playerName, playerAvatar, isLoggedIn } = gameContext;

    const Title = styled(Typography)`
        font-family: ubuntu;
        color: #fff;
        font-weight: 700;
        margin-bottom: 28px;
        font-size: 20px;
    `;

    return (
        <>
            <Title>LOADING</Title>
        </>
    );
};

export default LogIn;
