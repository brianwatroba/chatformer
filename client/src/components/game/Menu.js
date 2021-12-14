import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import axios from "axios";

import Phaser from "phaser";
import gameConfig from "../../phaser/gameConfig";
import GameContext from "../../context/game/gameContext";

import assetMapping from "../../utils/assetMapping";
import Clouds from "../shared/Clouds";
import TwitchLoginButton from "../shared/TwitchLoginButton";
import FlexColumn from "../shared/FlexColumn";
import FlexRow from "../shared/FlexRow";

const Menu = ({ title }) => {
    const gameContext = useContext(GameContext);
    const { MenuPlayer, playerName, playerAvatar, isLoggedIn } = gameContext;

    const { mainLogo, ground } = assetMapping;

    const Container = styled(FlexColumn)`
        display: relative;
        height: 100%;
    `;

    const Logo = styled.img`
        content: url(${mainLogo});
        width: 250px;
    `;

    const Title = styled(Typography)`
        font-family: ubuntu;
        color: #fff;
        font-weight: 700;
    `;

    const StreamLogo = styled.img`
        content: url(${playerAvatar});
        height: 30px;
        margin-right: 8px;
        border-radius: 100%;
    `;

    const Ground = styled.div`
        background-image: url(${ground});
        background-repeat: repeat-x;
        background-size: contain;
        width: 100%;
        height: 65px;
        position: absolute;
        bottom: 0;
    `;

    return (
        <Container>
            <Clouds />
            <Logo />
            <TwitchLoginButton />
            <Ground />
        </Container>
    );
};

export default Menu;
