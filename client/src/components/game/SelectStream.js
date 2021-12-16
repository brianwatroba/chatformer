import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import GameContext from "../../context/game/gameContext";
import ButtonPrimary from "../shared/ButtonPrimary";
import ButtonSecondary from "../shared/ButtonSecondary";

const SelectStream = () => {
    const gameContext = useContext(GameContext);
    const { startGame, setStreamType, playerName } = gameContext;
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const joinDifferentStream = () => {
        setLoading(true);
        setStreamType("other");
    };

    const joinMyStream = async () => {
        setLoading(true);
        const error = await startGame(playerName);
        if (error) {
            setError(error.message);
        }
        setLoading(false);
    };

    const Title = styled(Typography)`
        font-family: ubuntu;
        color: #fff;
        font-weight: 700;
        margin-bottom: 28px;
        font-size: 20px;
    `;

    const SubText = styled(Typography)`
        font-family: cabin;
        color: #505050;
        font-weight: 500;
        margin-bottom: 8px;
        font-style: italic;
    `;

    const ErrorText = styled(Typography)`
        font-family: cabin;
        color: red;
        font-weight: 500;
        margin-bottom: 8px;
        font-style: italic;
    `;

    return (
        <>
            <Title>join stream:</Title>
            <ErrorText>{error}</ErrorText>
            <ButtonPrimary disabled={loading} onClick={joinMyStream}>
                MY STREAM
            </ButtonPrimary>
            <SubText>or</SubText>
            <ButtonSecondary disabled={loading} onClick={joinDifferentStream}>
                DIFFERENT STREAM
            </ButtonSecondary>
        </>
    );
};

export default SelectStream;
