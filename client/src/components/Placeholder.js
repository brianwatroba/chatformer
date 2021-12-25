import React, { useEffect } from "react";
import styled from "@emotion/styled";

import { Clouds, FlexColumn, SectionTitle, SectionSubtitle } from "./index";

const Placeholder = ({ title, subtitle }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const Container = styled(FlexColumn)`
        justify-content: center;
        height: 100vh;
    `;

    return (
        <>
            <FlexColumn>
                <Clouds lowestAltitude={20} count={10} />
                <Container>
                    <SectionTitle>{title}</SectionTitle>
                    <SectionSubtitle>{subtitle}</SectionSubtitle>
                </Container>
            </FlexColumn>
        </>
    );
};

export default Placeholder;
