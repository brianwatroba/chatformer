import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import axios from "axios";

import Phaser from "phaser";
import gameConfig from "../phaser/gameConfig";

import assetMapping from "../utils/assetMapping";
import Clouds from "./shared/Clouds";
import TwitchLoginButton from "./shared/TwitchLoginButton";
import FlexColumn from "./shared/FlexColumn";

import FlexRow from "./shared/FlexRow";

const Game = () => {
    const [player, setPlayer] = useState({
        loggedIn: false,
        username: "",
        avatarUrl: "",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        logIn();
        new Phaser.Game(gameConfig);
    }, []);

    const logIn = async () => {
        const urlParams = new URLSearchParams(document.location.search);
        const code = urlParams.get("code");
        window.history.replaceState({}, document.title, "/game");
        if (code) console.log("code", code);
        if (code) {
            try {
                const response = await axios.post(
                    `http://localhost:4000/api/twitch/auth`,
                    {
                        code: code,
                    }
                );
                const userData = response.data;
                setPlayer({
                    loggedIn: true,
                    username: userData.display_name,
                    avatarUrl: userData.profile_image_url,
                });
            } catch (error) {
                console.log(error);
            }
        }
    };

    const { mainLogo } = assetMapping;

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        height: 100vh;
        width: 100%;
        background-color: #333;
    `;

    const GameScreen = styled.div`
        position: absolute;
        top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 12px solid #d8d8d8;
        border-radius: 12px;
        width: 800px;
        height: 600px;
        background-color: #72b9d8;
    `;

    const SubContainer = styled(FlexColumn)`
        display: relative;
    `;

    const Logo = styled.img`
        content: url(${mainLogo});
        width: 250px;
    `;

    const SubText = styled(Typography)`
        font-family: ubuntu;
        color: #fff;
        font-weight: 700;
    `;

    const StreamInfo = styled(FlexRow)`
        padding: 12px 0px;
        position: relative;
        width: 450px;
        height: auto;
        margin: 24px 0px;
        color: #fff;
        border-radius: 4px;
        border: solid 3px #808080;
        font-family: ubuntu;
        font-weight: 700;
        font-size: 20px;
    `;

    const LiveStatus = styled(FlexRow)`
        position: absolute;
        right: 5%;
        color: #fff;
        font-family: ubuntu;
        font-size: 10px;
        font-weight: 700;
        align-items: center;
        justify-content: center;
    `;

    const RedDot = styled.div`
        height: 10px;
        width: 10px;
        border-radius: 100px;
        background-color: #ff596e;
        margin-right: 3px;
    `;

    const StreamLogo = styled.img`
        content: url(${player.avatarUrl});
        height: 30px;
        padding-right: 8px;
    `;

    return (
        <>
            <Container>
                <StreamInfo>
                    {" "}
                    <StreamLogo />
                    {player.username}
                    <LiveStatus>
                        <RedDot />
                        LIVE
                    </LiveStatus>
                </StreamInfo>
                {/* <GameScreen id="phaser-game" /> */}
                <GameScreen>
                    <SubContainer>
                        <Clouds />
                        <Logo />
                        <SubText variant="h6">log in:</SubText>
                        <TwitchLoginButton>LOGIN WITH TWITCH</TwitchLoginButton>
                    </SubContainer>
                </GameScreen>
            </Container>
        </>
    );
};

export default Game;
