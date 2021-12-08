import React, { useEffect } from "react";
import styled from "@emotion/styled";

import Navbar from "./shared/Navbar";
import Clouds from "./shared/Clouds";
import FlexColumn from "./shared/FlexColumn";
import SectionTitle from "./shared/SectionTitle";
import SectionSubtitle from "./shared/SectionSubtitle";

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 100vh;
    `;

    return (
        <>
            <Navbar />
            <FlexColumn>
                <Clouds />
                <Container>
                    <SectionTitle>404: not found</SectionTitle>
                    <SectionSubtitle>
                        jump higher to find what you're looking for
                    </SectionSubtitle>
                </Container>
            </FlexColumn>
        </>
    );
};

export default NotFound;
