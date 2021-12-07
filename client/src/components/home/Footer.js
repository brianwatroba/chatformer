import React from "react";
import styled from "@emotion/styled";

import useMediaQuery from "@mui/material/useMediaQuery";

import assetMapping from "../../utils/assetMapping";
import FlexColumn from "../shared/FlexColumn";
import SectionTitle from "../shared/SectionTitle";
import PlayButton from "../shared/PlayButton";
import NavLinks from "../shared/NavLinks";

const Footer = () => {
    const { mascot } = assetMapping;
    const isMobile = useMediaQuery("(max-width:768px)");

    const Container = styled(FlexColumn)`
        background-color: #333333;
        padding: 48px 0px;
    `;

    const Mascot = styled.img`
        content: url(${mascot});
        height: ${isMobile ? "75px" : "125px"};
    `;

    const LinksContainer = styled.div`
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: 65%;
        border-top: 1px solid #fff;
        margin: 102px 0px 24px 0px;
        padding: 24px 96px;
    `;

    const Copyright = styled.div`
        color: #fff;
        font-size: 18px;
        text-align: center;
    `;

    return (
        <Container>
            <Mascot />
            <SectionTitle>TRY IT YOURSELF</SectionTitle>
            <PlayButton style={{ marginTop: "48px" }}>PLAY NOW</PlayButton>
            <LinksContainer>
                <NavLinks linkColor={"#ffffff"} />
            </LinksContainer>
            <Copyright>© Chat Jump 2021</Copyright>
        </Container>
    );
};

export default Footer;
