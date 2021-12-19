import React from "react";
import styled from "styled-components";

import FlexColumn from "../shared/FlexColumn";
import SectionTitle from "../shared/SectionTitle";

const MenuLoading = () => {
    const Container = styled(FlexColumn)`
        display: relative;
        height: 100%;
    `;

    const Title = styled(SectionTitle)``;

    const MenuOptions = styled(FlexColumn)`
        position: absolute;
        top: 225px;
    `;

    return (
        <Container>
            <MenuOptions>
                <Title>Authenticating...</Title>
            </MenuOptions>
        </Container>
    );
};

export default MenuLoading;
