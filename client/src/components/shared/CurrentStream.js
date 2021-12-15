import React from "react";
import styled from "styled-components";

import FlexRow from "./FlexRow";

const CurrentStream = () => {
    const Container = styled(FlexRow)`
        padding: 12px 0px;
        position: relative;
        width: 450px;
        height: auto;
        margin: 24px 0px;
        color: #fff;
        border-radius: 4px;
        border: solid 3px #808080;
        font-family: ubuntu;
        font-weight: 700;
        font-size: 20px;
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
        content: url("");
        height: 30px;
        margin-right: 8px;
        border-radius: 100%;
    `;

    return (
        <Container>
            {" "}
            <StreamLogo />
            <LiveStatus>
                <RedDot />
                LIVE
            </LiveStatus>
        </Container>
    );
};

export default CurrentStream;
