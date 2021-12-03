import React, { useEffect } from "react";
import styled from "styled-components";

import Phaser from "phaser";
import gameConfig from "../phaser/gameConfig";

import Navbar from "./shared/Navbar";

const Game = () => {
    useEffect(() => {
        new Phaser.Game(gameConfig);
    }, []);

    const { height, width } = gameConfig.scale;

    const Container = styled.div`
        display: flex;
        justify-content: center;
        // align-items: center;
        width: 100%;

        padding: 120px 0px;
        background-color: #333;
    `;

    const GameScreen = styled.div`
        display: flex;
        justify-content: center;
        border: 12px solid #d8d8d8;
        border-radius: 12px;
        width: ${width};
        height: ${height};
    `;

    return (
        <>
            <Navbar />
            <Container>
                <GameScreen id="phaser-game" />
            </Container>
        </>
    );
};

export default Game;
