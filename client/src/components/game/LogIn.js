import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import GameContext from "../../context/game/gameContext";
import assetMapping from "../../utils/assetMapping";
import ButtonPrimary from "../shared/ButtonPrimary";
import ButtonSecondary from "../shared/ButtonSecondary";

const LogIn = () => {
    const gameContext = useContext(GameContext);
    const { logInGuest } = gameContext;
    const { twitchLogo } = assetMapping;

    const [loading, setLoading] = useState(false);

    const sendToTwitchAuth = () => {
        setLoading(true);
        const clientBaseUrl = window.location.origin;
        const twitchLoginUrl = `https://id.twitch.tv/oauth2/authorize?client_id=qqyhhc7u3eda4x5rayg3n4e93m3r3g&redirect_uri=${clientBaseUrl}/auth&response_type=code&scope=&force_verify=true"`;
        window.location.href = twitchLoginUrl;
    };

    const playAsGuest = () => {
        setLoading(true);
        logInGuest();
    };

    return (
        <>
            <Title>player login:</Title>
            <ErrorText></ErrorText>
            <TwitchLoginButton
                disabled={loading}
                color="twitch"
                onClick={sendToTwitchAuth}
                iconLeft={twitchLogo}
            >
                LOG IN WITH TWITCH
            </TwitchLoginButton>
            <ButtonSecondary
                disabled={loading}
                variant="text"
                onClick={playAsGuest}
            >
                PLAY AS GUEST
            </ButtonSecondary>
        </>
    );
};

const Title = styled(Typography)`
    font-family: ubuntu;
    color: #3f3f3f;
    margin-bottom: 8px;
    font-size: 20px;
`;

const ErrorText = styled(Typography)`
    font-family: cabin;
    color: red;
    font-weight: 500;
    margin-bottom: 8px;
    font-style: italic;
    height: 20px;
`;

const TwitchLoginButton = styled(ButtonPrimary)`
    margin-bottom: 12px;
`;

export default LogIn;
