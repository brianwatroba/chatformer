import React, { useEffect, useContext, Suspense } from "react";
import styled from "@emotion/styled";
import Phaser from "phaser";
import gameConfig from "../phaser/gameConfig";
import useMediaQuery from "@mui/material/useMediaQuery";

import GameContext from "../context/game/gameContext";
import {
    CurrentStream,
    Menu,
    BackButton,
    NeedDesktopWarning,
    FlexColumn,
    ScreenShell,
} from "./index";

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
        background-color: #333;
        padding-top: 12px;
        padding-bottom: 12px;
    `;

    const GameScreen = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
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
                    <Suspense fallback={<></>}>
                        {gameStarted ? (
                            <GameScreen id="phaser-game" />
                        ) : (
                            <GameScreen>
                                <Menu />
                            </GameScreen>
                        )}
                    </Suspense>
                </ScreenShell>
            )}
        </Container>
    );
};

export default Game;
