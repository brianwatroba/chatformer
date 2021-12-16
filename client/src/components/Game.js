import React, { useEffect, useContext } from "react";
import styled from "styled-components";

import Phaser from "phaser";
import gameConfig from "../phaser/gameConfig";
import GameContext from "../context/game/gameContext";
import CurrentStream from "./shared/CurrentStream";
import Menu from "./game/Menu";

const Game = () => {
    const gameContext = useContext(GameContext);
    const { logInTwitch, gameStarted, isLoggedIn } = gameContext;

    useEffect(() => {
        window.scrollTo(0, 0);
        logInTwitch();
        if (gameStarted) new Phaser.Game(gameConfig);
    }, [logInTwitch, gameStarted, isLoggedIn]);

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

    return (
        <Container>
            <CurrentStream />
            <GameScreen id="phaser-game">{!gameStarted && <Menu />}</GameScreen>
        </Container>
    );
};

export default Game;
