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
        setError(null);
    };

    const handleClick = async () => {
        setLoading(true);
        const error = await startGame(streamName);
        if (error) {
            setError(error.message);
        }
        setLoading(false);
    };

    return (
        <>
            <Title>join:</Title>
            <ErrorText>{error}</ErrorText>
            <Input
                autoFocus
                color="secondary"
                placeholder="streamer username"
                InputProps={inputProps}
                onChange={handleChange}
                value={streamName}
                error={error}
                disabled={loading}
            />

            <ButtonPrimary
                size="medium"
                style={{ fontSize: "18px" }}
                disabled={loading}
                onClick={handleClick}
                type="submit"
            >
                PLAY GAME
            </ButtonPrimary>
        </>
    );
};

const Title = styled(Typography)`
    font-family: ubuntu;
    color: #3f3f3f;
    margin-bottom: 8px;
    font-size: 20px;
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
    height: 20px;
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
