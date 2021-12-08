import React from "react";
import styled from "@emotion/styled";

import assetMapping from "../../utils/assetMapping";

const DirtBackground = ({ children }) => {
    const { ground, dirt } = assetMapping;

    const Ground = styled.div`
        background-image: url(${ground});
        background-repeat: repeat-x;
        background-size: contain;
        width: 100%;
        height: 96px;
    `;

    const DirtBackgroundDiv = styled.div`
        background-image: url(${dirt});
        background-repeat: repeat;
        background-size: 96px;
        // background-color: #b96e54;
        // width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

    return (
        <>
            <Ground />
            <DirtBackgroundDiv>{children}</DirtBackgroundDiv>
        </>
    );
};

export default DirtBackground;
