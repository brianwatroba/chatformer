import React from "react";
import styled from "@emotion/styled";

import Clouds from "./shared/Clouds";
import FlexColumn from "./shared/FlexColumn";
import SectionTitle from "./shared/SectionTitle";
// import SectionSubtitle from "./shared/SectionSubtitle";

const NotFound = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: center;
        position: relative;
        height: 100vh;
    `;

    const LoadingText = styled(SectionTitle)`
        padding: 100px 0px 0px 0px;
    `;

    return (
        <>
            <FlexColumn>
                <Clouds />
                <Container>
                    <LoadingText>Loading...</LoadingText>
                </Container>
            </FlexColumn>
        </>
    );
};

export default NotFound;
