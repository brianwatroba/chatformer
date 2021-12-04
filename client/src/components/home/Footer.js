import React from "react";
import styled from "@emotion/styled";

import useMediaQuery from "@mui/material/useMediaQuery";

import assetMapping from "../../utils/assetMapping";
import FlexColumn from "../shared/FlexColumn";
import SectionTitle from "../shared/SectionTitle";
import PlayButton from "../shared/PlayButton";
import Links from "../shared/NavLinks";
// import { links } from "../../utils/linkMapping";

const Footer = () => {
    const { mascot } = assetMapping;
    const isMobile = useMediaQuery("(max-width:768px)");

    const Container = styled(FlexColumn)`
        background-color: #333333;
    `;

    const Mascot = styled.img`
        content: url(${mascot});
        height: ${isMobile ? "75px" : "125px"};
        padding: 24px;
    `;

    const LinksContainer = styled.div`
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: 65%;
        border-top: 1px solid #fff;
        margin: 96px 0px 24px 0px;
        padding: 24px 96px;
    `;

    // const Link = styled.div`
    //     color: #ffffff;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     padding: 0px 18px;
    //     font-size: 20px;

    //     &:hover {
    //         font-weight: 700;
    //         cursor: pointer;
    //     }
    // `;

    const Copyright = styled.div`
        color: #fff;
        font-size: 18px;
        text-align: center;
    `;

    return (
        <Container>
            <Mascot />
            <SectionTitle>TRY IT YOURSELF</SectionTitle>
            <PlayButton>PLAY NOW</PlayButton>
            <LinksContainer>
                <Links linkColor={"#ffffff"} />
            </LinksContainer>
            <Copyright>© Chat Jump 2021</Copyright>
        </Container>
    );
};

export default Footer;
