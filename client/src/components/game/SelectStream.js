import React, { useContext, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import GameContext from "../../context/game/gameContext";
import ButtonPrimary from "../shared/ButtonPrimary";
import ButtonSecondary from "../shared/ButtonSecondary";
import LiveStatus from "../shared/LiveStatus";
import isStreamerLive from "../../api/isStreamerLive";

const SelectStream = () => {
    const gameContext = useContext(GameContext);
    const { startGame, setStreamType, playerName } = gameContext;
    const [isLive, setIsLive] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const checkIfLive = async () => {
            try {
                const live = await isStreamerLive(playerName);
                if (live) {
                    setIsLive(true);
                }
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        checkIfLive();
    }, [playerName]);

    const joinDifferentStream = () => {
        setLoading(true);
        setStreamType("other");
    };

    const joinMyStream = async () => {
        setLoading(true);
        const error = await startGame(playerName);
        console.log("error", error);
        if (error) {
            setError(error.message);
        }
        setLoading(false);
    };

    return (
        <>
            <Title>join:</Title>
            <ErrorText>{error}</ErrorText>
            <ButtonPrimary
                disabled={loading}
                iconRight={<LiveStatus isLive={isLive} />}
                onClick={joinMyStream}
            >
                MY STREAM
            </ButtonPrimary>
            <ButtonSecondary
                variant="text"
                disabled={loading}
                onClick={joinDifferentStream}
            >
                OTHER STREAM
            </ButtonSecondary>
        </>
    );
};
const Title = styled(Typography)`
    font-family: ubuntu;
    color: #3f3f3f;
    margin-bottom: 8px;
    font-size: 20px;
`;

const ErrorText = styled(Typography)`
    font-family: cabin;
    color: red;
    font-weight: 500;
    margin-bottom: 8px;
    font-style: italic;
    height: 20px;
`;

export default SelectStream;
