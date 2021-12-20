import React, { useContext } from "react";
import styled from "@emotion/styled";
import GameContext from "../../context/game/gameContext";

import FlexRow from "./FlexRow";

const CurrentStream = () => {
    const gameContext = useContext(GameContext);
    const { stream, streamAvatar } = gameContext;

    const Container = styled(FlexRow)`
        padding: 12px 0px;
        position: relative;
        width: 450px;
        height: auto;
        margin: 24px 0px;
        color: #fff;
        border-radius: 4px;
        border: solid 3px #808080;
        background-color: #3f3f3f;
        font-family: ubuntu;
        font-weight: 700;
        font-size: 20px;
        display: ${stream ? "" : "none"};
    `;

    const LiveStatus = styled(FlexRow)`
        position: absolute;
        right: 5%;
        color: #fff;
        font-family: ubuntu;
        font-size: 10px;
        font-weight: 700;
        align-items: center;
        justify-content: center;
    `;

    const RedDot = styled.div`
        height: 10px;
        width: 10px;
        border-radius: 100px;
        background-color: #ff596e;
        margin-right: 3px;
    `;

    const StreamLogo = styled.img`
        content: url(${streamAvatar});
        height: 30px;
        width: 30px;
        margin-right: 8px;
        border-radius: 100%;
        border: 2px solid #808080;
    `;
    return (
        <Container>
            <StreamLogo />
            <div id="streamer-name">{stream}</div>
            <LiveStatus>
                <RedDot />
                LIVE
            </LiveStatus>
        </Container>
    );
};

export default CurrentStream;
