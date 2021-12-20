import React, { useEffect, useContext, Suspense } from "react";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";

import Phaser from "phaser";
import gameConfig from "../phaser/gameConfig";
import GameContext from "../context/game/gameContext";
import CurrentStream from "./shared/CurrentStream";
import Menu from "./game/Menu";
import BackButton from "./shared/BackButton";
import SectionTitle from "./shared/SectionTitle";

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

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        height: 100vh;
        width: 100%;
        background-color: #333;
    `;

    const ScreenShell = styled.div`
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
                <SectionTitle>
                    Must be on desktop to play Chat Jump. Sorry!
                </SectionTitle>
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
