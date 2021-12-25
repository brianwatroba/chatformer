import React from "react";
import styled from "@emotion/styled";

import assetMapping from "../../utils/assetMapping";
import SectionTitle from "../shared/SectionTitle";
import SectionSubtitle from "../shared/SectionSubtitle";
import FlexColumn from "../shared/FlexColumn";

const { mascot } = assetMapping;

const NeedDesktopWarning = () => {
    return (
        <Container>
            <Mascot />
            <SectionTitle>On your phone?</SectionTitle>
            <SectionSubtitle color="#fafafa">
                Chat Jump requires a computer to play
            </SectionSubtitle>
        </Container>
    );
};

const Mascot = styled.img`
    content: url(${mascot});
    height: "125px";
`;

const Container = styled(FlexColumn)`
    margin: 48px 0px 0px 0px;
`;

export default NeedDesktopWarning;
