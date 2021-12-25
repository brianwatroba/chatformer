import React from "react";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";

import assetMapping from "../../utils/assetMapping";
import { VideoBackground, PlayButton } from "../index";

const Landing = () => {
    const isMobile = useMediaQuery("(max-width:768px)");

    const CTA = styled.div`
        position: absolute;
        top: 8%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 1);
        padding: ${isMobile ? "48px 60px" : "64px 64px"};
        border-radius: 8px;
        backdrop-filter: blur(8px);
    `;

    const Title = styled.img`
        content: url(${assetMapping.chatJumpTitle});
        height: ${isMobile ? "7vh" : "9vh"};
    `;

    const Subtitle = styled.div`
        display: flex;
        color: #808080;
        padding: ${isMobile ? "12px 0px 36px 0px" : "18px 0px 64px 0px"};
        font-size: ${isMobile ? "18px" : "22px"};
        font-family: Cabin;
    `;

    return (
        <VideoBackground>
            <CTA>
                <Title />
                <Subtitle>jump high with your chat</Subtitle>
                <PlayButton>play now</PlayButton>
            </CTA>
        </VideoBackground>
    );
};

export default Landing;
