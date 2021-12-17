import React, { useContext } from "react";
import styled from "styled-components";

import { Fab } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import GameContext from "../../context/game/gameContext";

const BackButton = ({ onClick, style, children, top, left }) => {
    const gameContext = useContext(GameContext);
    const { isLoggedIn, streamType, playerName } = gameContext;

    const Elem = styled(Fab)`
        position: absolute;
        top: ${top || "12px"};
        left: ${left || "12px"};
    `;

    return (
        <Elem size="small" onClick={onClick} style={style}>
            <ArrowBackIosNewIcon />
        </Elem>
    );
};

export default BackButton;
