import React from "react";
import styled from "@emotion/styled";

import FlexRow from "./FlexRow";

const LiveStatus = ({ isLive }) => {
    const Container = styled(FlexRow)`
        font-size: 8px;
        color: "#fff";
        font-weight: 700;
        font-family: cabin;
        margin-left: 12px;
    `;

    const RedDot = styled.div`
        height: 8px;
        width: 8px;
        border-radius: 100%;
        background-color: ${isLive ? "#ff596e" : "#949494"};
        border: 1px solid #fff;
        margin-right: 3px;
    `;

    return (
        <Container>
            <RedDot />
            {isLive ? "LIVE" : "NOT LIVE"}
        </Container>
    );
};

export default LiveStatus;
