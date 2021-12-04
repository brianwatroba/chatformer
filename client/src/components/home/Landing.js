import React from "react";
import styled from "@emotion/styled";
import assetMapping from "../../utils/assetMapping";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import VideoBackground from "../shared/VideoBackground";
import PlayButton from "../shared/PlayButton";

const Landing = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width:768px)");

    const CTA = styled.div`
        position: absolute;
        top: 8%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.75);
        padding: ${isMobile ? "24px 60px" : "36px 72px"};
        border-radius: 4px;
        backdrop-filter: blur(8px);
    `;

    const Title = styled.img`
        content: url(${assetMapping.chatJumpTitle});
        height: ${isMobile ? "7vh" : "9vh"};
    `;

    const Subtitle = styled.div`
        display: flex;
        color: ${theme.palette.grey[700]};
        padding: ${isMobile ? "12px 0px 36px 0px" : "18px 0px 48px 0px"};
        font-size: ${isMobile ? "14px" : "18px"};
    `;

    return (
        <VideoBackground>
            <CTA>
                <Title />
                <Subtitle>jump high with your chat</Subtitle>
                <PlayButton>PLAY NOW</PlayButton>
            </CTA>
        </VideoBackground>
    );
};

export default Landing;
