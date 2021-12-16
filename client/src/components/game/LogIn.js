import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import GameContext from "../../context/game/gameContext";

import assetMapping from "../../utils/assetMapping";
import ButtonPrimary from "../shared/ButtonPrimary";
import ButtonSecondary from "../shared/ButtonSecondary";

const LogIn = () => {
    const gameContext = useContext(GameContext);
    const { logInGuest } = gameContext;
    const { twitchLogo } = assetMapping;

    const sendToTwitchAuth = () => {
        const twitchLoginUrl =
            "https://id.twitch.tv/oauth2/authorize?client_id=qqyhhc7u3eda4x5rayg3n4e93m3r3g&redirect_uri=http://localhost:3000/game&response_type=code&scope=&force_verify=true";

        window.location.href = twitchLoginUrl;
    };

    const Title = styled(Typography)`
        font-family: ubuntu;
        color: #fff;
        font-weight: 700;
        margin-bottom: 28px;
        font-size: 20px;
    `;

    const SubText = styled(Typography)`
        font-family: cabin;
        color: #505050;
        font-weight: 500;
        margin-bottom: 8px;
        font-style: italic;
    `;

    return (
        <>
            <Title>log in:</Title>
            <ButtonPrimary onClick={sendToTwitchAuth} icon={twitchLogo}>
                LOG IN WITH TWITCH
            </ButtonPrimary>
            <SubText>or</SubText>
            <ButtonSecondary onClick={logInGuest}>
                PLAY AS GUEST
            </ButtonSecondary>
        </>
    );
};

export default LogIn;
