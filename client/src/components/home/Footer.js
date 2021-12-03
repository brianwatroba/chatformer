import React from "react";
import styled from "@emotion/styled";

import useMediaQuery from "@mui/material/useMediaQuery";

import assetMapping from "../../assetMapping";
import FlexColumn from "../shared/FlexColumn";
import SectionTitle from "../shared/SectionTitle";
import PlayButton from "../shared/PlayButton";
import { links } from "../../utils/linkMapping";

const Footer = () => {
    const { mascot } = assetMapping;
    const isMobile = useMediaQuery("(max-width:768px)");

    const Container = styled(FlexColumn)`
        min-height: 100vh;
        background-color: #333333;
    `;

    const Mascot = styled.img`
        content: url(${mascot});
        height: ${isMobile ? "75px" : "125px"};
        padding: 24px;
    `;

    const Links = styled.div`
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: 65%;
        border-top: 1px solid #fff;
        margin: 96px 0px 24px 0px;
        padding: 24px 96px;
    `;

    const Link = styled.div`
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 18px;
        font-size: 20px;

        &:hover {
            font-weight: 700;
            cursor: pointer;
        }
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
            <PlayButton>PLAY NOW</PlayButton>
            <Links>
                <Link>play</Link>
                <Link>how it works</Link>
                <Link>leaderboards</Link>
                <Link>team</Link>
            </Links>
            <Copyright>© Chat Jump 2021</Copyright>
        </Container>
    );
};

export default Footer;
