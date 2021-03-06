import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { FlexColumn, SectionTitle } from "../index";

const MenuLoading = ({ title }) => {
    const fadeInOut = keyframes`
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
`;
    const Container = styled(FlexColumn)`
        display: relative;
        height: 100%;
    `;

    const Title = styled(SectionTitle)`
        animation: ${fadeInOut} 1.2s ease-out infinite;
    `;

    const MenuOptions = styled(FlexColumn)`
        position: absolute;
        top: 245px;
    `;
    return (
        <Container>
            <MenuOptions>
                <Title>{title}</Title>
            </MenuOptions>
        </Container>
    );
};

export default MenuLoading;
