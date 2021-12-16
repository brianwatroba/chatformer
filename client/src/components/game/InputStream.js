import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import { TextField } from "@mui/material";

import GameContext from "../../context/game/gameContext";
import ButtonPrimary from "../shared/ButtonPrimary";

const InputStream = () => {
    const gameContext = useContext(GameContext);
    const { startGame } = gameContext;

    const [streamName, setStreamName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setStreamName(e.target.value);
    };

    const handleClick = async () => {
        setLoading(true);
        const error = await startGame(streamName);
        if (error) {
            setError(error.message);
        }
        setLoading(false);
    };

    //TODO: get most watched current stream

    return (
        <>
            <Title>join stream:</Title>
            <SubText>enter stream to join:</SubText>
            <Input
                autoFocus
                color="secondary"
                placeholder="username"
                InputProps={inputProps}
                onChange={handleChange}
                value={streamName}
                error={error}
                disabled={loading}
            />
            <ErrorText>{error}</ErrorText>
            <ButtonPrimary disabled={loading} onClick={handleClick}>
                PLAY GAME
            </ButtonPrimary>
        </>
    );
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
    font-size: 18px;
    margin-bottom: 8px;
`;

const Input = styled(TextField)`
    background-color: #fff;
    border-radius: 4px;
    font-family: cabin;
    text-align: center;
    margin-bottom: 12px;
`;
const ErrorText = styled(Typography)`
    font-family: cabin;
    color: red;
    font-weight: 500;
    margin-bottom: 8px;
    font-style: italic;
`;

const inputProps = {
    style: {
        fontFamily: "cabin",
        color: "#333",
        textAlign: "center",
        fontSize: "24px",
    },
    inputProps: {
        style: {
            textAlign: "center",
            width: "400px",
        },
    },
};

export default InputStream;
