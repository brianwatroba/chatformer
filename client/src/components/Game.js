import React, { useEffect } from "react";
import styled from "styled-components";

import Phaser from "phaser";
import gameConfig from "../phaser/gameConfig";

const Game = () => {
    useEffect(() => {
        new Phaser.Game(gameConfig);
    }, []);

    return (
        <Container>
            <GameScreen id="phaser-game" />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 12px 0px;
`;

const GameScreen = styled.div`
    display: flex;
    justify-content: center;
    border: 12px solid #d8d8d8;
    border-radius: 12px;
    width: auto;
`;

export default Game;
