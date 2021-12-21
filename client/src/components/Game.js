import React, { useEffect, useContext } from "react";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";

import Phaser from "phaser";
import gameConfig from "../phaser/gameConfig";
import GameContext from "../context/game/gameContext";
import CurrentStream from "./shared/CurrentStream";
import Menu from "./game/Menu";
import BackButton from "./shared/BackButton";
import NeedDesktopWarning from "./game/NeedDesktopWarning";
import FlexColumn from "./shared/FlexColumn";
import ScreenShell from "./shared/ScreenShell";

const Game = () => {
    const gameContext = useContext(GameContext);
    const isMobile = useMediaQuery("(max-width:768px)");
    const { logInTwitch, gameStarted, isLoggedIn, endGame } = gameContext;

    useEffect(() => {
        window.scrollTo(0, 0);
        if (gameStarted) new Phaser.Game(gameConfig);
    }, [logInTwitch, gameStarted, isLoggedIn, endGame]);

    const handleBack = () => {
        endGame();
    };

    const Container = styled(FlexColumn)`
        height: 100vh;
        background-color: #333;
    `;

    const GameScreen = styled(FlexColumn)`
        height: 100%;
    `;

    return (
        <Container>
            {gameStarted && (
                <BackButton onClick={handleBack} left={"585px"} top={"32px"} />
            )}
            <CurrentStream />
            {isMobile ? (
                <NeedDesktopWarning />
            ) : (
                <ScreenShell>
                    {gameStarted ? (
                        <GameScreen id="phaser-game" />
                    ) : (
                        <GameScreen>
                            <Menu />
                        </GameScreen>
                    )}
                </ScreenShell>
            )}
        </Container>
    );
};

export default Game;
