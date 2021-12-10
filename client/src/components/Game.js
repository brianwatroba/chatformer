import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Phaser from "phaser";
import gameConfig from "../phaser/gameConfig";

import assetMapping from "../utils/assetMapping";
import FlexRow from "./shared/FlexRow";

const Game = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        new Phaser.Game(gameConfig);
    }, []);

    const { day9Logo } = assetMapping;
    const [stream, setStream] = useState({ username: "", logo: "" });

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
        justify-content: center;
        border: 12px solid #d8d8d8;
        border-radius: 12px;
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
        content: url(${day9Logo});
        height: 30px;
        padding-right: 8px;
    `;

    return (
        <>
            <Container>
                <StreamInfo>
                    {" "}
                    <StreamLogo />
                    day9tv
                    <LiveStatus>
                        <RedDot />
                        LIVE
                    </LiveStatus>
                </StreamInfo>

                <GameScreen id="phaser-game" />
            </Container>
        </>
    );
};

export default Game;
