import React from "react";
import styled from "@emotion/styled";
import assetMapping from "../assetMapping";

import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const CallToAction = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width:768px)");

    const VideoContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: start;
        position: relative;
        height: 90vh;
        overflow: hidden;
    `;

    const Video = styled(() => (
        <video
            src={assetMapping.gameplayVideo}
            playsinline="playsinline"
            autoplay="true"
            muted="true"
            loop="true"
            type="video/mp4"
            height={isMobile ? "85%" : "100%"}
        />
    ))``;

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

    const PlayButton = styled((props) => (
        <Button
            {...props}
            variant="contained"
            color="primary"
            size={isMobile ? "medium" : "large"}
        />
    ))`
        border-radius: 6px;
        color: #ffffff;
        font-family: Source Code Pro;
        font-weight: 700;
        font-size: ${isMobile ? "18px" : "28px"};
    `;

    return (
        <>
            <VideoContainer>
                <Video />
                <CTA>
                    <Title />
                    <Subtitle>jump high with your chat</Subtitle>
                    <PlayButton>PLAY NOW</PlayButton>
                </CTA>
            </VideoContainer>
        </>
    );
};

export default CallToAction;
