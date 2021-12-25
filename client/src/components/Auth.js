import React, { useEffect, useContext } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import GameContext from "../context/game/gameContext";
import CurrentStream from "./shared/CurrentStream";
import MenuLoading from "./game/MenuLoading";

const Auth = () => {
    const gameContext = useContext(GameContext);
    const { logInTwitch, isLoggedIn } = gameContext;
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        const urlParams = new URLSearchParams(document.location.search);
        const code = urlParams.get("code");
        window.history.replaceState({}, document.title, "/auth");
        if (code) {
            logInTwitch(code);
        } else {
            navigate("/game");
        }
        if (isLoggedIn) navigate("/game");
    }, [logInTwitch, isLoggedIn, navigate]);

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
        justify-content: center;
        border: 12px solid #d8d8d8;
        border-radius: 12px;
        width: 800px;
        height: 600px;
        background-color: #72b9d8;
    `;

    return (
        <Container>
            <CurrentStream />
            <GameScreen>
                <MenuLoading title="Authenticating" />
            </GameScreen>
        </Container>
    );
};

export default Auth;
