import React from "react";
import styled from "@emotion/styled";
import keyframes from "@emotion/keyframes";

import FlexColumn from "./FlexColumn";
import SectionTitle from "./SectionTitle";

const LoadingGame = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        height: 100vh;
        width: 100%;
        background-color: #333;
    `;

    const FadeInOut = keyframes`
	    0% { opacity:1; }
        50% { opacity:0; }
        100% { opacity:1; }
    `;

    const LoadingText = styled(SectionTitle)`
        padding: 100px 0px 0px 0px;
        color: #fff;
        animation: ${FadeInOut} 1s ease-out infinite;
        padding: 15% 0% 0% 0%;
    `;

    return (
        <>
            <FlexColumn>
                <Container>
                    <LoadingText>Loading...</LoadingText>
                </Container>
            </FlexColumn>
        </>
    );
};

export default LoadingGame;
