import React, { useEffect } from "react";
import styled from "styled-components";

import Phaser from "phaser";
import gameConfig from "../phaser/gameConfig";

import Navbar from "./shared/Navbar";

const Game = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        new Phaser.Game(gameConfig);
    }, []);

    // const { height, width } = gameConfig.scale;

    const Container = styled.div`
        display: flex;
        position: relative;
        justify-content: center;
        height: 100vh;
        width: 100%;
        background-color: #333;
    `;

    const GameScreen = styled.div`
        position: absolute;
        top: 50px;
        display: flex;
        justify-content: center;
        border: 12px solid #d8d8d8;
        border-radius: 12px;
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
